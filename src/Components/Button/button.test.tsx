import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Button, { ButtonProps } from "./button";

const defaultProps = {
  onClick: jest.fn(),
};

const testProps: ButtonProps = {
  btnType: "primary",
  size: "sm",
  className: "klass",
};
const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn(),
};
describe("test Button Component", () => {
  it("should render the correct default button", () => {
    const wrapper = render(<Button {...defaultProps}>button</Button>);
    const element = wrapper.getByText("button");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe("BUTTON");
    expect(element).toHaveClass("btn btn-default");
    fireEvent.click(element);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });
  it("should render the correct component based on different props", () => {
    const wrapper = render(<Button {...testProps}>Nice</Button>);
    const element = wrapper.getByText("Nice");
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass("btn-primary btn-sm klass");
  });
  it("should render a link when btnType equals link and href is provided", () => {
    const wrapper = render(
      <Button btnType={"link"} href="http://dummyurl">
        Link
      </Button>
    );
    const element = wrapper.getByText("Link");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("A");
    expect(element).toHaveClass("btn btn-link");
  });
  it("should render disabled button when disabled set to true", () => {
    const wrapper = render(<Button {...disabledProps}>Nice</Button>);
    const element = wrapper.getByText("Nice") as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element.disabled).toBeTruthy();
    fireEvent.click(element);
    expect(disabledProps.onClick).not.toHaveBeenCalled();
  });
});
