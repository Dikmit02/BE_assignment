import { BaseValidator } from '@libs/boat/validator';
import { IUser$Model, UserLibService } from '@libs/users';
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';
import { InvalidCredentials } from '@libs/boat';
import { JwtPayload } from '@libs/auth';
import { AuthLibService } from '@libs/auth/services/auth';
import { ProductsLibService } from 'lib/products';

@Injectable()
export class ProductApiService {
  constructor(
    private readonly products: ProductsLibService,
    private readonly validator: BaseValidator,
    private readonly config: ConfigService,
    private readonly authService: AuthLibService,
  ) {}

  async myProducts(inputs: Record<string, any>) {
    return  await this.products.getProducts(inputs);
  }
}
