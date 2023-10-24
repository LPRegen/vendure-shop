import { render, screen } from '@testing-library/react';
import { Header } from './Header';

describe('Header component', () => {
  it('Render component', () => {
    render(<Header />);
  });
});
