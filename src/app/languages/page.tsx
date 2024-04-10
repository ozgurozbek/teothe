import LanguagesContent from "@/components/languages/LanguagesContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Languages",
  description:
    "Delve into the rich tapestry of languages spoken across Teothe, each with its homebrews and cultural significance.",
};

export default function LanguagesPage() {
  return <LanguagesContent />;
}
