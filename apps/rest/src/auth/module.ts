import { Module } from '@nestjs/common';
import { AuthController } from './controllers';
import { LocalService, Services } from './services';
import imports from './imports';

@Module({
  imports: imports,
  controllers: [AuthController],
  providers: Services,
  exports: LocalService,
})
export class AuthApiModule {}
