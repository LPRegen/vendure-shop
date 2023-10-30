import { GET_ACTIVE_ORDER } from '../graphql/queries';
import { GraphQLError } from 'graphql';
import { ActiveOrder } from '../types';

export const orderMockSuccess: Array<{
  request: { query: typeof GET_ACTIVE_ORDER };
  result: { data: ActiveOrder };
}> = [
  {
    request: {
      query: GET_ACTIVE_ORDER,
    },
    result: {
      data: {
        activeOrder: {
          id: '1',
          total: 2000.0,
        },
      },
    },
  },
];

export const orderMockNullOrder: Array<{
  request: { query: typeof GET_ACTIVE_ORDER };
  result: { data: null };
}> = [
  {
    request: {
      query: GET_ACTIVE_ORDER,
    },
    result: {
      data: null,
    },
  },
];

export const orderMockError: Array<{
  request: { query: typeof GET_ACTIVE_ORDER };
  error: GraphQLError;
}> = [
  {
    request: {
      query: GET_ACTIVE_ORDER,
    },
    error: new GraphQLError('Mock error!'),
  },
];
