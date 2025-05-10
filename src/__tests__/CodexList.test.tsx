import React from 'react';
import { render } from '@testing-library/react';
import CodexList from '../components/codex/CodexList';

const samplePosts = [
  {
    slug: 'post-1',
    title: 'Post 1',
    date: '2025-05-10',
    description: 'Description 1',
    category: 'Category 1',
    contentWarning: 'Warning 1',
    staffPick: 'True',
    duration: 5,
  },
  {
    slug: 'post-2',
    title: 'Post 2',
    date: '2025-05-09',
    description: 'Description 2',
    category: 'Category 2',
    contentWarning: '',
    staffPick: 'False',
    duration: 1,
  },
];

describe('CodexList', () => {
  test('renders without crashing', () => {
    render(<CodexList posts={samplePosts} />);
  });

  test('matches snapshot', () => {
    const { asFragment } = render(<CodexList posts={samplePosts} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders post titles as links', () => {
    const { getByText } = render(<CodexList posts={samplePosts} />);
  });

  test('renders content warning and staff pick badges', () => {
    const { getByText, queryByText } = render(<CodexList posts={samplePosts} />);
  });

  test('renders post descriptions and metadata', () => {
    const { getByText } = render(<CodexList posts={samplePosts} />);
  });
});
