import { Pagination } from '@libs/boat';
import { RepositoryContract } from '@libs/boat/db';
import { IAnalytics$Model, IAnalytics$SchemaModel } from 'lib/analytics/interface/analytics';

export interface AnalyticsRepositoryContract
  extends RepositoryContract<IAnalytics$Model> {

    
    getAnalytics(inputs: IAnalytics$SchemaModel,user): Promise<Pagination<IAnalytics$Model>>;
 
  }
