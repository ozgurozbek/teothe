import React from 'react';
import { render } from '@testing-library/react';
import Language from '../components/languages/languages';
import '@testing-library/jest-dom';

describe('Language', () => {
  const baseProps = {
    languageProps: {
      originalWord: 'Hello',
      translatedWord: 'Greetings',
      homebrew: 'True',
    },
    borderProp: 'border-class',
  };

  test('renders without crashing', () => {
    render(<Language {...baseProps} />);
  });

  test('displays original and translated words', () => {
    const { getByText } = render(<Language {...baseProps} />);
    expect(getByText('Hello : Greetings')).not.toBeNull();
  });

  test('applies correct class for homebrew "True"', () => {
    const { container } = render(<Language {...baseProps} />);
    expect((container.firstChild as HTMLElement).className).toContain('text-pink-600');
  });

  test('applies correct class for homebrew "Partial"', () => {
    const props = {
      languageProps: {
        originalWord: 'Hello',
        translatedWord: 'Greetings',
        homebrew: 'Partial',
      },
      borderProp: 'border-class',
    };
    const { container } = render(<Language {...props} />);
    expect((container.firstChild as HTMLElement).className).toContain('italic');
  });

  test('applies correct class for homebrew other values', () => {
    const props = {
      languageProps: {
        originalWord: 'Hello',
        translatedWord: 'Greetings',
        homebrew: 'False',
      },
      borderProp: 'border-class',
    };
    const { container } = render(<Language {...props} />);
    expect((container.firstChild as HTMLElement).className).toContain('text-white');
  });

  test('applies borderProp class', () => {
    const { container } = render(<Language {...baseProps} />);
    expect((container.firstChild as HTMLElement).className).toContain('border-class');
  });

  test('sets correct title attribute based on homebrew prop', () => {
    const { container, rerender } = render(<Language {...baseProps} />);
    expect((container.firstChild as HTMLElement)).toHaveAttribute('title', 'Homebrew Entry');

    rerender(
      <Language
        languageProps={{ originalWord: 'Hello', translatedWord: 'Greetings', homebrew: 'Partial' }}
      />
    );
    expect((container.firstChild as HTMLElement)).toHaveAttribute('title', 'Partially Altered');

    rerender(
      <Language
        languageProps={{ originalWord: 'Hello', translatedWord: 'Greetings', homebrew: 'False' }}
      />
    );
    expect((container.firstChild as HTMLElement)).toHaveAttribute('title', '');
  });
});
