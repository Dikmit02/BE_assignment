import { ObjectionModel, SortableSchema } from '@libs/boat';

export interface IProduct$Model extends ObjectionModel {
  productId?: string;
  ProductName?: string;
  features?: IProductFeatures$Model[];
 
}


export interface IProduct$SchemaModel extends SortableSchema {
  q?: string;
  sort?: string;
  status?: number;
  page?: number;
  perPage?: number;
}

interface IProductFeatures$Model  extends ObjectionModel {
  featureId?: string;
  featureName?: string;
  price?: number;
 
}


