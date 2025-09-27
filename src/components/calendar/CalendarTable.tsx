import { Col, Row, Skeleton } from "antd";
import CalendarCell from "./CalendarCell";
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
    fetcher
  );
  if (error) {
    console.log(error);
    return <div>Failed to access API</div>;
  }
  if (!data) return <Skeleton active />;

  return data;
}

/**
 * Staticly holds holidays for every month and date if there is one
 */
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

/**
 * Gets the holidays for select month and date in a string format merged with ", ", which is then split in CalendarCell.tsx
 * @generator
 * @param monthName title case
 * @param date
 * @returns string array
 */
function getHolidays(monthName: string, date: number) {
  const key: string = monthName + ", " + date;
  return holidays[key];
}

/**
 * Staticly holds moon phases for every month, split into 2 for moon cycles
 */
const moonPhase = [
  {
    // For Buibus, Verus, Fexyius*, Cyaxus
    1: "Full Moon",
    2: "Full Moon",
    3: "Full Moon",
    4: "Full Moon",
    5: "Waning Gibbous",
    6: "Waning Gibbous",
    7: "Waning Gibbous",
    8: "Waning Gibbous",
    9: "Waning Gibbous",
    10: "Waning Gibbous",
    11: "Waning Gibbous",
    12: "Waning Gibbous",
    13: "Waning Gibbous",
    14: "Waning Gibbous",
    15: "Waning Quarter",
    16: "Waning Quarter",
    17: "Waning Quarter",
    18: "Waning Quarter",
    19: "Waning Quarter",
    20: "Waning Quarter",
    21: "Waning Quarter",
    22: "Waning Quarter",
    23: "Waning Quarter",
    24: "Waning Quarter",
    25: "Waning Crescent",
    26: "Waning Crescent",
    27: "Waning Crescent",
    28: "Waning Crescent",
    29: "Waning Crescent",
    30: "Waning Crescent",
    31: "Waning Crescent",
    32: "Waning Crescent",
    33: "Waning Crescent",
    34: "Waning Crescent",
    35: "Old Moon",
    36: "Old Moon",
    37: "Old Moon",
    38: "Old Moon",
    39: "Old Moon",
    40: "Old Moon",
    41: "Old Moon",
    42: "Old Moon",
    43: "Old Moon",
    44: "Old Moon",
    45: "New Moon",
    46: "New Moon",
    47: "New Moon",
    48: "New Moon",
  },
  {
    // For Ukeus, Vihus, Vesius, Radus
    1: "New Moon",
    2: "New Moon",
    3: "New Moon",
    4: "New Moon",
    5: "Young Moon",
    6: "Young Moon",
    7: "Young Moon",
    8: "Young Moon",
    9: "Young Moon",
    10: "Young Moon",
    11: "Young Moon",
    12: "Young Moon",
    13: "Young Moon",
    14: "Young Moon",
    15: "Waxing Crescent",
    16: "Waxing Crescent",
    17: "Waxing Crescent",
    18: "Waxing Crescent",
    19: "Waxing Crescent",
    20: "Waxing Crescent",
    21: "Waxing Crescent",
    22: "Waxing Crescent",
    23: "Waxing Crescent",
    24: "Waxing Crescent",
    25: "Waxing Quarter",
    26: "Waxing Quarter",
    27: "Waxing Quarter",
    28: "Waxing Quarter",
    29: "Waxing Quarter",
    30: "Waxing Quarter",
    31: "Waxing Quarter",
    32: "Waxing Quarter",
    33: "Waxing Quarter",
    34: "Waxing Quarter",
    35: "Waxing Gibbous",
    36: "Waxing Gibbous",
    37: "Waxing Gibbous",
    38: "Waxing Gibbous",
    39: "Waxing Gibbous",
    40: "Waxing Gibbous",
    41: "Waxing Gibbous",
    42: "Waxing Gibbous",
    43: "Waxing Gibbous",
    44: "Waxing Gibbous",
    45: "Full Moon",
    46: "Full Moon",
    47: "Full Moon",
    48: "Full Moon",
  },
];

/**
 * Gets the moon phases for select month and date
 * @generator
 * @param monthName title case
 * @param date
 * @returns string
 */
function getMoonPhase(monthName: string, date: number) {
  let temp: any = [];
  if (
    monthName == "Buibus" ||
    monthName == "Verus" ||
    monthName == "Fexyius" ||
    monthName == "Cyaxus"
  ) {
    temp = moonPhase[0];
    temp = temp[date];
  } else {
    temp = moonPhase[1];
    temp = temp[date];
  }
  return temp;
}

/**
 * Generates the Calendar view with CalendarCell.tsx populating a cell for each date. It is split weirdly for grid styling purposes. There is 8 cols per row.
 * @param calendarProps
 * @returns Row(antd)
 */
export default function CalendarTable({
  calendarProps,
}: {
  calendarProps: {
    tableNo: string;
    monthName: string;
    year: number;
  };
}) {
  let thisMonthsNotes = GetSessionNotes(
    calendarProps.tableNo,
    calendarProps.year.toString(),
    calendarProps.monthName
  );
  let tableMain = [];
  /* Index here is the date */
  for (let index = 1; index < 49; index++) {
      tableMain.push(
        <Col
          xs={12}
          sm={6}
          md={4}
          lg={4}
          xl={3}
          xxl={3}
          className="bg-[#171b20] h-60"
          style={{boxShadow:"0px 0px 0px 1px #33373b"}}
        >
          <CalendarCell
            cellProps={{
              dayNumber: index,
              moonPhase: getMoonPhase(calendarProps.monthName, index),
              holiday: getHolidays(calendarProps.monthName, index),
              sessionNote: thisMonthsNotes[index],
            }}
          />
        </Col>
      );
  }
  return <Row>{tableMain}</Row>;
}
