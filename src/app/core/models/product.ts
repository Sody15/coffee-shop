export interface Product {
  id: number;
  name: string;
  price: number;
  imgSrc: string;
  desc: string;
  type: ProductType;
  color?: string;
}

export type ProductType = 'coffee' | 'card' | 'subscription';
