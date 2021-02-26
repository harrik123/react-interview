import React, { useState } from "react";
import styled from "styled-components";
import Button from "../Button";

const Form = styled.form`
  display: grid;
  grid-template-columns: 7fr 2fr;
`;

const SubmitButton = styled(Button)`
  background-color: green;
`;

function InputBar(props: any) {
  const [inputText, setInputText] = useState("");

  const onInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    setInputText(event.currentTarget.value);
  };

  const onFormSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (inputText !== "") {
      props.onSubmit(inputText);
      setInputText("");
    }
  };

  return (
    <Form onSubmit={onFormSubmit}>
      <input
        placeholder={props.placeholder}
        value={inputText}
        onChange={onInputChange}
      />
      <SubmitButton type="submit" value="Submit">
        Submit
      </SubmitButton>
    </Form>
  );
}

export default InputBar;
