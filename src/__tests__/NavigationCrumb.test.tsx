import { render, screen } from "@testing-library/react";
import GetCrumbs from "../components/NavigationCrumb";
import '@testing-library/jest-dom';

describe("GetCrumbs", () => {
    it("displays breadcrumbs individually", () => {
        render(<GetCrumbs path="Teothe,Test Crumb" />);
        
        // Check each part of the breadcrumb
        expect(screen.getByText("/ Teothe")).toBeInTheDocument();
        expect(screen.getByText("/ Test Crumb")).toBeInTheDocument();
    });
});