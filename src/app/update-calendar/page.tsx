"use client";

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

/**
 * Component for updating calendar notes. Allows users to input and update session notes for specific dates.
 * @generator
 * @returns The calendar note update page with input fields and buttons for updating and fetching data.
 */
export default function CalendarNoteUpdatePage() {
  const [monthName, setMonthName] = useState("Select Month");
  const [tableNo, setTableNo] = useState("Select Table");
  const [yearCount, setYearCount] = useState<number>(27);
  const [dayNumber, setDayNumber] = useState(0);
  const [textInputText, setTextInputText] = useState<string>("");
  const [userSecret, setUserSecret] = useState<string>("");

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
          "https://teothe.pythonanywhere.com/getSessionNotes?table=" +
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
      userSecret.replaceAll(" ", "") != "" &&
      tableNo != "Select Table" &&
      yearCount &&
      monthName != "" &&
      monthName != "Select Month" &&
      dayNumber > 0 &&
      dayNumber <= 48 &&
      textInputText
    ) {
      const endpoint = `https://teothe.pythonanywhere.com/setSessionNotes?key=${userSecret}&table=${tableNo}&year=${yearCount}&month=${monthName}&date=${dayNumber}&entry=${encodeURIComponent(
        textInputText.replaceAll(" ", "_") + "_---_" + userSecret //_---_ is being split in the FE when fetching from BE on main Calendar page to generate titles on hover. userSecret will validate and then do the DB operation.
      )}`;

      try {
        const response = await fetch(endpoint);
        if (response.ok) {
          alert("Communicated successfully");
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
    <section>
      <Card bordered={false} className="w-full">
        <SimpleContent
          contentProps={{
            title: "Change Calendar Data",
            text: ["Fill User, select Table, Year, Month and Day to submit"],
          }}
        />
        <Space size={4} wrap={true}>
          <Input
            addonBefore="User"
            placeholder="Your Secret"
            onChange={(e) => setUserSecret(e.target.value)}
          />
          <Dropdown menu={tableProps}>
            <Button className="w-full">
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
            style={{ width: "12rem" }}
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
            style={{ width: "7rem" }}
          />
          <Button type="primary" onClick={handleNextClick}>
            Fetch Current Note
          </Button>
        </Space>
        <Divider />
        <TextArea
          rows={4}
          maxLength={1000}
          showCount={true}
          placeholder="Enter session note here. Make sure it is less than a 1000 characters!"
          value={textInputText}
          style={{ backgroundColor: "transparent", borderColor: "#630436" }}
          onChange={(e) => setTextInputText(e.target.value)}
        />
        <Divider />
        <Button
          type="primary"
          htmlType="submit"
          onClick={handleSubmit}
          className="float-right md:w-40 w-full"
        >
          Submit
        </Button>
      </Card>
    </section>
  );
}
