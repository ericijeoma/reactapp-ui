import { render, screen } from "@testing-library/react";
import About from "../src/About";

describe("About Component", () => {
  it("should render the heading", () => {
    render(<About />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("About Page");
  });
});
