import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../App';

describe('App component tests', () => {
  it('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/Resustyle/i);
    expect(linkElement).toBeInTheDocument();
  });
});

