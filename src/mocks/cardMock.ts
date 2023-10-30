import { ADD_PRODUCT_TO_ORDER } from '../graphql/mutations';
import { CardProps } from '../types';

export const cardMockSuccess: Array<{
  request: { query: typeof ADD_PRODUCT_TO_ORDER };
  result: { data: CardProps };
}> = [
  {
    request: {
      query: ADD_PRODUCT_TO_ORDER,
    },
    result: {
      data: {
        id: '1',
        name: 'Laptop',
        description:
          'Now equipped with seventh-generation Intel Core processors, Laptop is snappier than ever. From daily tasks like launching apps and opening files to more advanced computing, you can power through your day thanks to faster SSDs and Turbo Boost processing up to 3.6GHz.',
        featuredAsset: {
          source:
            'https://demo.vendure.io/assets/source/b6/derick-david-409858-unsplash.jpg',
          name: 'derick-david-409858-unsplash.jpg',
        },
        variants: [
          {
            id: '1',
            price: 129900,
          },
        ],
      },
    },
  },
];
