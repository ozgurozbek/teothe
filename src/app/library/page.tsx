import LibraryContent from "@/components/library/LibraryContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Library",
  description:
    "Access a vast repository of knowledge in our Library, featuring fiction, historical events and more.",
};

export default function LibraryPage() {
  return <LibraryContent />;
}
