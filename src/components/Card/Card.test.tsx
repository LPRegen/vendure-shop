import { render, screen } from '@testing-library/react';
import { Card, CardProps } from './Card';

const mockedCard: CardProps = {
  img: {
    src: '',
    alt: 'an image',
  },
  title: 'Card title',
  description:
    'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
  price: 853.79,
};

describe('Card comp', () => {
  it('Renders component', () => {
    render(<Card data-testid="card" {...mockedCard} />);

    const cardEl = screen.getByTestId('card');
    expect(cardEl).toBeInTheDocument();
  });

  it('Image contains src', () => {
    render(<Card {...mockedCard} />);
    const imgEl = screen.getByRole('img') as HTMLImageElement;
    expect(imgEl).toBeInTheDocument();
    expect(imgEl).toHaveAttribute('src');
  });
  // TEST: alt att
});
