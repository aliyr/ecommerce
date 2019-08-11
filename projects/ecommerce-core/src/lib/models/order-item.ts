import {Product} from './product';
import {Attribute} from './attribute';

export interface OrderItem {
  product: Product;
  paidAttributes?: Attribute[];
  noAttributes?: Attribute[];
}
