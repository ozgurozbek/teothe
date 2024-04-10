import PricingContent from "@/components/pricing/PricingContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Learn about the pricing of myriad different items and services in Teothe.",
};

export default function PricingPage() {
  return <PricingContent />;
}
