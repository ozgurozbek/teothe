import ExampleContent from "@/components/example/ExampleContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Examples",
  description:
    "Teothe character examples and D&D backstory templates for creating believable roleplay characters with strong motivations, factions, and world fit.",
};

export default function LibraryPage() {
  return <ExampleContent />;
}
