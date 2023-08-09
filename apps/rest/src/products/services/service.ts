import { BaseValidator } from '@libs/boat/validator';
import { Injectable } from '@nestjs/common';
import { ProductsLibService } from 'lib/products';
import { SearchProductDto } from '../validators';

@Injectable()
export class ProductApiService {
  constructor(
    private readonly products: ProductsLibService,
    private readonly validator: BaseValidator,
  ) {}

   
  async allProducts (inputs: Record<string, any>) {
    const validParams = await this.validator.fire(inputs, SearchProductDto);
    return  await this.products.getProducts(validParams);
  }

  async myProducts (inputs: Record<string, any>,user) {
    const validParams = await this.validator.fire(inputs, SearchProductDto);
    return  await this.products.myProducts(validParams,user);
  }
}
