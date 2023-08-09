import { Module } from '@nestjs/common';
import { ProductsLibService } from './services/products';
import { PRODUCT_REPOSITORY } from './constants';
import { ProductRepository } from './repositories';
import { BoatModule } from '@libs/boat';

@Module({
  imports: [BoatModule],
  providers: [
    ProductsLibService,
    { provide: PRODUCT_REPOSITORY, useClass: ProductRepository },
  ],
  exports: [ProductsLibService],
})
export class ProductsModule {}

