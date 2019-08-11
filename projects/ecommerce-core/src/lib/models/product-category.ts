import { Product } from "./product";
import { ProductSubCategory } from "./product-sub-category";

export interface ProductCategory {
  name: string;
  description: string;
  isActive: boolean;
  subCategory?: ProductSubCategory[];
  products?: Product[];
}
