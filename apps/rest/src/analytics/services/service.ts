import { BaseValidator } from '@libs/boat/validator';
import { IUser$Model, UserLibService } from '@libs/users';
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { AnalyticsLibService } from 'lib/analytics';

@Injectable()
export class AnalyticsApiService {
  constructor(
    private readonly analytics: AnalyticsLibService,
  ) {}

  async getAnalytics(inputs: Record<string, any>) {
    return  await this.analytics.getAnalytics(inputs);
  }


}
