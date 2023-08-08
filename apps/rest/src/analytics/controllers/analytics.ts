import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response, RestController } from '@libs/boat';
import { AnalyticsApiService } from '../services/service';
import { UserTransformer } from '@libs/users';
import { AuthGuard } from '@libs/auth';

@Controller('analytics')
export class AnalyticsController extends RestController {
  constructor(private readonly service: AnalyticsApiService) {
    super();
  }

  @Get('')
  async myProducts(@Req() req: Request, @Res() res: Response) {
    const response= await this.service.get(req.all());
    return res.success(
      await this.transform(req.user, new UserTransformer(), { req }),
    );
  }
}
