import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AnalyticsRepositoryContract } from './contract';
import { DatabaseRepository, InjectModel } from '@libs/boat/db';
import { AnalyticsModel } from 'lib/analytics/models';
import { IAnalytics$Model } from 'lib/analytics/interface/analytics';

@Injectable()
export class AnalyticsRepository
  extends DatabaseRepository<IAnalytics$Model>
  implements AnalyticsRepositoryContract
{
  @InjectModel(AnalyticsModel)
  model: AnalyticsModel;
}
