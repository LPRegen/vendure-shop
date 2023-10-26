import { render, screen } from '@testing-library/react';
import { CardProps } from '../../types';
import { Card } from './Card';

const mockedCard: CardProps = {
  img: {
    src: 'https://demo.vendure.io/assets/source/b6/derick-david-409858-unsplash.jpg',
    alt: 'an image',
  },
  title: 'Card title',
  description:
    'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
  price: 853.79,
};

describe('Card comp', () => {
  it('Renders component', () => {
    render(
      <Card
        data-testid="card"
        img={mockedCard.img}
        title={mockedCard.title}
        description={mockedCard.description}
        price={mockedCard.price}
      />
    );

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
