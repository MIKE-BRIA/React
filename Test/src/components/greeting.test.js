import Greeting from "./greeting";
import { render, screen } from "@testing-library/react";

//test suites

describe("Greeting component", () => {
  test("renders Hello World", () => {
    render(<Greeting />);

    const helloWorldElement = screen.getByText("Hello World", { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });
});
