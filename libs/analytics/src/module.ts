import { Module } from '@nestjs/common';
import { AnalyticsLibService } from './services/analytics';
import { ANALYTIC_REPOSITORY } from './constants';
import { AnalyticsRepository } from './repositories';
import { BoatModule } from '@libs/boat';

@Module({
  imports: [BoatModule],
  providers: [
    AnalyticsLibService,
    { provide: ANALYTIC_REPOSITORY, useClass: AnalyticsRepository },
  ],
  exports: [AnalyticsLibService],
})
export class AnalyticsModule {}

