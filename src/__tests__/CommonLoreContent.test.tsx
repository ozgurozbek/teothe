import React from 'react';
import { render } from '@testing-library/react';
import CommonLoreContent from '../components/commonlore/CommonLoreContent';

describe('CommonLoreContent', () => {
  test('renders without crashing', () => {
    render(<CommonLoreContent />);
  });

  test('matches snapshot', () => {
    const { asFragment } = render(<CommonLoreContent />);
    expect(asFragment()).toMatchSnapshot();
  });

});
