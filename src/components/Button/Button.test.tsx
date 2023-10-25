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

  it('Executes handler onClick w/ click', async () => {
    const handleClick = jest.fn();
    const user = userEvent.setup();

    render(<Button onClick={handleClick}>Click me!</Button>);

    const el = screen.getByRole('button', { name: /Click me!/i });
    await user.click(el);

    expect(handleClick).toHaveBeenCalled();
  });

  // TEST: Keyboard interaction
  // - on {Enter} and {Space} should be activated
  // it('Executes handler onClick w/ keyboard', async () => {
  //   const handleClick = jest.fn();
  //   const user = userEvent.setup();
  //   render(<Button onClick={handleClick}>Click me!</Button>);
  //   const el = screen.getByRole('button', { name: /Click me!/i });
  //   await user.keyboard('{Enter}');
  //   expect(el.).toHaveBeenCalled();
  // });

  // TEST: When it's disabled, handleClick isn't executed.
  it('Doesnt executes handler onClick if btn is disabled', async () => {
    const handleClick = jest.fn();
    const user = userEvent.setup();

    render(
      <Button onClick={handleClick} disabled>
        Disabled
      </Button>
    );

    const el = screen.getByRole('button', { name: /Disabled/i });

    await user.click(el);
    expect(handleClick).toHaveBeenCalled();
  });
  // TEST: Has corresponding role
});
