'use client';

import React, { useState } from 'react';
import FantasyCalendar from '@/components/calendar/CalendarAlt'; // adjust path as needed

const calendarData = {
  months: [
    'Frostwake', 'Embermarch', 'Stormhold', 'Sunpeak',
    'Greengale', 'Ashhollow', 'Moondim', 'Nightfall',
    'Starcrest', 'Dawnbloom', 'Hearthshade', 'Dreadspire',
    'Goldroot', 'Skyreach'
  ],
  daysOfWeek: ['Solus', 'Lunara', 'Terran', 'Ignis', 'Aeris', 'Aqua', 'Umbra'],
  monthLengths: [28, 30, 27, 29, 30, 26, 31, 28, 27, 30, 29, 30, 28, 29],
  holidays: [
    {
      name: 'Festival of Lights',
      day: 41,
      description: 'Celebrated when both moons align. Light overcomes shadow.',
      repeatAnnually: true
    },
    {
      name: 'Darkmoon Eve',
      day: 90,
      description: 'A night of illusions and hidden truths.',
      repeatAnnually: true
    }
  ],
  moonPhases: [
    {
      name: 'Full Moon',
      day: 13,
      description: 'The sky is brightest, spirits roam freely.',
      repeatAnnually: true
    },
    {
      name: 'Blood Moon',
      day: 66,
      description: 'Legends say magic intensifies under its gaze.',
      repeatAnnually: true
    }
  ],
  startYear: 1205
};

const LorePanel = () => (
  <div className="text-sm text-gray-700">
    <p>The 1205th cycle of the Dominion begins under a waning Moondim.</p>
    <p className="mt-2">Oracles predict a convergence during Dreadspire—remain vigilant.</p>
  </div>
);

const CalendarPage: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState(0);
  const [currentYear, setCurrentYear] = useState(calendarData.startYear ?? 0);

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <FantasyCalendar
        calendarData={calendarData}
        ContentComponent={<LorePanel />}
        currentMonth={currentMonth}
        setCurrentMonth={setCurrentMonth}
        currentYear={currentYear}
        setCurrentYear={setCurrentYear}
      />
    </main>
  );
};

export default CalendarPage;
