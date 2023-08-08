import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response, RestController } from '@libs/boat';
import { ProductApiService } from '../services/service';
import { UserTransformer } from '@libs/users';
import { AuthGuard } from '@libs/auth';

@Controller('my-products')
export class ProductController extends RestController {
  constructor(private readonly service: ProductApiService) {
    super();
  }

  @Get('')
  async myProducts(@Req() req: Request, @Res() res: Response) {
    const response= await this.service.myProducts(req.all());
    return res.success(
      await this.transform(req.user, new UserTransformer(), { req }),
    );
  }
}
