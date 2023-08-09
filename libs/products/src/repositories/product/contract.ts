import { Pagination } from '@libs/boat';
import { RepositoryContract } from '@libs/boat/db';
import { IProduct$Model, IProduct$SchemaModel } from 'lib/products/interface/product';


export interface ProductRepositoryContract
  extends RepositoryContract<IProduct$Model> {
    search(inputs: IProduct$SchemaModel): Promise<Pagination<IProduct$Model>>;
    myProducts(inputs: IProduct$SchemaModel,user): Promise<Pagination<IProduct$Model>>;
  }
