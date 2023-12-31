import { Inject, Injectable } from '@nestjs/common';
import { PRODUCT_REPOSITORY } from '../constants';
import { ProductRepositoryContract } from '../repositories';
import { IProduct$Model, IProduct$SchemaModel } from '../interface/product';

@Injectable()
export class ProductsLibService {
    constructor(
        @Inject(PRODUCT_REPOSITORY)
        private readonly products: ProductRepositoryContract,
    ) {}


    async updateWhere(where: IProduct$Model, params: IProduct$Model) {
        return await this.products.update(where, params);
    }
    
      async createProduct(params: IProduct$Model) {
        return await this.products.create(params);
      }

      async getProducts(params: IProduct$SchemaModel){
        return await this.products.search(params)
      }
    
      async updateProduct(userId: number, params: IProduct$Model) {
        await this.products.updateWhere({ id: userId }, params);
        return await this.products.firstWhere({ id: userId });
      }
    
      async firstWhere(where: IProduct$Model, error = true) {
        return await this.products.firstWhere(where, error);
      }

      async myProducts(params: IProduct$SchemaModel,user){
        return await this.products.myProducts(params,user)
      }
}
