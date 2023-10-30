import { gql } from '@apollo/client';

export const ORDER_DETAILS = gql`
  fragment OrderDetails on Order {
    id
    total
  }
`;
