import { ObjectionModel } from '@libs/boat';

export interface IAnalytics$Model extends ObjectionModel {
  AnalyticsName?: string;
  email?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
}
