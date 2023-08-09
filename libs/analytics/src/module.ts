import { Module } from '@nestjs/common';
import { AnalyticsService } from './services/analytics';
import { ANALYTIC_REPOSITORY } from './constants';
import { AnalyticsRepository } from './repositories';
import { BoatModule } from '@libs/boat';

@Module({
  imports: [BoatModule],
  providers: [
    AnalyticsService,
    { provide: ANALYTIC_REPOSITORY, useClass: AnalyticsRepository },
  ],
  exports: [AnalyticsService],
})
export class AnalyticsModule {}

