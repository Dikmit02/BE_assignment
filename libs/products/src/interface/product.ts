import { ObjectionModel } from '@libs/boat';

export interface IProduct$Model extends ObjectionModel {
  productId?: string;
  ProductName?: string;
  features?: IProductFeatures$Model[];
 
}


interface IProductFeatures$Model  extends ObjectionModel {
  featureId?: string;
  featureName?: string;
  price?: number;
 
}


