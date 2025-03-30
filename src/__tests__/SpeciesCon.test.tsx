import { render } from "@testing-library/react";
import SpeciesCon from "../components/species/SpeciesCon";
import CalendarCell from "../components/calendar/CalendarCell"; // Importing CalendarCell
import '@testing-library/jest-dom';

describe("SpeciesCon", () => {
    it("renders the title correctly", () => {
        const { getByText } = render(<SpeciesCon SpeciesPic={{ src: "", alt: "", phrase: "" }} DescriptionText={{ title: "Species Title", paragraph: "" }} />);
        expect(getByText("Species Title")).toBeInTheDocument();
    });

    it("renders the species description correctly", () => {
        const { getByText } = render(<SpeciesCon SpeciesPic={{ src: "", alt: "", phrase: "" }} DescriptionText={{ title: "Species Title", paragraph: "This is a description." }} />);
        expect(getByText("This is a description.")).toBeInTheDocument();
    });

    it("renders image if image src is provided", () => {
        const { getByAltText } = render(
            <SpeciesCon SpeciesPic={{ src: "./Icons/Species/aarakocra.png", alt: "Aarakocra", phrase: "Aarakocra phrase" }} DescriptionText={{ title: "Species Title", paragraph: "" }} />
        );
        const img = getByAltText("Aarakocra");
        expect(img).toBeInTheDocument();
    });
});