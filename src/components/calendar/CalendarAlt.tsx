import React from "react";

// Types
interface CalendarProps {
  calendarData: Omit<CalendarData, "totalDays">;
  ContentComponent?: React.ReactNode;
  currentMonth: number;
  setCurrentMonth: React.Dispatch<React.SetStateAction<number>>;
  currentYear: number;
  setCurrentYear: React.Dispatch<React.SetStateAction<number>>;
}

interface CalendarData {
  months: string[];
  daysOfWeek: string[];
  holidays: Holiday[];
  moonPhases: MoonPhase[];
  monthLengths: number[];
  startYear?: number;
}

interface Holiday {
  name: string;
  day: number;
  description?: string;
  repeatAnnually?: boolean;
}

interface MoonPhase {
  name: string;
  day: number;
  description?: string;
  repeatAnnually?: boolean;
}

// Utility Functions
const isHoliday = (
  day: number,
  holidays: Holiday[],
  year: number,
  totalDays: number
) => {
  return holidays.find((h) => {
    if (h.repeatAnnually) {
      return day % totalDays === h.day;
    }
    return h.day === day;
  });
};

const getMoonPhase = (
  day: number,
  moonPhases: MoonPhase[],
  year: number,
  totalDays: number
) => {
  return moonPhases.find((m) => {
    if (m.repeatAnnually) {
      return day % totalDays === m.day;
    }
    return m.day === day;
  });
};

const getMonthStartIndex = (monthIndex: number, monthLengths: number[]) => {
  return monthLengths.slice(0, monthIndex).reduce((sum, len) => sum + len, 0);
};

const getTotalDaysInYear = (monthLengths: number[]) => {
  return monthLengths.reduce((sum, len) => sum + len, 0);
};

// Main Component
const FantasyCalendar: React.FC<CalendarProps> = ({
  calendarData,
  ContentComponent,
  currentMonth,
  setCurrentMonth,
  currentYear,
  setCurrentYear,
}) => {
  const totalDays = getTotalDaysInYear(calendarData.monthLengths);

  const handlePrev = () => {
    if (currentMonth === 0) {
      setCurrentYear((prev) => prev - 1);
      setCurrentMonth(calendarData.months.length - 1);
    } else {
      setCurrentMonth((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentMonth === calendarData.months.length - 1) {
      setCurrentYear((prev) => prev + 1);
      setCurrentMonth(0);
    } else {
      setCurrentMonth((prev) => prev + 1);
    }
  };

  const startDay = getMonthStartIndex(currentMonth, calendarData.monthLengths);
  const daysInMonth = calendarData.monthLengths[currentMonth];
  const baseDayOffset = currentYear * totalDays;

  return (
    <div className="grid grid-cols-1 gap-4 p-4">
      <div className="text-xl font-bold flex justify-between items-center">
        <button
          onClick={handlePrev}
          className="px-2 py-1 border rounded hover:bg-gray-100"
        >
          ⬅️
        </button>
        <span>
          {calendarData.months[currentMonth]} - Year {currentYear}
        </span>
        <button
          onClick={handleNext}
          className="px-2 py-1 border rounded hover:bg-gray-100"
        >
          ➡️
        </button>
      </div>

      <div
        className="grid gap-2"
        style={{
          gridTemplateColumns: `repeat(${calendarData.daysOfWeek.length}, minmax(0, 1fr))`,
        }}
      >
        {Array.from({ length: daysInMonth }, (_, i) => {
          const dayIndex = baseDayOffset + startDay + i;
          const holiday = isHoliday(
            dayIndex,
            calendarData.holidays,
            currentYear,
            totalDays
          );
          const moon = getMoonPhase(
            dayIndex,
            calendarData.moonPhases,
            currentYear,
            totalDays
          );
          const dayName =
            calendarData.daysOfWeek[dayIndex % calendarData.daysOfWeek.length];

          return (
            <div
              key={dayIndex}
              className="border rounded p-2 shadow-sm hover:shadow-md transition-all flex flex-col items-center justify-between text-sm relative group"
            >
              <div className="font-medium">
                {calendarData.months[currentMonth]} {i + 1}
              </div>
              <div>{dayName}</div>
              {holiday && (
                <div className="text-red-600 font-bold relative">
                  🎉 {holiday.name}
                  {holiday.description && (
                    <div className="absolute z-10 hidden group-hover:block bg-white text-black text-xs border rounded p-2 shadow-lg w-48 mt-1">
                      {holiday.description}
                    </div>
                  )}
                </div>
              )}
              {moon && (
                <div className="text-blue-500 relative">
                  🌙 {moon.name}
                  {moon.description && (
                    <div className="absolute z-10 hidden group-hover:block bg-white text-black text-xs border rounded p-2 shadow-lg w-48 mt-1">
                      {moon.description}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-6">
        {ContentComponent && (
          <div className="p-4 border-t">
            <h2 className="text-lg font-semibold mb-2">Special Content</h2>
            {ContentComponent}
          </div>
        )}
      </div>
    </div>
  );
};

export default FantasyCalendar;
