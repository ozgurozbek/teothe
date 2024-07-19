import { render } from "@testing-library/react";
import SimpleContent from "../components/SimpleCon";

describe("SimpleContent", () => {
    it("simple content prints initial title", () => {
        const { getByTestId } = render(<SimpleContent contentProps={{ title: "Test Title" }} />);
        expect(getByTestId("simplecon-title").textContent).toEqual("Test Title");
    });

    it("simple content prints the only element in provided text array", () => {
        const { getByTestId } = render(<SimpleContent contentProps={{ title: "Test Title", text: ["Test Text"] }} />);
        expect(getByTestId("simplecon-paragraph").textContent).toEqual("Test Text");
    });

    it("simple content prints all elements in provided text array", () => {
        const { getByTestId } = render(<SimpleContent contentProps={{ title: "Test Title", text: ["Test Text","Test Text","Test Text"] }} />);
        expect(getByTestId("simplecon-paragraph").childElementCount).toEqual(3);
    });

    it("renders image if image src is provided", () => {
        const { getByAltText } = render(
            <SimpleContent contentProps={{ title: "Test Title", image: { src: "./Icons/Domains/fundamental.png", alt: "Test Image" } }} />
        );
        const img = getByAltText("Test Image");
        expect(img).toBeInTheDocument;
    });

    it("does not render image if image src is not provided", () => {
        const { queryByAltText } = render(<SimpleContent contentProps={{ title: "Test Title", image: { src: "", alt: "Test Image" } }} />);
        expect(queryByAltText("Test Image")).toBeNull();
    });
});