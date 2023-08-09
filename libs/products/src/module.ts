import { Module } from '@nestjs/common';
import { ProductsService } from './services/products';
import { PRODUCT_REPOSITORY } from './constants';
import { ProductRepository } from './repositories';
import { BoatModule } from '@libs/boat';

@Module({
  imports: [BoatModule],
  providers: [
    ProductsService,
    { provide: PRODUCT_REPOSITORY, useClass: ProductRepository },
  ],
  exports: [ProductsService],
})
export class ProductsModule {}

