export interface CardProps {
  featuredAsset: {
    source: string;
    name: string;
  };
  name: string;
  description: string;
  price: number;
}

export interface OrderProps {
  customer: string;
  total: number;
}
