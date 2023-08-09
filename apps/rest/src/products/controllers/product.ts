import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response, RestController } from '@libs/boat';
import { ProductApiService } from '../services/service';
import { ProductTransformer } from 'lib/products';

@Controller('')
export class ProductController extends RestController {
  constructor(private readonly service: ProductApiService) {
    super();
  }

  @Get('list-products')
  async listProducts(@Req() req: Request, @Res() res: Response) {
    const response= await this.service.myProducts(req.all());
    return res.success(
      await this.paginate(response, new ProductTransformer(), { req }),
    );
  }


  @Get('my-products')
  async myProducts(@Req() req: Request, @Res() res: Response) {
    const response= await this.service.myProducts(req.all());
    return res.success(
      await this.transform(response, new ProductTransformer(), { req }),
    );
  }
}
