import { Metadata } from "next";
import CalendarContent from "@/components/calendar/CalendarContent";

export const metadata: Metadata = {
  title: "Calendar",
  description:
    "Explore the unique calendar system of Teothe, detailing moon phases, holidays, and session notes providing rich insight on what happened on our adventures in our Calendar section.",
};

export default function CalendarPage() {
  return <CalendarContent />;
}
