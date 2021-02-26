import React, { useState } from "react";
import styled from "styled-components";
import { IInputBarProps } from "../../ts/intefaces";
import Button from "../Button";

const Form = styled.form``;

export const Input = styled.input`
  appearance: none;
  margin: 15px 0;
  border: 1px solid #dddfe2;
  display: block;
  width: 100%;
  box-sizing: border-box;
  line-height: 1.6;
  padding: 10px 12px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const SubmitButton = styled(Button)`
  font-size: 1.1em;
  padding: 0.5em 1em;
  background-color: #fff;
  border: 2px solid #000;
  box-shadow: 3px 3px #ff9908;
  color: #000;
`;

function InputBar(props: IInputBarProps) {
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
      <Input
        placeholder={props.placeholder}
        value={inputText}
        onChange={onInputChange}
      />
      <ButtonWrapper>
        <SubmitButton type="submit" value="Submit">
          {props.submitButtonText.toUpperCase()}
        </SubmitButton>
      </ButtonWrapper>
    </Form>
  );
}

export default InputBar;
