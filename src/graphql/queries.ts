import { gql } from '@apollo/client';
import { ORDER_DETAILS } from './fragments';

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
  ${ORDER_DETAILS}
  query active_order_details {
    activeOrder {
      ...OrderDetails
    }
  }
`;
