import { Pagination } from '@libs/boat';
import { RepositoryContract } from '@libs/boat/db';
import { IAnalytics$Model } from 'lib/analytics/interface/analytics';

export interface AnalyticsRepositoryContract
  extends RepositoryContract<IAnalytics$Model> {}
