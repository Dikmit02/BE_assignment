import { BoatModule } from '@libs/boat';
import { Module } from '@nestjs/common';
import { AuthApiModule } from './auth';

@Module({
  imports: [BoatModule, AuthApiModule],
  controllers: [],
  providers: [],
})
export class RestModule {}
