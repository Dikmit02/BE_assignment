import { Inject, Injectable } from '@nestjs/common';
import { USER_REPOSITORY } from '../constants';
import { UserRepositoryContract } from '../repositories';
import { IUser$Model } from '@libs/users';

@Injectable()
export class UserLibService {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly users: UserRepositoryContract,
  ) {}

  async updateWhere(where: IUser$Model, params: IUser$Model) {
    return await this.users.update(where, params);
  }

  async createUser(params: IUser$Model) {
    return await this.users.create(params);
  }

  async updateUser(userId: number, params: IUser$Model) {
    await this.users.updateWhere({ id: userId }, params);
    return await this.users.firstWhere({ id: userId });
  }

  async firstWhere(where: IUser$Model, error = true) {
    return await this.users.firstWhere(where, error);
  }
}
