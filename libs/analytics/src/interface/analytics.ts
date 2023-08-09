import { ObjectionModel, SortableSchema } from '@libs/boat';

export interface IAnalytics$Model extends ObjectionModel {
  chartId?: string;
  title?: string;
  dataType?: string;
  data?: IProductData$Model[];
}


export interface IAnalytics$SchemaModel extends SortableSchema {
  q?: string;
  sort?: string;
  status?: number;
  page?: number;
  perPage?: number;
}


interface IProductData$Model  extends ObjectionModel {
  country?: string;
  phising?: number;
  awarness?: number;
 
}
