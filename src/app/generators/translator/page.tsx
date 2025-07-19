import TranslatorContent from "@/components/generators/TranslatorContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teothe Translator",
  description: "Instantly encode and decode your text with Teothe's custom word transformer.",
};

export default function TranslatorPage() {
  return <TranslatorContent />;
}
