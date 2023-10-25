import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button comp', () => {
  it('Render component', () => {
    render(<Button>Add to cart</Button>);
  });
  it('Has correct aria-label', () => {
    render(<Button>Add to cart</Button>);
    const el = screen.getByRole('button');
    expect(el).toBeInTheDocument();
  });
});
