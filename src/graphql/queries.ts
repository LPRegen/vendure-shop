import { gql } from '@apollo/client';
import {
  PRODUCT_DETAILS,
  ORDER_DETAILS,
  VARIANT_DETAILS,
  ASSET_DETAILS,
} from './fragments';

export const GET_PRODUCT_LIST = gql`
  ${ASSET_DETAILS}
  ${PRODUCT_DETAILS}
  ${VARIANT_DETAILS}

  query get_product_list {
    products(options: { take: 12 }) {
      items {
        ...ProductDetails
        featuredAsset {
          ...AssetDetails
        }
        variants {
          ...VariantDetails
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
