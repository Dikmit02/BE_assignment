import { Transformer } from '@libs/boat';
import { IAnalytics$Model } from '../interface/analytics';

export class AnalyticsTransformer extends Transformer {
  public defaultIncludes: any[] = [];
  public availableIncludes = ['usageLimit', 'doctorDetails'];
  async transform(user: IAnalytics$Model): Promise<Record<string, any>> {
    return {
      id: user.uuid,
      firstName: user?.firstName?.replace(/\s+/g, ' ').trim(),
      lastName: user?.lastName?.replace(/\s+/g, ' ').trim(),
      email: user.email,
    };
  }
}
