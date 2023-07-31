import { Pagination } from '@libs/boat';
import { RepositoryContract } from '@libs/boat/db';
import { IUser$Model } from '@libs/users';

export interface UserRepositoryContract
  extends RepositoryContract<IUser$Model> {}
