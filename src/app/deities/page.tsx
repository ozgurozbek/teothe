import DeitiesContent from "@/components/deities/DeitiesContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Deities",
  description:
    "Explore the pantheon of gods and goddesses that shape the destiny of Teothe, with domains, hierarchy, and legendary tales awaiting discovery.",
};

export default function DeitiesPage() {
  return <DeitiesContent />;
}
