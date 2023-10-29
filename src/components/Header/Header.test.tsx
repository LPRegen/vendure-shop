import { MockedProvider } from '@apollo/client/testing';
import { render, screen } from '@testing-library/react';
import { GET_ACTIVE_ORDER } from '../../graphql/queries';
import { Header } from './Header';
import { ActiveOrder } from '../../types';

const mocks: Array<{
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
          total: 100,
        },
      },
    },
  },
];

describe('Header comp', () => {
  it('renders correctly', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Header />
      </MockedProvider>
    );

    const logo = screen.getByAltText('Santex logo');
    const orderComp = await screen.findByTestId('order');
    expect(logo).toBeInTheDocument();
    expect(orderComp).toBeInTheDocument();
  });

  it('logo has aria-hidden att', () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Header />
      </MockedProvider>
    );

    const logo = screen.getByAltText('Santex logo');
    expect(logo).toHaveAttribute('aria-hidden');
  });
});
