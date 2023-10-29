import { GraphQLError } from 'graphql';
import { GET_PRODUCT_LIST } from '../graphql/queries';
import { ItemsData } from '../types';

export const productListMockSuccess: Array<{
  request: { query: typeof GET_PRODUCT_LIST };
  result: { data: ItemsData };
}> = [
  {
    request: {
      query: GET_PRODUCT_LIST,
    },
    result: {
      data: {
        products: {
          items: [
            {
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
            {
              id: '2',
              name: 'Tablet',
              description:
                'If the computer were invented today, what would it look like? It would be powerful enough for any task. So mobile you could take it everywhere. And so intuitive you could use it any way you wanted — with touch, a keyboard, or even a pencil. In other words, it wouldn’t really be a "computer." It would be Tablet.',
              featuredAsset: {
                source:
                  'https://demo.vendure.io/assets/source/5a/kelly-sikkema-685291-unsplash.jpg',
                name: 'kelly-sikkema-685291-unsplash.jpg',
              },
              variants: [
                {
                  id: '5',
                  price: 32900,
                },
                {
                  id: '6',
                  price: 44500,
                },
              ],
            },
          ],
        },
      },
    },
  },
];

export const productListMockError: Array<{
  request: { query: typeof GET_PRODUCT_LIST };
  error: GraphQLError;
}> = [
  {
    request: {
      query: GET_PRODUCT_LIST,
    },
    error: new GraphQLError('Mock error!'),
  },
];
