import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ProductRepositoryContract } from './contract';
import { DatabaseRepository, InjectModel } from '@libs/boat/db';
import { IProduct$Model } from 'lib/products/interface/product';
import { ProductModel } from 'lib/products/models';

@Injectable()
export class ProductRepository
  extends DatabaseRepository<IProduct$Model>
  implements ProductRepositoryContract
{
  @InjectModel(ProductModel)
  model: ProductModel;
}
