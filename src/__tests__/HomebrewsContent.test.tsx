import React from 'react';
import { render } from '@testing-library/react';
import HomebrewsContent from '../components/homebrews/HomebrewsContent';
import '@testing-library/jest-dom';

describe('HomebrewsContent', () => {
  test('renders without crashing', () => {
    render(<HomebrewsContent />);
  });

  test('matches snapshot', () => {
    const { asFragment } = render(<HomebrewsContent />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders category titles', () => {
    const { getByText } = render(<HomebrewsContent />);
    expect(getByText('Character')).toBeInTheDocument();
    expect(getByText('General')).toBeInTheDocument();
    expect(getByText('Social')).toBeInTheDocument();
    expect(getByText('Combat')).toBeInTheDocument();
  });
});
