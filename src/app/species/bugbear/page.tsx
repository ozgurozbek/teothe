import BugbearContent from "@/components/species/subpages/bugbear";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bugbear",
  description: "Neither bugs nor bears, bugbears are the hulking cousins of goblins and hobgoblins.",
};

export default function BugbearSpeciesPage() {
  return <BugbearContent />;
}
