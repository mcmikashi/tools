import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FormulaireRandom from './FormulaireRandom';

describe('<FormulaireRandom />', () => {
  test('it should mount', () => {
    render(<FormulaireRandom />);
    
    const formulaireRandom = screen.getByTestId('FormulaireRandom');

    expect(formulaireRandom).toBeInTheDocument();
  });
});