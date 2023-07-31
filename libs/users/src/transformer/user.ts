import { Transformer } from '@libs/boat';

import { IUser$Model } from '../interface/user';

export class UserTransformer extends Transformer {
  public defaultIncludes: any[] = [];
  public availableIncludes = ['usageLimit', 'doctorDetails'];
  async transform(user: IUser$Model): Promise<Record<string, any>> {
    return {
      id: user.uuid,
      firstName: user?.firstName?.replace(/\s+/g, ' ').trim(),
      lastName: user?.lastName?.replace(/\s+/g, ' ').trim(),
      email: user.email,
    };
  }
}
