import { render, screen } from '@testing-library/react';
import { CardProps } from '../../types';
import { Card } from './Card';

const mockedCard: CardProps = {
  featuredAsset: {
    source:
      'https://demo.vendure.io/assets/source/b6/derick-david-409858-unsplash.jpg',
    name: 'an image',
  },
  name: 'Card title',
  description:
    'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
  price: 853.79,
};

describe('Card comp', () => {
  it('Renders component', () => {
    render(<Card {...mockedCard} />);

    const cardEl = screen.getByTestId('card');
    expect(cardEl).toBeInTheDocument();
  });

  describe('Card image', () => {
    it('Image contains src', () => {
      render(<Card {...mockedCard} />);

      const imgEl = screen.getByRole('img') as HTMLImageElement;
      expect(imgEl).toHaveAttribute('src');
    });

    it('Image has alt attribute', () => {
      render(<Card {...mockedCard} />);

      const imgEl = screen.getByRole('img') as HTMLImageElement;
      expect(imgEl).toHaveAttribute('alt');
    });
  });
  // TEST: for query
});
