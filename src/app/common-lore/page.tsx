import CommonLoreContent from "@/components/commonlore/CommonLoreContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Common Lore",
  description:
    "Dive into the extensive lore of Teothe, including history, cultures and cosmology, in our Common Lore section.",
};

export default function CommonLorePage() {
  return <CommonLoreContent />;
}
