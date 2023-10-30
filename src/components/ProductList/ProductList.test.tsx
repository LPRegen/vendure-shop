import { MockedProvider } from '@apollo/client/testing';
import { render, screen } from '@testing-library/react';
import {
  productListMockError,
  productListMockSuccess,
} from '../../mocks/productListMock';
import { ProductList } from './ProductList';

describe('ProductList comp', () => {
  it('renders children', async () => {
    render(
      <MockedProvider mocks={productListMockSuccess} addTypename={false}>
        <ProductList />
      </MockedProvider>
    );

    const containerEl = await screen.findAllByTestId('grid-container');
    expect(containerEl.length).toBe(2);
  });

  it('informs loading state', () => {
    render(
      <MockedProvider mocks={productListMockSuccess} addTypename={false}>
        <ProductList />
      </MockedProvider>
    );

    const loadingMsg = screen.getByText('Loading products...');
    expect(loadingMsg).toBeInTheDocument();
  });

  it('informs error state', async () => {
    render(
      <MockedProvider mocks={productListMockError} addTypename={false}>
        <ProductList />
      </MockedProvider>
    );

    const errorMsg = await screen.findByText('Error loading products');
    expect(errorMsg).toBeInTheDocument();
  });
});
