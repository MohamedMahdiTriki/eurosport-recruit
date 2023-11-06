import { render, screen } from '@testing-library/react';
import SimpleFooter from './simple-footer';

describe('SimpleFooter component', () => {
  test('renders SimpleFooter', () => {
    
    render(<SimpleFooter />);
    const footerElement = screen.getByText('Tailwind', { exact: false });
    expect(footerElement).toBeInTheDocument();
  });
});