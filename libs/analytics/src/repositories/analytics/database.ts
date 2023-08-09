import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AnalyticsRepositoryContract } from './contract';
import { DatabaseRepository, InjectModel } from '@libs/boat/db';
import { AnalyticsModel, UserChartModel } from 'lib/analytics/models';
import { IAnalytics$Model, IAnalytics$SchemaModel } from 'lib/analytics/interface/analytics';
import { Pagination } from '@libs/boat';
import { get } from 'lodash';

@Injectable()
export class AnalyticsRepository
  extends DatabaseRepository<IAnalytics$Model>
  implements AnalyticsRepositoryContract
{
  @InjectModel(AnalyticsModel)
  model: AnalyticsModel;



  async getAnalytics(inputs: IAnalytics$SchemaModel,user): Promise<Pagination<IAnalytics$Model>> {

    const query = this.query();

    query.whereIn('chart_id',UserChartModel.query().distinct('chart_id').where({userId:user.id}))

    return get(inputs, 'paginate', true)
      ? query.paginate<IAnalytics$Model>(inputs.page, inputs.perPage)
      : query.allPages<IAnalytics$Model>();
  }

 
}
