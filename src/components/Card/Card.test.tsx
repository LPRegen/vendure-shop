import { render, screen } from '@testing-library/react';
import { Card } from './Card';
import { cardMockSuccess } from '../../mocks/cardMock';
import { MockedProvider } from '@apollo/client/testing';

describe('Card comp', () => {
  it('Renders component', () => {
    render(
      <MockedProvider mocks={cardMockSuccess} addTypename={false}>
        <Card
          name={cardMockSuccess[0].result.data.name}
          id={cardMockSuccess[0].result.data.id}
          featuredAsset={cardMockSuccess[0].result.data.featuredAsset}
          description={cardMockSuccess[0].result.data.description}
          variants={cardMockSuccess[0].result.data.variants}
        />
      </MockedProvider>
    );

    const cardEl = screen.getByTestId('card');
    expect(cardEl).toBeInTheDocument();
  });

  describe('Card image', () => {
    it('Image contains src', () => {
      render(
        <MockedProvider mocks={cardMockSuccess} addTypename={false}>
          <Card
            name={cardMockSuccess[0].result.data.name}
            id={cardMockSuccess[0].result.data.id}
            featuredAsset={cardMockSuccess[0].result.data.featuredAsset}
            description={cardMockSuccess[0].result.data.description}
            variants={cardMockSuccess[0].result.data.variants}
          />
        </MockedProvider>
      );

      const imgEl = screen.getByRole('img') as HTMLImageElement;
      expect(imgEl).toHaveAttribute('src');
    });

    it('Image has alt attribute', () => {
      render(
        <MockedProvider mocks={cardMockSuccess} addTypename={false}>
          <Card
            name={cardMockSuccess[0].result.data.name}
            id={cardMockSuccess[0].result.data.id}
            featuredAsset={cardMockSuccess[0].result.data.featuredAsset}
            description={cardMockSuccess[0].result.data.description}
            variants={cardMockSuccess[0].result.data.variants}
          />
        </MockedProvider>
      );

      const imgEl = screen.getByRole('img') as HTMLImageElement;
      expect(imgEl).toHaveAttribute('alt');
    });

    it('render price in human readable format', () => {
      render(
        <MockedProvider mocks={cardMockSuccess} addTypename={false}>
          <Card
            name={cardMockSuccess[0].result.data.name}
            id={cardMockSuccess[0].result.data.id}
            featuredAsset={cardMockSuccess[0].result.data.featuredAsset}
            description={cardMockSuccess[0].result.data.description}
            variants={cardMockSuccess[0].result.data.variants}
          />
        </MockedProvider>
      );

      const price = screen.getByText('$129,900.00');
      expect(price).toBeInTheDocument();
    });
  });
});
