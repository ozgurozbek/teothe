import { Button, Space } from "antd";

function NavigateToTable(tableid) {
  document.getElementById(tableid)?.scrollIntoView();
}

export default function TablesNavigator() {
  return (
    <>
      <Space wrap>
        <Button
          onClick={() => {
            NavigateToTable("resurrection");
          }}
        >
          Resurrection
        </Button>
        <Button
          onClick={() => {
            NavigateToTable("materialvariants");
          }}
        >
          Material Variants
        </Button>
        <Button
          onClick={() => {
            NavigateToTable("calendar");
          }}
        >
          Calendar
        </Button>
      </Space>
    </>
  );
}
