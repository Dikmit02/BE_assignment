import { Transformer } from '@libs/boat';
import { IProduct$Model } from '../interface/product';
import { FeaturesModel } from '../models';

export class ProductTransformer extends Transformer {
  async transform(product: IProduct$Model): Promise<Record<string, any>> {
    return {
      productId: product?.productId,
      productName: product?.productName,
      features:await this.includeFeatures(product)
      
    };
  }

  async includeFeatures(product:IProduct$Model) {
    return FeaturesModel.query().where({productId:product.productId})
  }
}
