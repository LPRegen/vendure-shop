import { gql } from '@apollo/client';

export const GET_PRODUCT_LIST = gql`
  query get_product_list {
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
        }
      }
    }
  }
`;

export const GET_ACTIVE_ORDER = gql`
  query active_order_details {
    activeOrder {
      id
      total
    }
  }
`;

// TODO: include fragments
