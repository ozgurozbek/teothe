import OfftimeForm from "@/components/generators/OfftimeForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Offtime Form",
  description:
    "Plan and organize your character's Offtime activities in Teothe, tracking goals, travel, rest, training, and other endeavors between adventures.",
};

export default function OfftimeFormPage() {
  return <OfftimeForm/>;
}
