import {Attribute} from './attribute';

export interface ProductAttribute {
   title: string;
   multiSelect: boolean;
   attributes: Attribute[];
}
