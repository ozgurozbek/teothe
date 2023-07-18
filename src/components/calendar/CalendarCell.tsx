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
      {cellProps.sessionNote && (
        <div
          className={
            holidayList.length === 0
              ? "text-green-600 w-full italic text-clip h-44 overflow-y-scroll no-scrollbar"
              : holidayList.length === 3
              ? "text-green-600 w-full italic text-clip h-28 overflow-y-scroll no-scrollbar"
              : "text-green-600 w-full italic text-clip h-36 overflow-y-scroll no-scrollbar"
          }
        >
          <p className="">{cellProps.sessionNote}</p>
        </div>
      )}
    </section>
  );
}
