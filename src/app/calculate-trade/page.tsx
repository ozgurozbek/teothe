import CalculateTradeContent from "@/components/calculate-trade/CalculateTradeContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calculate Trade",
  description:
    "Calculate the trade information of Teothe Map Resources depending on resource and weight.",
};

export default function CommonLorePage() {
  return <CalculateTradeContent />;
}
