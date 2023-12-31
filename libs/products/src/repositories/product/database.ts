import { Injectable } from '@nestjs/common';
import { ProductRepositoryContract } from './contract';
import { DatabaseRepository, InjectModel } from '@libs/boat/db';
import { IProduct$Model, IProduct$SchemaModel } from 'lib/products/interface/product';
import { FeaturesModel, ProductModel, UserProductFeaturesModel } from 'lib/products/models';
import { Pagination } from '@libs/boat';
import { get } from 'lodash';

@Injectable()
export class ProductRepository
  extends DatabaseRepository<IProduct$Model>
  implements ProductRepositoryContract
{
  @InjectModel(ProductModel)
  model: ProductModel;

  search(inputs: IProduct$SchemaModel): Promise<Pagination<IProduct$Model>> {
    const query = this.query();

    if (inputs.q) {
      query.andWhere('productName', 'like', `%${inputs.q}%`);
    }
   
    return get(inputs, 'paginate', true)
      ? query.paginate<IProduct$Model>(inputs.page, inputs.perPage)
      : query.allPages<IProduct$Model>();
  }

  myProducts(inputs: IProduct$SchemaModel,user): Promise<Pagination<IProduct$Model>> {
    const query = this.query();
    if (inputs.q) {
      query.andWhere('productName', 'like', `%${inputs.q}%`);
    }
    query.whereIn('productId',FeaturesModel.query().distinct('product_id').whereIn('feature_id',UserProductFeaturesModel.query().distinct('product_feature_id').where({userId:user.id})))

    return get(inputs, 'paginate', true)
      ? query.paginate<IProduct$Model>(inputs.page, inputs.perPage)
      : query.allPages<IProduct$Model>();
  }
}
