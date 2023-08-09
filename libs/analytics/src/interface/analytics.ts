import { ObjectionModel } from '@libs/boat';

export interface IAnalytics$Model extends ObjectionModel {
  chartId?: string;
  title?: string;
  dataType?: string;
  data?: IProductData$Model[];
}


interface IProductData$Model  extends ObjectionModel {
  country?: string;
  phising?: number;
  awarness?: number;
 
}
