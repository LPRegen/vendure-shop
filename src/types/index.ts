interface Asset {
  source: string;
  name: string;
}

interface Variants {
  id: string;
  price: number;
}

export interface ActiveOrder {
  activeOrder: {
    id: string;
    total: number;
  };
}

export interface CardProps {
  id: string;
  featuredAsset: Asset;
  name: string;
  description: string;
  variants: Array<Variants>;
}

export interface ItemsData {
  products: {
    items: Array<CardProps>;
  };
}
