export interface Product {
  id: number;
  name: string;
  price: number;
  imgSrc: string;
  type: ProductType;
}

export type ProductType = 'coffee' | 'card';
