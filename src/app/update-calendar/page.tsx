"use client";
import "App/globals.css";

import SimpleContent from "@/components/SimpleCon";
import {
  Card,
  MenuProps,
  InputNumber,
  Input,
  Dropdown,
  Space,
  Button,
  Divider,
} from "antd";
import { useState } from "react";
import { DownOutlined } from "@ant-design/icons";

const { TextArea } = Input;

export default function CalendarNoteUpdatePage() {
  const [monthName, setMonthName] = useState("Select Month");
  const [tableNo, setTableNo] = useState("Select Table");
  const [yearCount, setYearCount] = useState<number>(27);
  const [dayNumber, setDayNumber] = useState(0);
  const [textInputText, setTextInputText] = useState<string>("");
  const [userName, setUserName] = useState<string>("");

  const handleMonthClick: MenuProps["onClick"] = (e) => {
    setMonthName(e.key);
  };

  const handleTableClick: MenuProps["onClick"] = (e) => {
    setTableNo(e.key);
  };

  const handleYearClick = (value: number) => {
    setYearCount(value);
  };

  const handleDayClick = (value: number) => {
    setDayNumber(value);
  };

  const handleNextClick = async () => {
    if (tableNo && monthName && dayNumber >= 1 && dayNumber <= 48) {
      try {
        const response = await fetch(
          "https://gi5vwiheg0.execute-api.eu-central-1.amazonaws.com/Stage/getSessionNotes?table=" +
            tableNo +
            "&year=" +
            yearCount +
            "&month=" +
            monthName
        );

        if (response.status === 404) {
          setTextInputText("");
        }
        if (!response.ok && response.status != 404) {
          throw new Error("Failed to fetch data");
        }

        const responseData = await response.json();
        if (responseData === "N") {
          setTextInputText("");
        } else {
          try {
            setTextInputText(responseData[dayNumber].split(" --- ")[0]);
          } catch (error: any) {

            if (error.name != "TypeError") {
              console.log(error.name);
              console.log("Unknown error. Reset text area.");
            // Otherwise it is a splitting error. As expected.
            } else {
              setTextInputText(""); // We clear whether it is mistyped, or we can't split.
            }
          }
        }
      } catch (error: any) {
        if (error.name != "SyntaxError") {
          console.log(error);
        // Otherwise it is the No Data Found JSON Syntax Error.
        }
      }
    }
  };

  const handleSubmit = async () => {
    if (
      userName.replaceAll(" ", "") != "" &&
      tableNo != "Select Table" &&
      yearCount &&
      monthName != "" &&
      monthName != "Select Month" &&
      dayNumber > 0 &&
      dayNumber <= 48 &&
      textInputText
    ) {
      const endpoint = `https://gi5vwiheg0.execute-api.eu-central-1.amazonaws.com/Stage/setSessionNotes?table=${tableNo}&year=${yearCount}&month=${monthName}&date=${dayNumber}&entry=${encodeURIComponent(
        textInputText.replaceAll(" ", "_") + "_---_" + userName //_---_ is being split in the FE when fetching from BE on main Calendar page to generate titles on hover.
      )}`;

      try {
        const response = await fetch(endpoint);
        if (response.ok) {
          alert("Data updated successfully");
        } else {
          alert("Failed to update data");
        }
      } catch (error) {
        console.error("Error updating data:", error);
        alert("An error occurred while updating data");
      }
    } else {
      alert("Please fill in all the required fields");
    }
  };

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

  const tableItems: MenuProps["items"] = [
    {
      label: "1",
      key: "1",
    },
    {
      label: "2",
      key: "2",
    },
  ];
  const tableProps = {
    items: tableItems,
    onClick: handleTableClick,
  };

  return (
    <div className="container m-auto">
    <Card className="border-none h-[calc(100vh-2rem)] m-4">
      <SimpleContent
        contentProps={{
          title: "Change Calendar Data",
          text: ["Fill User, select Table, Year, Month and Day to submit"],
        }}
      />
      <Space wrap={true}>
        <Input
          addonBefore="User"
          placeholder="Your Name"
          onChange={(e) => setUserName(e.target.value)}
        />
        <Dropdown menu={tableProps}>
          <Button>
            <Space>
              {tableNo}
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
        <InputNumber
          addonBefore="Year"
          min={1}
          defaultValue={27}
          onChange={(x) => {
            if (x != null) {
              handleYearClick(x);
            }
          }}
          addonAfter="Blue Era"
        />
        <Dropdown menu={monthProps}>
          <Button>
            <Space>
              {monthName}
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
        <InputNumber
          min={1}
          max={48}
          onChange={(x) => {
            if (x != null) {
              handleDayClick(x);
            }
          }}
          addonBefore="Day"
        />
        <Button
          type="primary"
          onClick={handleNextClick}
          className="w-full ant-table-cell-row-hover"
        >
          Fetch Current Note
        </Button>
      </Space>
      <Divider style={{ borderColor: "white" }} />
      <TextArea
        rows={4}
        maxLength={1000}
        showCount={true}
        placeholder="Enter session note here. Make sure it is less than a 1000 characters!"
        value={textInputText}
        style={{ backgroundColor: "transparent", borderColor: "#630436" }}
        onChange={(e) => setTextInputText(e.target.value)}
      />
      <Divider style={{ borderColor: "white" }} />
      <Button
        type="primary"
        htmlType="submit"
        onClick={handleSubmit}
        className="w-full ant-table-cell-row-hover"
      >
        Submit
      </Button>
    </Card>
    </div>
  );
}
