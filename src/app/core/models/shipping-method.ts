export type ShippingMethod = {
  id: string;
  name: string;
  carrier: 'USPS' | 'UPS';
  type: 'standard' | 'priority' | 'ground' | '2nd day' | 'next day';
  rate: number;
  isFree?: boolean;
};
