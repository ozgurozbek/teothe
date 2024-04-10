import QuickNPCGeneratorContent from "@/components/generators/QuickNpcContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quick NPC Generator",
  description:
    "Populate your world with vibrant characters using our Quick NPC Generator, featuring diverse personalities, backgrounds, and traits to enhance your storytelling.",
};

export default function QuickNPCGeneratorPage() {
  return <QuickNPCGeneratorContent />;
}
