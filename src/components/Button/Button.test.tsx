import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
  it('Executes handler onClick', async () => {
    const handleClick = jest.fn();
    const user = userEvent.setup();

    render(<Button onClick={handleClick}>Click me!</Button>);

    const el = screen.getByRole('button', { name: /Click me!/i });
    await user.click(el);

    expect(handleClick).toHaveBeenCalled();
  });
  // TEST: Keyboard interaction
  // TEST: When it's disabled, handleClick isn't executed.
  // TEST: Has corresponding role
});
