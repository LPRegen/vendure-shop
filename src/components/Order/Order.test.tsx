import { MockedProvider } from '@apollo/client/testing';
import { render, screen } from '@testing-library/react';
import {
  orderMockError,
  orderMockNullOrder,
  orderMockSuccess,
} from '../../mocks/orderMock';
import { Order } from './Order';

describe('Order comp', () => {
  it('Renders component', async () => {
    render(
      <MockedProvider mocks={orderMockSuccess} addTypename={false}>
        <Order />
      </MockedProvider>
    );

    // const totalMsg = await screen.findByText('Total:');
    // expect(totalMsg).toBeInTheDocument();

    const totalAmount = await screen.findByText('$200.00');
    expect(totalAmount).toBeInTheDocument();
  });

  it('Informs loading state', () => {
    render(
      <MockedProvider mocks={orderMockSuccess} addTypename={false}>
        <Order />
      </MockedProvider>
    );

    const loadingMsg = screen.getByText('Loading info');
    expect(loadingMsg).toBeInTheDocument();
  });

  it('Informs error state', async () => {
    render(
      <MockedProvider mocks={orderMockError}>
        <Order />
      </MockedProvider>
    );
    await screen.findByTestId('order');

    const errorMsg = screen.getByText('Error loading order');
    expect(errorMsg).toBeInTheDocument();
  });

  it('Informs not active order available', async () => {
    render(
      <MockedProvider mocks={orderMockNullOrder} addTypename={false}>
        <Order />
      </MockedProvider>
    );

    const noOrderMsg = await screen.findByText('No active order available');
    expect(noOrderMsg).toBeInTheDocument();
  });
});
