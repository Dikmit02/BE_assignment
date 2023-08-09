import { Pagination } from '@libs/boat';
import { RepositoryContract } from '@libs/boat/db';
import { IProduct$Model } from 'lib/products/interface/product';


export interface ProductRepositoryContract
  extends RepositoryContract<IProduct$Model> {}
