import React from 'react';
import { render, screen } from '@testing-library/react';
import CodexList from '../components/codex/CodexList';

// Mock CodexEntry to prevent antd/next import issues
jest.mock('../components/codex/CodexEntry', () => {
  return function MockedCodexEntry({ title }: { title: string }) {
    return <li data-testid="codex-entry">{title}</li>;
  };
});

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

  test('renders post titles using mocked CodexEntry', () => {
    render(<CodexList posts={samplePosts} />);
    expect(screen.getAllByTestId('codex-entry')).toHaveLength(2);
  });
});
