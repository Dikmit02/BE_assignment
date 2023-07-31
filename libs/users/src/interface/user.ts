import { ObjectionModel } from '@libs/boat';

export interface IUser$Model extends ObjectionModel {
  userName?: string;
  email?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
}
