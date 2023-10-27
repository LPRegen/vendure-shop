import { gql } from '@apollo/client';

export const GET_PRODUCT_LIST = gql`
  query {
    products(options: { take: 12 }) {
      items {
        id
        name
        description
        featuredAsset {
          source
          name
        }
        variants {
          id
          price
          productId
        }
      }
    }
  }
`;

// TODO: include fragments
