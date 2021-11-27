import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Calculatrice from './Calculatrice';

describe('<Calculatrice />', () => {
  test('it should mount', () => {
    render(<Calculatrice />);
    
    const calculatrice = screen.getByTestId('Calculatrice');

    expect(calculatrice).toBeInTheDocument();
  });
});