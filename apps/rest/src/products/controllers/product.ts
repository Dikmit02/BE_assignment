import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response, RestController } from '@libs/boat';
import { ProductApiService } from '../services/service';
import { ProductTransformer } from 'lib/products';
import { AuthGuard } from '@libs/auth';

@Controller('')
export class ProductController extends RestController {
  constructor(private readonly service: ProductApiService) {
    super();
  }

  @Get('list-products')
  async listProducts(@Req() req: Request, @Res() res: Response) {
    const response= await this.service.allProducts(req.all());
    return res.success(
      await this.paginate(response, new ProductTransformer(), { req }),
    );
  }

  @AuthGuard()
  @Get('my-products')
  async myProducts(@Req() req: Request, @Res() res: Response) {
    const response= await this.service.myProducts(req.all(),req?.user);
    return res.success(
      await this.paginate(response, new ProductTransformer(), { req }),
    );
  }
}
