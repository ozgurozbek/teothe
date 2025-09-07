"use client";

import { Col, Row } from "antd";
import CalendarCell from "./CalendarCell";

// Static holidays
const holidays: { [key: string]: string[] } = {
  "Buiborn, 1": ["New Years", "Sister's Month"],
  "Vihildr, 46": ["Festival of Renewal"],
  "Vihildr, 47": ["Festival of Renewal"],
  // add the rest...
};

// Moon phases
const moonPhases = [
  "New Moon",
  "Young Moon",
  "Waxing Crescent",
  "Waxing Quarter",
  "Waxing Gibbous",
  "Full Moon",
  "Waning Gibbous",
  "Waning Quarter",
  "Waning Crescent",
  "Old Moon",
];

// Map each month to its order in the year
const monthOrder = [
  "Buiborn","Ukennir","Pwazorn","Verhildr","Vihildr","Wiobrun",
  "Vesmirr","Fexgrim","Aurskar","Mceejul","Lcaorn","Cyarn",
  "Radrik","Naavok"
];

// Example month lengths
const monthLengths = [34,30,34,33,22,36,31,35,6,4,21,37,30,31];

function getHolidays(monthName: string, day: number) {
  return holidays[`${monthName}, ${day}`];
}

function getMoonPhaseDynamic(monthName: string, day: number) {
  const monthIndex = monthOrder.indexOf(monthName);
  if (monthIndex === -1) return "Unknown Moon";

  const globalDay = monthLengths
    .slice(0, monthIndex)
    .reduce((sum, len) => sum + len, 0) + day;

  const cycleLength = 96;
  const phaseCount = moonPhases.length;
  const phaseLength = cycleLength / phaseCount; // 9.6 days per phase
  const phaseIndex = Math.floor(((globalDay - 1) % cycleLength) / phaseLength);

  return moonPhases[phaseIndex];
}

export default function CalendarAltTable({
  calendarProps,
  monthLength,
}: {
  calendarProps: { monthName: string; year: number };
  monthLength: number;
}) {
  const tableMain = [];

  for (let day = 1; day <= monthLength; day++) {
    tableMain.push(
      <Col
        key={day}
        xs={12}
        sm={6}
        md={4}
        lg={4}
        xl={3}
        xxl={3}
        className="bg-[#171b20] h-60"
        style={{ boxShadow: "0px 0px 0px 1px #33373b" }}
      >
        <CalendarCell
          cellProps={{
            dayNumber: day,
            moonPhase: getMoonPhaseDynamic(calendarProps.monthName, day),
            holiday: getHolidays(calendarProps.monthName, day),
          }}
        />
      </Col>
    );
  }

  return <Row gutter={[8, 8]}>{tableMain}</Row>;
}
