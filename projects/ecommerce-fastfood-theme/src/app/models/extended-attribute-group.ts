import { ProductAttribute } from 'ecommerce-core';

export interface ExtendedAttributeGroup extends ProductAttribute {
  isOpen?: boolean;
  isValid?: boolean;
}
