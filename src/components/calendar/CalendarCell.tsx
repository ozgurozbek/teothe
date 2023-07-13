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
  return (
    <Card bordered={false} className="rounded-none h-full">
      <div className="h-12">
        <span>{cellProps.moonPhase}</span>
        <span className="float-right">{cellProps.dayNumber}</span>
      </div>
      {cellProps.holiday && (
        <div className="bg-red-300 h-4">
          <span>
            <strong>{cellProps.holiday}</strong>
          </span>
        </div>
      )}
      {cellProps.sessionNote && (
        <div className="bg-blue-300 h-20">
          <span>
            <strong>{cellProps.sessionNote}</strong>
          </span>
        </div>
      )}
    </Card>
  );
}
