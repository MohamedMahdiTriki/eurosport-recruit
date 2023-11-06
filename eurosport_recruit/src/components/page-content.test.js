import { render, screen } from '@testing-library/react'
import { PageContent } from "./page-content";

describe('PageContent component', () => {
    test('renders Cards if request succeeds', async () => {
      render(<PageContent />)
  
      const listItemElements = await screen.findAllByAltText('Scores');
      expect(listItemElements).not.toHaveLength(0);
    });
  });