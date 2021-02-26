import React from "react";
import styled from "styled-components";
import { ITodoProps } from "../../ts/intefaces";
import Button from "../Button";

const Li = styled.li<{ complete: boolean }>`
  padding: 5px 15px;
  display: grid;
  grid-template-columns: 5fr 2fr 1fr;
  border: solid 1px;
  margin-bottom: 2px;
  background-color: ${(props) => (props.complete ? "lightgreen" : "pink")};
`;

const ItemButton = styled(Button)`
  margin-left: 15px;
`;

function Todo(props: ITodoProps) {
  return (
    <Li complete={props.todo.complete}>
      <p>{props.todo.name}</p>
      <ItemButton onClick={() => props.onStatusChangeClick(props.todo.id)}>
        {props.todo.complete ? "Complete" : "Incomplete"}
      </ItemButton>
      <ItemButton onClick={() => props.onRemoveClick(props.todo.id)}>
        Remove from list
      </ItemButton>
    </Li>
  );
}

export default Todo;
