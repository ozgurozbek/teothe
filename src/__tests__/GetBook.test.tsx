import React from 'react';
import { render } from '@testing-library/react';
import GetBook from '../components/library/GetBook';
import '@testing-library/jest-dom';

describe('GetBook', () => {
  const baseProps = {
    bookProps: {
      name: 'Sample Book',
      author: 'Author Name',
      image: '/Books/sample.png',
      url: 'https://example.com/book',
    },
  };

  test('renders without crashing', () => {
    render(<GetBook {...baseProps} />);
  });

  test('displays book name and author', () => {
    const { getAllByText } = render(<GetBook {...baseProps} />);
    expect(getAllByText('Sample Book').length).toBeGreaterThan(0);
    expect(getAllByText('Author Name').length).toBeGreaterThan(0);
  });

  test('uses default author if none provided', () => {
    const props = {
      bookProps: {
        name: 'Sample Book',
        url: 'https://example.com/book',
      },
    };
    const { getAllByText } = render(<GetBook {...props} />);
    expect(getAllByText('Unknown').length).toBeGreaterThan(0);
  });
});
