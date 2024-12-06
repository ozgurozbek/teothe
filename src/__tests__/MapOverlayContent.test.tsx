import React from "react";
import { render, screen } from "@testing-library/react";
import MapOverlayContent from "@/components/maps/MapOverlayContent";
import "@testing-library/jest-dom";

describe("MapOverlayContent Component", () => {
  test("renders the component", () => {
    render(<MapOverlayContent />);

    expect(screen.getByText("Map Overlay")).toBeInTheDocument();
    expect(screen.getByText(/Campuses/)).toBeInTheDocument();

    // Check for the element by test ID
    const overlayImage = screen.getByTestId("map-overlay-test");
    expect(overlayImage).toBeInTheDocument(); // Ensure the element exists

    const overlayImageAlt = screen
      .getByTestId("map-overlay-test")
      .querySelector("img");
    expect(overlayImageAlt).toHaveAttribute("alt", "Base");
  });
});
