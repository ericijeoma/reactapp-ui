import { render, screen } from "@testing-library/react";
import App from "../src/App";

describe("App Component", () => {
  it("should render the heading", () => {
    render(<App />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Vite + rreact");
  });
});
