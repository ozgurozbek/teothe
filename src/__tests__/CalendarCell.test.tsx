import React from 'react';
import { render } from '@testing-library/react';
import CalendarCell from '../components/calendar/CalendarCell';
import '@testing-library/jest-dom';

describe('CalendarCell', () => {
  const baseProps = {
    dayNumber: 15,
    moonPhase: 'Full Moon',
  };

  test('renders without crashing', () => {
    render(<CalendarCell cellProps={baseProps} />);
  });

  test('displays the day number', () => {
    const { getAllByText } = render(<CalendarCell cellProps={baseProps} />);
    expect(getAllByText('15').length).toBe(2);
  });

  test('displays moon phase images with correct alt text', () => {
    const { getAllByAltText } = render(<CalendarCell cellProps={baseProps} />);
    const images = getAllByAltText('Full Moon');
    expect(images.length).toBe(2);
  });

  test('renders holiday list if holidays are provided', () => {
    const holidayProps = {
      ...baseProps,
      holiday: ['Holiday1, Description1', 'Holiday2, Description2'],
    };
    const { getByText } = render(<CalendarCell cellProps={holidayProps} />);
    expect(getByText('Holiday1')).toBeInTheDocument();
    expect(getByText('Holiday2')).toBeInTheDocument();
  });

  test('renders session note if provided', () => {
    const sessionNoteProps = {
      ...baseProps,
      sessionNote: 'Session Title --- Session Description',
    };
    const { getByText } = render(<CalendarCell cellProps={sessionNoteProps} />);
    expect(getByText('Session Title')).toBeInTheDocument();
  });
});
