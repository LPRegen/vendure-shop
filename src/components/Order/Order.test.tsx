import { render, screen } from '@testing-library/react';
import { OrderProps } from '../../types';
import { Order } from './Order';

const mockOrder: OrderProps = {
  customer: 'John',
  total: 1820,
};

describe('Order comp', () => {
  it('Renders component', () => {
    render(<Order {...mockOrder} />);
    const el = screen.getByTestId('order');
    expect(el).toBeInTheDocument();
  });
});
