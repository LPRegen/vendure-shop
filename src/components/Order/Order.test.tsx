import { MockedProvider } from '@apollo/client/testing';
import { render, screen } from '@testing-library/react';
import { GraphQLError } from 'graphql';
import { GET_ACTIVE_ORDER } from '../../graphql/queries';
import { ActiveOrder } from '../../types';
import { Order } from './Order';

interface MockData {
  getActiveOrder: ActiveOrder;
}

const mocks: Array<{
  request: { query: typeof GET_ACTIVE_ORDER };
  result: { data: MockData };
}> = [
  {
    request: {
      query: GET_ACTIVE_ORDER,
    },
    result: {
      data: {
        getActiveOrder: {
          activeOrder: {
            id: '1',
            total: 200,
          },
        },
      },
    },
  },
];

const mockError: Array<{
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

describe('Order comp', () => {
  // TEST: Try mocking the process to add a product before checking the acc.
  // it('Renders component', async () => {
  //   render(
  //     <MockedProvider mocks={mocks} addTypename={false}>
  //       <Order />
  //     </MockedProvider>
  //   );
  //
  //   const totalMsg = await screen.findByText('Total:');
  //   expect(totalMsg).toBeInTheDocument();
  //
  //   const totalAmount = screen.getByText('$ 200');
  //   expect(totalAmount).toBeInTheDocument();
  // });

  it('Informs loading state', () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Order />
      </MockedProvider>
    );

    const loadingMsg = screen.getByText('Loading info');
    expect(loadingMsg).toBeInTheDocument();
  });

  it('Informs error state', async () => {
    render(
      <MockedProvider mocks={mockError}>
        <Order />
      </MockedProvider>
    );
    await screen.findByTestId('order');

    const errorMsg = screen.getByText('Error loading order');
    expect(errorMsg).toBeInTheDocument();
  });

  it('Informs not active order available', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Order />
      </MockedProvider>
    );

    const totalMsg = await screen.findByText('No active order available');
    expect(totalMsg).toBeInTheDocument();
  });
});
