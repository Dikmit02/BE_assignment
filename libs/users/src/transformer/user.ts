import { Transformer } from '@libs/boat';

import { IUser$Model } from '../interface/user';
import { AnalyticsModel, UserChartModel } from 'lib/analytics';
import { UserProductFeaturesModel } from 'lib/products';

export class UserTransformer extends Transformer {
  async transform(user: IUser$Model): Promise<Record<string, any>> {
    return {
      firstname: user?.firstname,
      lastname: user?.lastname,
      email: user.email,
      displayname:user?.displayname,
      username:user?.userName,
      profile:user?.profile,
      organization:user?.organization,
      dob:user?.dob,
      chart:await this.includeCharts(user),
      productFeatures:await this.includeProductFeatures(user)
    };
  }

  async includeCharts(user: IUser$Model) {
    return UserChartModel.query().select('chartId').where({userId:user?.id})
  }

  async includeProductFeatures(user: IUser$Model) {
    return UserProductFeaturesModel.query().select('productFeatureId').where({userId:user?.id})
  }
}
