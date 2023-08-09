import { Transformer } from '@libs/boat';
import { IProduct$Model } from '../interface/product';

export class ProductTransformer extends Transformer {
  public defaultIncludes: any[] = [];
  public availableIncludes = ['usageLimit', 'doctorDetails'];
  async transform(product: IProduct$Model): Promise<Record<string, any>> {
    return {
      id: product.uuid,
      productId: product?.productId,
      ProductName: product?.ProductName,
      features: product?.features
    };
  }
}
