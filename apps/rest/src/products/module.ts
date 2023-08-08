import { Module } from '@nestjs/common';
import {ProductController  } from './controllers';
import { LocalService, Services } from './services';
import imports from './imports';

@Module({
  imports: imports,
  controllers: [ProductController],
  providers: Services,
  exports: LocalService,
})
export class ProductApiModule {}
