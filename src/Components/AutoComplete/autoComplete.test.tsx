import React from "react";
import { config } from "react-transition-group";
import {
  render,
  RenderResult,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import { AutoComplete, AutoCompleteProps } from "./autoComplete";

// avoid sync loading
config.disabled = true;

let sourceData = [
  {
    value: "abab",
    number: "1",
  },
  {
    value: "afg",
    number: "2",
  },
  {
    value: "ace",
    number: "3",
  },
  {
    value: "cbd",
    number: "4",
  },
];
let wrapper: RenderResult;
let inputElement: HTMLInputElement;
const testProps: AutoCompleteProps = {
  fetchSuggestions: (query) => {
    return sourceData.filter((item) => item.value.includes(query));
  },
  onSelect: jest.fn(),
  placeholder: "autoComplete",
};
describe("AutoComplete", () => {
  beforeEach(() => {
    wrapper = render(<AutoComplete {...testProps} />);
    inputElement = wrapper.getByPlaceholderText(
      "autoComplete"
    ) as HTMLInputElement;
  });
  it("test basic behavior", async () => {
    fireEvent.change(inputElement, {
      target: {
        value: "a",
      },
    });
    await waitFor(() => {
      // should render with correct matches
      expect(wrapper.queryByText("abab")).toBeInTheDocument();
      expect(
        wrapper.container.querySelectorAll(".suggestion-item").length
      ).toBe(3);
    });
    expect(inputElement.value).toBe("a");
    // click dropdown item
    fireEvent.click(wrapper.getByText("abab"));
    expect(testProps.onSelect).toHaveBeenCalledWith({
      value: "abab",
      number: "1",
    });
    expect(inputElement.value).toBe("abab");
  });
  it("should provide keyboard support", async () => {
    // input change
    fireEvent.change(inputElement, { target: { value: "a" } });
    let firstResult, secondResult;
    await waitFor(() => {
      expect(wrapper.queryByText("abab")).toBeInTheDocument();
      firstResult = wrapper.getByText("abab");
      secondResult = wrapper.getByText("afg");
    });

    // arrow down
    fireEvent.keyDown(inputElement, { keyCode: 40 });
    expect(firstResult).toHaveClass("is-active");
    //arrow down
    fireEvent.keyDown(inputElement, { keyCode: 40 });
    expect(secondResult).toHaveClass("is-active");
    //arrow up
    fireEvent.keyDown(inputElement, { keyCode: 38 });
    expect(firstResult).toHaveClass("is-active");
    // press enter
    fireEvent.keyDown(inputElement, { keyCode: 13 });
    expect(testProps.onSelect).toHaveBeenCalledWith({
      value: "abab",
      number: "1",
    });
    expect(wrapper.queryByText("ab")).not.toBeInTheDocument();
  });
  it("click outside should hide the dropdown", async () => {
    // input change
    fireEvent.change(inputElement, { target: { value: "ab" } });
    await waitFor(() => {
      expect(wrapper.queryByText("abab")).toBeInTheDocument();
    });
    fireEvent.click(document);
    expect(wrapper.queryByText("ab")).not.toBeInTheDocument();
  });
});
