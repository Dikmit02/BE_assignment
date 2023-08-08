import { BoatModule } from '@libs/boat';
import { Module } from '@nestjs/common';
import { AuthApiModule } from './auth';
import { AnalyticsApiModule } from './analytics';
import { ProductApiModule } from './products';

@Module({
  imports: [BoatModule, AuthApiModule,AnalyticsApiModule,ProductApiModule],
  controllers: [],
  providers: [],
})
export class RestModule {}
