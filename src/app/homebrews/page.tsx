import HomebrewsContent from "@/components/homebrews/HomebrewsContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Homebrews",
  description:
    "Explore rules that are unique to the Teothe 5E Campaign Setting.",
};
export default function HomebrewsPage() {
  return <HomebrewsContent />;
}
