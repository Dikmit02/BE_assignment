import { Transformer } from '@libs/boat';
import { IAnalytics$Model } from '../interface/analytics';

export class AnalyticsTransformer extends Transformer {
  public defaultIncludes: any[] = [];
  public availableIncludes = ['usageLimit', 'doctorDetails'];
  async transform(analytics: IAnalytics$Model): Promise<Record<string, any>> {
    return {
      id: analytics?.uuid,
      chartId: analytics?.chartId,
      title: analytics?.title,
      dataType: analytics?.dataType,
      data:analytics?.data
    };
  }
}
