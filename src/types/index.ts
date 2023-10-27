interface Variants {
  id: string;
  price: number;
}

export interface CardProps {
  featuredAsset: {
    source: string;
    name: string;
  };
  name: string;
  description: string;
  variants: Array<Variants>;
}

export interface OrderProps {
  customer: string;
  total: number;
}
