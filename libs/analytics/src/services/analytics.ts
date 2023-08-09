import { Inject, Injectable } from '@nestjs/common';
import { ANALYTIC_REPOSITORY } from '../constants';
import { AnalyticsRepositoryContract } from '../repositories';
import { IAnalytics$Model } from '../interface/analytics';

@Injectable()
export class AnalyticsLibService {
    constructor(
        @Inject(ANALYTIC_REPOSITORY)
        private readonly analytics: AnalyticsRepositoryContract,
    ) {}

    async updateWhere(where: IAnalytics$Model, params: IAnalytics$Model) {
      return await this.analytics.update(where, params);
    }
      
    async createUser(params: IAnalytics$Model) {
      return await this.analytics.create(params);
    }

    async getAnalytics(params:IAnalytics$Model){
      return await this.analytics.getWhere(params)
    }
    
    async updateUser(userId: number, params: IAnalytics$Model) {
      await this.analytics.updateWhere({ id: userId }, params);
      return await this.analytics.firstWhere({ id: userId });
    }
    
    async firstWhere(where: IAnalytics$Model, error = true) {
      return await this.analytics.firstWhere(where, error);
    }
}


