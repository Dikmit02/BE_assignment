import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserModel } from '@libs/users/models';
import { UserRepositoryContract } from './contract';
import { IUser$Model } from '@libs/users/interface/user';
import { DatabaseRepository, InjectModel } from '@libs/boat/db';

@Injectable()
export class UserRepository
  extends DatabaseRepository<IUser$Model>
  implements UserRepositoryContract
{
  @InjectModel(UserModel)
  model: UserModel;
}
