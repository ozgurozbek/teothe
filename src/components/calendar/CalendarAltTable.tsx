"use client";

import { Col, Row, Skeleton } from "antd";
import CalendarAltCell from "./CalendarAltCell";
import useSWR from "swr";

/**
 * Fetches session notes data from the backend for the calendar
 * @backend fetch
 * @param tableNo
 * @param year
 * @param month title case
 * @returns JSON with dates as keys and entries as values
 * @example {"11":"Entry 1", "12":"Entry 2", "13":"Entry 3"}
 */
function GetSessionNotes(tableNo: string, year: string, month: string) {
  /**
   * Fetcher function for API requests.
   * @param args - RequestInfo object containing information about the request.
   * @returns Promise resolving to the parsed JSON response.
   */
  const fetcher = (args: RequestInfo) => fetch(args).then((res) => res.json());
  const { data, error } = useSWR(
    "https://teothe.pythonanywhere.com/getSessionNotes?table=" +
      tableNo +
      "&year=" +
      year +
      "&month=" +
      month,
    fetcher,
  );
  if (error) {
    console.log(error);
    return <div>Failed to access API</div>;
  }
  if (!data) return <Skeleton active />;

  return data;
}

// Static holidays
const holidays: { [key: string]: string[] } = {
  "Buibus, 1": ["New Years", "Sister's Month"],
  "Vihus, 46": ["Festival of Renewal"],
  "Vihus, 47": ["Festival of Renewal"],
  "Vihus, 48": ["Festival of Renewal"],
  "Ukeus, 4": [
    "Blightbreaker Day*, Only in Tribes of Blight. This is to celebrate the sacrifice of the 'Withered'",
  ],
  "Ukeus, 22": [
    "The Running*, An annual ritual where the drow went out to commit a massacre against a surface community.",
  ],
  "Ukeus, 30": [
    "Green Day*, An annual celebration where the cattle is driven between bonfires around cities, by the common farmer.",
  ],
  "Ukeus, 48": ["Leaf day"],
  "Vesius, 27": ["Harvest"],
  "Cyaxus, 1": ["Sleep"],
  "Cyaxus, 2": [
    "Sunken Barrel Morning*, Celebrated heavily by Dwarves",
    "Sleep",
  ],
  "Buibus, 4": ["Full moon", "Sister's Month"],
  "Verus, 4": ["Full moon"],
  "Fexyius, 4": ["Full moon"],
  "Cyaxus, 4": [
    "Sunken Barrel Morning*, Celebrated heavily by Dwarves",
    "Full moon",
  ],
  "Ukeus, 33": ["Artisan's day"],
  "Verus, 18": ["Pole Day*, Aokin spesific"],
  "Verus, 48": ["Elven Eve*, Elf spesific"],
  "Vesius, 48": ["Hammer Week*, Dwarf spesific"],
  "Vesius, 47": ["Hammer Week*, Dwarf spesific"],
  "Vesius, 46": ["Hammer Week*, Dwarf spesific"],
  "Vesius, 45": ["Hammer Week*, Dwarf spesific"],
  "Vesius, 44": ["Hammer Week*, Dwarf spesific"],
  "Vesius, 43": ["Hammer Week*, Dwarf spesific"],
  "Vesius, 42": ["Hammer Week*, Dwarf spesific"],
  "Vesius, 41": ["Hammer Week*, Dwarf spesific"],
  "Verus, 1": ["Fire Light*, Tieflings and Genasi don't celebrate this"],
  "Vihus, 1": ["Macam*, Dwarf specific"],
  "Verus, 23": [
    "The Ascension Festival*, Mostly non elves dwarves and humans. This is to celebrate the Ascension of Demideities",
  ],
  "Cyaxus, 19": ["Nmei's Day"],
  "Buibus, 44": ["Lcaoc's Day"],
  "Fexyius, 44": ["Lcaoc's Day (Elven)"],
  "Cyaxus, 21": ["Ehx's Day"],
  "Cyaxus, 8": [
    "Sunken Barrel Morning*, Celebrated heavily by Dwarves",
    "Cyaxo's Day",
  ],
  "Vihus, 16": ["Kurtulmak's Weeks"],
  "Vihus, 17": ["Kurtulmak's Weeks"],
  "Vihus, 18": ["Lover's Day", "Kurtulmak's Weeks"],
  "Vihus, 19": ["Kurtulmak's Weeks"],
  "Vihus, 20": ["Kurtulmak's Weeks"],
  "Vihus, 21": ["Kurtulmak's Weeks"],
  "Vihus, 22": ["Kurtulmak's Weeks"],
  "Vihus, 23": ["Kurtulmak's Weeks"],
  "Vihus, 24": ["Kurtulmak's Weeks"],
  "Vihus, 25": ["Kurtulmak's Weeks"],
  "Vihus, 26": ["Kurtulmak's Weeks"],
  "Vihus, 27": ["Kurtulmak's Weeks"],
  "Vihus, 28": ["Kurtulmak's Weeks"],
  "Vihus, 29": ["Kurtulmak's Weeks"],
  "Vihus, 30": ["Kurtulmak's Weeks"],
  "Vihus, 31": ["Kurtulmak's Weeks"],
  "Vihus, 32": ["Kurtulmak's Weeks"],
  "Radus, 11": ["Sister's Month"],
  "Radus, 12": [
    "Sister's Month",
    "Sunken Barrel Morning*, Celebrated heavily by Dwarves",
  ],
  "Radus, 13": ["Sister's Month"],
  "Radus, 14": [
    "Sister's Month",
    "Sunken Barrel Morning*, Celebrated heavily by Dwarves",
  ],
  "Radus, 15": ["Sister's Month"],
  "Radus, 16": [
    "Sister's Month",
    "Knucklecracker, Mostly Dwarves as it involves wrestling",
    "Sunken Barrel Morning*, Celebrated heavily by Dwarves",
  ],
  "Radus, 17": ["Sister's Month"],
  "Radus, 18": [
    "Sister's Month",
    "Sunken Barrel Morning*, Celebrated heavily by Dwarves",
  ],
  "Radus, 19": ["Sister's Month"],
  "Radus, 20": [
    "Sister's Month",
    "Sunken Barrel Morning*, Celebrated heavily by Dwarves",
  ],
  "Radus, 21": ["Sister's Month"],
  "Radus, 22": [
    "Sister's Month",
    "Sunken Barrel Morning*, Celebrated heavily by Dwarves",
  ],
  "Radus, 23": ["Sister's Month"],
  "Radus, 24": [
    "Sister's Month",
    "Sunken Barrel Morning*, Celebrated heavily by Dwarves",
  ],
  "Radus, 25": ["Sister's Month"],
  "Radus, 26": [
    "Sister's Month",
    "Sunken Barrel Morning*, Celebrated heavily by Dwarves",
  ],
  "Radus, 27": ["Sister's Month"],
  "Radus, 28": [
    "Sister's Month",
    "Sunken Barrel Morning*, Celebrated heavily by Dwarves",
  ],
  "Radus, 29": ["Sister's Month"],
  "Radus, 30": [
    "Sister's Month",
    "Sunken Barrel Morning*, Celebrated heavily by Dwarves",
  ],
  "Radus, 31": ["Sister's Month"],
  "Radus, 32": [
    "Sister's Month",
    "Sunken Barrel Morning*, Celebrated heavily by Dwarves",
  ],
  "Radus, 33": ["Sister's Month"],
  "Radus, 34": [
    "Sister's Month",
    "Sunken Barrel Morning*, Celebrated heavily by Dwarves",
  ],
  "Radus, 35": ["Sister's Month"],
  "Radus, 36": [
    "Sister's Month",
    "Sunken Barrel Morning*, Celebrated heavily by Dwarves",
  ],
  "Radus, 37": [
    "Founder's Dinner, Only celebrated in the Elkian Dominion",
    "Sister's Month",
  ],
  "Radus, 38": [
    "Sister's Month",
    "Sunken Barrel Morning*, Celebrated heavily by Dwarves",
  ],
  "Radus, 39": ["Sister's Month"],
  "Radus, 40": [
    "Sister's Month",
    "Sunken Barrel Morning*, Celebrated heavily by Dwarves",
  ],
  "Radus, 41": ["Sister's Month"],
  "Radus, 42": [
    "Sister's Month",
    "Sunken Barrel Morning*, Celebrated heavily by Dwarves",
  ],
  "Radus, 43": ["Sister's Month"],
  "Radus, 44": [
    "Sister's Month",
    "Sunken Barrel Morning*, Celebrated heavily by Dwarves",
  ],
  "Radus, 45": ["Sister's Month"],
  "Radus, 46": [
    "Sister's Month",
    "Sunken Barrel Morning*, Celebrated heavily by Dwarves",
  ],
  "Radus, 47": ["Sister's Month"],
  "Radus, 48": [
    "Sister's Month",
    "Sunken Barrel Morning*, Celebrated heavily by Dwarves",
  ],
  "Buibus, 2": ["Sister's Month"],
  "Buibus, 3": ["Sister's Month"],
  "Buibus, 5": ["Sister's Month"],
  "Buibus, 6": ["Sister's Month"],
  "Buibus, 7": ["Sister's Month"],
  "Buibus, 8": ["Sister's Month"],
  "Buibus, 9": ["Sister's Month"],
  "Buibus, 10": ["Sister's Month"],
  "Buibus, 11": ["Sister's Month"],
  "Fexyius, 31": ["Independence Day"],
  "Buibus, 45": ["Door's Auriel*, Only celebrated by the Tribes of Blight"],
  "Vesius, 28": ["Drunkards*, Dwarf spesific"],
  "Cyaxus, 6": ["Sunken Barrel Morning*, Celebrated heavily by Dwarves"],
  "Cyaxus, 10": ["Sunken Barrel Morning*, Celebrated heavily by Dwarves"],
  "Cyaxus, 12": ["Sunken Barrel Morning*, Celebrated heavily by Dwarves"],
  "Cyaxus, 14": ["Sunken Barrel Morning*, Celebrated heavily by Dwarves"],
  "Cyaxus, 16": ["Sunken Barrel Morning*, Celebrated heavily by Dwarves"],
  "Cyaxus, 18": ["Sunken Barrel Morning*, Celebrated heavily by Dwarves"],
  "Cyaxus, 20": ["Sunken Barrel Morning*, Celebrated heavily by Dwarves"],
  "Cyaxus, 22": ["Sunken Barrel Morning*, Celebrated heavily by Dwarves"],
  "Cyaxus, 24": ["Sunken Barrel Morning*, Celebrated heavily by Dwarves"],
  "Cyaxus, 26": ["Sunken Barrel Morning*, Celebrated heavily by Dwarves"],
  "Cyaxus, 28": ["Sunken Barrel Morning*, Celebrated heavily by Dwarves"],
  "Cyaxus, 30": ["Sunken Barrel Morning*, Celebrated heavily by Dwarves"],
  "Cyaxus, 32": ["Sunken Barrel Morning*, Celebrated heavily by Dwarves"],
  "Cyaxus, 34": ["Sunken Barrel Morning*, Celebrated heavily by Dwarves"],
  "Cyaxus, 36": ["Sunken Barrel Morning*, Celebrated heavily by Dwarves"],
  "Cyaxus, 38": ["Sunken Barrel Morning*, Celebrated heavily by Dwarves"],
  "Cyaxus, 40": ["Sunken Barrel Morning*, Celebrated heavily by Dwarves"],
  "Cyaxus, 42": ["Sunken Barrel Morning*, Celebrated heavily by Dwarves"],
  "Cyaxus, 44": ["Sunken Barrel Morning*, Celebrated heavily by Dwarves"],
  "Cyaxus, 46": ["Sunken Barrel Morning*, Celebrated heavily by Dwarves"],
  "Cyaxus, 48": ["Sunken Barrel Morning*, Celebrated heavily by Dwarves"],
  "Radus, 2": ["Sunken Barrel Morning*, Celebrated heavily by Dwarves"],
  "Radus, 4": ["Sunken Barrel Morning*, Celebrated heavily by Dwarves"],
  "Radus, 6": ["Sunken Barrel Morning*, Celebrated heavily by Dwarves"],
  "Radus, 8": ["Sunken Barrel Morning*, Celebrated heavily by Dwarves"],
  "Radus, 10": ["Sunken Barrel Morning*, Celebrated heavily by Dwarves"],
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
  "Buibus",
  "Ukeus",
  "Verus",
  "Vihus",
  "Fexyius",
  "Vesius",
  "Cyaxus",
  "Radus",
];

