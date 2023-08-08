import { BaseValidator } from '@libs/boat/validator';
import { IUser$Model, UserLibService } from '@libs/users';
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';
import { InvalidCredentials } from '@libs/boat';
import { JwtPayload } from '@libs/auth';
import { AuthLibService } from '@libs/auth/services/auth';

@Injectable()
export class AnalyticsApiService {
  constructor(
    private readonly users: UserLibService,
    private readonly validator: BaseValidator,
    private readonly config: ConfigService,
    private readonly authService: AuthLibService,
  ) {}

  async get(inputs: Record<string, any>) {
    
  }


}
