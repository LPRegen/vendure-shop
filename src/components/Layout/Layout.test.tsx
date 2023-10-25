import { render, screen } from '@testing-library/react';
import { Layout } from './Layout';

describe('Layout comp', () => {
  it('Renders item', () => {
    render(
      <Layout>
        <div>Child component</div>
        <div>Child component</div>
      </Layout>
    );
  });
  it('Renders children', () => {
    render(
      <Layout>
        <div data-testid="child">A child</div>
      </Layout>
    );
    const layoutEl = screen.getByTestId('child');
    expect(layoutEl).toBeInTheDocument();
  });
});