// Example month lengths
const monthLengths = [48, 48, 48, 48, 48, 48, 48, 48];

function getHolidays(monthName: string, day: number) {
  return holidays[`${monthName}, ${day}`];
}

// This is now dynamically calculated.
function getMoonPhaseDynamic(monthName: string, day: number): string {
  const monthIndex = monthOrder.indexOf(monthName);
  if (monthIndex === -1 || day < 1 || day > monthLengths[monthIndex]) {
    return "Unknown Moon";
  }

  //I made it very specific when making the calendar. However the calendar-alt branch merge (see git chain) has a more appropriate estimator.
  const phaseGroups: [number, number, string][][] = [
    [
      [1, 4, "Full Moon"],
      [5, 14, "Waning Gibbous"],
      [15, 24, "Waning Quarter"],
      [25, 34, "Waning Crescent"],
      [35, 44, "Old Moon"],
      [45, 48, "New Moon"],
    ],
    [
      [1, 4, "New Moon"],
      [5, 14, "Young Moon"],
      [15, 24, "Waxing Crescent"],
      [25, 34, "Waxing Quarter"],
      [35, 44, "Waxing Gibbous"],
      [45, 48, "Full Moon"],
    ],
  ];

  const phase = phaseGroups[monthIndex % 2].find(
    ([start, end]) => day >= start && day <= end
  );

  return phase?.[2] ?? "Unknown Moon";
}

export default function CalendarAltTable({
  calendarProps,
  monthLength,
}: {
  calendarProps: {
    tableNo: string;
    monthName: string;
    year: number;
  };
  monthLength: number;
}) {
  const thisMonthsNotes = GetSessionNotes(
    calendarProps.tableNo,
    calendarProps.year.toString(),
    calendarProps.monthName
  );

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
        <CalendarAltCell
          cellProps={{
            dayNumber: day,
            moonPhase: getMoonPhaseDynamic(
              calendarProps.monthName,
              day
            ),
            holiday: getHolidays(calendarProps.monthName, day),
            sessionNote: thisMonthsNotes?.[day],
          }}
        />
      </Col>
    );
  }

  return <Row>{tableMain}</Row>;
}
