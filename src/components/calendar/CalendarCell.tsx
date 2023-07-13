import { Card } from "antd";

export default function CalendarCell({
  cellProps,
}: {
  cellProps: {
    dayNumber: number;
    moonPhase?: string;
    holiday?: string[];
    sessionNote?: string;
  };
}) {
  let holidayList = [];
  if (cellProps.holiday) {
    for (let i = 0; i < cellProps.holiday.length; i++) {
      holidayList.push(
        <div className="text-pink-600 w-full italic">
          <span title={cellProps.holiday[i].split(", ")[1]}>
            {cellProps.holiday[i].split(", ")[0]}
          </span>
        </div>
      );
    }
  }

  return (
    <section className="h-full w-full p-2">
      <div className="h-8">
        <span>
          <strong>{cellProps.moonPhase}</strong>
        </span>
        <span className="float-right">
          <strong>{cellProps.dayNumber}</strong>
        </span>
      </div>
      {holidayList && holidayList}
      {cellProps.sessionNote && (
        <div className="bg-blue-300 h-20">
          <span>
            <strong>{cellProps.sessionNote}</strong>
          </span>
        </div>
      )}
    </section>
  );
}
