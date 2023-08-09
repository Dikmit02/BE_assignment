import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';
import { UserLibService, IUser$Model } from '@libs/users';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { InvalidCredentials } from '@libs/boat';
import { JwtPayload } from './interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly userService: UserLibService,
    private readonly config: ConfigService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: JwtPayload): Promise<IUser$Model> {
    const { email } = payload;
    let user;
    if (email) {
      user = await this.userService.firstWhere({ email });
    }
    if (!user) {
      throw new InvalidCredentials();
    }
    return user;
  }
}
