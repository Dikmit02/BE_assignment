import { Module } from '@nestjs/common';
import { AnalyticsController } from './controllers';
import { LocalService, Services } from './services';
import imports from './imports';

@Module({
  imports: imports,
  controllers: [AnalyticsController],
  providers: Services,
  exports: LocalService,
})
export class AnalyticsApiModule {}
