import React from "react";
import styled from "styled-components";
import { ITodoProps } from "../../../ts/intefaces";
import Button from "../../Button";

const Li = styled.li<{ complete: boolean }>`
  display: grid;
  grid-template-columns: 1.5rem 1fr 1.5rem;
  align-items: center;
  padding: 15px;
  margin-bottom: 5px;
  background-color: ${(props) => (props.complete ? "#9EC41C" : "#DD5F5F")};
  color: #fff;
`;

const StatusButton = styled(Button)<{ complete: boolean }>`
  padding: 0;
  background-color: ${(props) => (props.complete ? "transparent" : "#fff")};
  color: #fff;
  border-radius: 50%;
  width: 1em;
  height: 1em;
`;

const Name = styled.p`
  margin: 0 15px;
`;

const RemoveButton = styled(Button)`
  background-color: transparent;
  color: #444;
  padding: 0.25rem;

  &:hover {
    color: #af0000;
  }
`;

function Todo(props: ITodoProps) {
  return (
    <Li complete={props.todo.complete}>
      <StatusButton
        complete={props.todo.complete}
        onClick={() => props.onStatusChangeClick(props.todo.id)}
      >
        {props.todo.complete ? "✓" : ""}
      </StatusButton>
      <Name>{props.todo.name}</Name>
      <RemoveButton onClick={() => props.onRemoveClick(props.todo.id)}>
        {"X"}
      </RemoveButton>
    </Li>
  );
}

export default Todo;
