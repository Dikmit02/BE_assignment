import { ObjectionModel } from '@libs/boat';

export interface IUser$Model extends ObjectionModel {
  id?:number,
  userName?: string;
  email?: string;
  password?: string;
  firstname?: string;
  lastname?: string;
  displayname?:string
  profile?:string,
  organization?:string,
  dob?:string
  
}
