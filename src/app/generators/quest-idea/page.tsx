import QuestIdeaGeneratorContent from "@/components/generators/QuestIdeaContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quest Idea Generator",
  description:
    "Spark creativity and excitement for your next campaign with our Quest Idea Generator, providing endless adventure possibilities and inspiration.",
};

export default function QuestIdeaGeneratorPage() {
  return <QuestIdeaGeneratorContent />;
}
