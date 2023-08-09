import SimpleContent from "@/components/SimpleCon";
import {
  Card,
  MenuProps,
  InputNumber,
  Input,
  Dropdown,
  Space,
  Button,
} from "antd";
import { useState } from "react";

import useSWR from "swr";

const { TextArea } = Input;

/**
 * The parent component for the calendar. Holds states that are then passed to the table then to cell. Helps fetch data depending on table number, month and year.
 * @see CalendarTable
 * @see CalendarCell
 * @returns Card(antd) wrapped by section
 */
function GetSessionNote(tableNo: string, year: string, month: string) {
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
    return "Failed to access API";
  }
  if (!data) return "No Data";

  //dataSource, columns
  console.log(data);
  return data;
}

export default function () {
  const [monthName, setMonthName] = useState("");
  const [tableNo, setTableNo] = useState(1);
  const [yearCount, setYearCount] = useState(27);
  const [dayNumber, setDayNumber] = useState(0);
  const [textInput, setTextInput] = useState("");

  const handleDayClick = (value: number) => {
    setDayNumber(value);
  };

  const handleMonthClick: MenuProps["onClick"] = (e) => {
    setMonthName(e.key);
  };

  const handleTableClick = (value: number) => {
    setTableNo(value);
  };

  const handleYearClick = (value: number) => {
    setYearCount(value);
  };

  function handleNextClick() {
    // Fetch data and put it in textInput state
  }

  const items: MenuProps["items"] = [
    {
      label: "Buibus",
      key: "Buibus",
    },
    {
      label: "Ukeus",
      key: "Ukeus",
    },
    {
      label: "Verus",
      key: "Verus",
    },
    {
      label: "Vihus",
      key: "Vihus",
    },
    {
      label: "Fexyius",
      key: "Fexyius",
    },
    {
      label: "Vesius",
      key: "Vesius",
    },
    {
      label: "Cyaxus",
      key: "Cyaxus",
    },
    {
      label: "Radus",
      key: "Radus",
    },
  ];
  const monthProps = {
    items,
    onClick: handleMonthClick,
  };

  return (
    <Card>
      <SimpleContent
        contentProps={{
          title: "Change Calendar Data",
          text: ["Select Table, Year, Month and Day to start typing"],
        }}
      />
      Table
      <InputNumber
        size="large"
        min={1}
        max={2}
        defaultValue={1}
        onChange={(x) => {
          if (x != null) {
            handleTableClick(x);
          }
        }}
      />
      Year
      <InputNumber
        size="large"
        min={27}
        defaultValue={27}
        onChange={(x) => {
          if (x != null) {
            handleYearClick(x);
          }
        }}
      />
      Month
      <Dropdown menu={monthProps}>
        <Button>
          <Space>{monthName}</Space>
        </Button>
      </Dropdown>
      Day
      <InputNumber
        size="large"
        min={1}
        max={48}
        onChange={(x) => {
          if (x != null) {
            handleDayClick(x);
          }
        }}
      />
      <Button onClick={handleNextClick}>next</Button>
      <TextArea value={textInput}></TextArea>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Card>
  );
}
