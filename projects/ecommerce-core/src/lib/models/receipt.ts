import {OrderItem} from './order-item';

export interface Receipt {
  takeaway: string;
  orderItems?: OrderItem[];
  subTotal: number;
  currency: string;
  deliveryCharge?: number;
  total: number;
  note: string;
}
