interface Asset {
  source: string;
  name: string;
}

interface Variants {
  id: string;
  price: number;
}

export interface CardProps {
  featuredAsset: Asset;
  name: string;
  description: string;
  variants: Array<Variants>;
}
