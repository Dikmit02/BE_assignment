import { Transformer } from '@libs/boat';

import { IUser$Model } from '../interface/user';

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
      dob:user?.dob
    };
  }
}
