import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from '../components/Navbar';
import { useRouter } from 'next/router';

// Mock the next/image component
jest.mock('next/image', () => ({
  __esModule: true,
  //@ts-ignore
  default: ({ src, alt }) => <img src={src} alt={alt} />
}));

// Mock the next/link component
jest.mock('next/link', () => ({
  __esModule: true,
  //@ts-ignore
  default: ({ href, children }) => <a href={href}>{children}</a>
}));

// Mock the useRouter hook from next/router
jest.mock('next/router', () => ({
  useRouter: jest.fn()
}));

describe('Navbar Component', () => {
  const useRouterMock = useRouter as jest.MockedFunction<typeof useRouter>;

  beforeEach(() => {
    useRouterMock.mockReturnValue({
      pathname: '/common-lore',
      route: '',
      //@ts-ignore
      query: '',
      asPath: '',
      push: jest.fn(),
      replace: jest.fn(),
      reload: jest.fn(),
      back: jest.fn(),
      prefetch: jest.fn(),
      beforePopState: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
        emit: jest.fn(),
      },
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders the navbar with menu items', () => {
    render(<Navbar />);

    expect(screen.getByAltText('Teothe Icon')).toBeInTheDocument();
    expect(screen.getByText('Common Lore')).toBeInTheDocument();
    expect(screen.getByText('Deities')).toBeInTheDocument();
    expect(screen.getByText('Races')).toBeInTheDocument();
    expect(screen.getByText('Library')).toBeInTheDocument();
    expect(screen.getByText('Tables')).toBeInTheDocument();
    expect(screen.getByText('Map Overlay')).toBeInTheDocument();
    expect(screen.getByText("DM's Works")).toBeInTheDocument();
    expect(screen.getByText('Generators')).toBeInTheDocument();
  });

  test('sets the selected key based on the current path', () => {
    render(<Navbar />);
    
    // Ensure that the "Common Lore" item is selected based on the pathname
    expect(screen.getByText('Common Lore').closest('li')).toBeInTheDocument();
  });

  test('updates selected key on menu item click', () => {
    render(<Navbar />);

    fireEvent.click(screen.getByText('Deities'));

    // Ensure that the "Deities" item is selected
    expect(screen.getByText('Deities').closest('li')).toBeInTheDocument();
  });
});