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
        <div>
          <img
            className="h-6 absolute invert blur-sm"
            title={cellProps.moonPhase}
            src={"./Icons/Calendar/" + cellProps.moonPhase + ".png"}
          />
          <img
            className="h-6 mix-blend-multiply absolute"
            title={cellProps.moonPhase}
            src={"./Icons/Calendar/" + cellProps.moonPhase + ".png"}
          />
        </div>
        <div className="float-right pr-4">
          <strong className="absolute blur-sm">{cellProps.dayNumber}</strong>
          <strong className="absolute ">{cellProps.dayNumber}</strong>
        </div>
      </div>
      {holidayList && holidayList}
    </section>
  );
}
