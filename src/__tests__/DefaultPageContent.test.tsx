import React from 'react';
import { render } from '@testing-library/react';
import DefaultPageContent from '../components/DefaultPageContent';

describe('DefaultPageContent', () => {
  test('renders without crashing', () => {
    render(<DefaultPageContent />);
  });

  test('matches snapshot', () => {
    const { asFragment } = render(<DefaultPageContent />);
    expect(asFragment()).toMatchSnapshot();
  });

});
