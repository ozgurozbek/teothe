"use client";

import Image from "next/image";

const imageLoader = ( {src} : {src:string} ) => {
  return "https://teothe.com/Icons/Calendar/"+src+".png";
};

/**
 * Generates cell data from props passed in CalendarTable. It has 2 of both date and image since one is used for blue and moon is also inverted. Holidays are coloured pink, Session Notes are coloured green. Session notes are split by " --- " and used in title because entries added by Boteculus discord bot is tagged with the user name that added it.
 * @param cellProps
 * @returns section
 */
export default function CalendarCell({
  cellProps,
}: {
  cellProps: {
    dayNumber: number;
    moonPhase: string;
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
          <Image
            //@ts-ignore
            loader={imageLoader}
            className="h-6 absolute invert blur-sm"
            title={cellProps.moonPhase}
            src={cellProps.moonPhase.replace(" ", "%20")}
            alt={`${cellProps.moonPhase}`}
            height={24}
            width={24}
          />
          <Image
            //@ts-ignore            
            loader={imageLoader}
            className="h-6 mix-blend-multiply absolute"
            title={cellProps.moonPhase}
            src={cellProps.moonPhase.replace(" ", "%20")}
            alt={`${cellProps.moonPhase}`}
            height={24}
            width={24}
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
