import React from "react";
import InputBar from ".";
import { fireEvent, render, screen } from "@testing-library/react";

describe("<InputBar />", () => {
  test("Prop texts go to right places", () => {
    const placeholder = "Add text";
    const buttonText = "Add";

    render(
      <InputBar
        placeholder={placeholder}
        submitButtonText={buttonText}
        onSubmit={() => {}}
      />
    );

    screen.getByPlaceholderText(placeholder);
    screen.getByText(buttonText.toUpperCase(), { selector: "button" });
  });

  test("Handle submit called with user input", () => {
    testHandleSubmit("Epic todo item.");
  });

  test("Handle submit not called with empty input", () => {
    testHandleSubmit("");
  });

  function testHandleSubmit(userInput: string) {
    const placeholder = "input";
    const buttonText = "button";
    const handleSubmit = jest.fn();

    render(
      <InputBar
        placeholder={placeholder}
        submitButtonText={buttonText}
        onSubmit={handleSubmit}
      />
    );

    const input = screen.getByPlaceholderText(placeholder);
    const submitButton = screen.getByText(buttonText.toUpperCase(), {
      selector: "button",
    });

    fireEvent.change(input, { target: { value: userInput } });
    fireEvent.click(submitButton);

    userInput === ""
      ? expect(handleSubmit).not.toBeCalled()
      : expect(handleSubmit).toBeCalledWith(userInput);
  }
});
