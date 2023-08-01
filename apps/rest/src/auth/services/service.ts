import { BaseValidator } from '@libs/boat/validator';
import { IUser$Model, UserLibService } from '@libs/users';
import { Injectable } from '@nestjs/common';
import { LoginDto, SignUpDto } from '../validators';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';
import { InvalidCredentials } from '@libs/boat';
import { JwtPayload } from '@libs/auth';
import { AuthLibService } from '@libs/auth/services/auth';

@Injectable()
export class AuthApiService {
  constructor(
    private readonly users: UserLibService,
    private readonly validator: BaseValidator,
    private readonly config: ConfigService,
    private readonly authService: AuthLibService,
  ) {}

  async login(inputs: Record<string, any>) {
    const params = await this.validator.fire(inputs, LoginDto);
    const user = await this.users.firstWhere({ email: params.email });

    if (!(await this.validateUser(user, params.password))) {
      throw new InvalidCredentials();
    }
    const payload: JwtPayload = { uuid: user.uuid };
    const token = await this.authService.generateToken(payload);
    return { user, token };
  }

  async signup(inputs: Record<string, any>) {
    const params = await this.validator.fire(inputs, SignUpDto);
    const password = await this.hashPassword(params?.password);
    const user = await this.users.createUser({
      ...params,
      password,
    });
    const payload: JwtPayload = { uuid: user.uuid };
    const token = await this.authService.generateToken(payload);
    return { user, token };
  }

  async validateUser(user: IUser$Model, password: string): Promise<boolean> {
    const hash = await this.hashPassword(password);
    return bcrypt.compare(password, hash);
  }

  async hashPassword(password): Promise<string> {
    const hashkey = await this.config.get('auth.bcryptSalt');
    return await bcrypt.hash(password, hashkey);
  }
}