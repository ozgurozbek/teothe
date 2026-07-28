import PantheonContent from "@/components/pantheons/PantheonContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pantheons",
  description:
    "Explore the pantheons, beliefs, and divine traditions of the species of Teothe.",
};

export default function PantheonsPage() {
  return <PantheonContent />;
}