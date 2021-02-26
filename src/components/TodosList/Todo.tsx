import React from "react";
import styled from "styled-components";
import { ITodoProps } from "../../ts/intefaces";
import Button from "../Button";

const Li = styled.li<{ complete: boolean }>`
  display: grid;
  grid-template-columns: 1.5rem 1fr 1.5rem;
  align-items: center;
  padding: 15px;
  margin-bottom: 5px;
  background-color: ${(props) => (props.complete ? "#9EC41C" : "#DD5F5F")};
  color: #fff;
`;

const StatusButton = styled(Button)`
  padding: 0;
  background-color: transparent;
`;

const Name = styled.p`
  margin: 0 15px;
`;

const Incomplete = styled.span`
  display: inline-block;
  height: 1rem;
  width: 1rem;
  border-radius: 50%;
  background-color: #fff;
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
      <StatusButton onClick={() => props.onStatusChangeClick(props.todo.id)}>
        {props.todo.complete ? "✅" : <Incomplete></Incomplete>}
      </StatusButton>
      <Name>{props.todo.name}</Name>
      <RemoveButton onClick={() => props.onRemoveClick(props.todo.id)}>
        {"X"}
      </RemoveButton>
    </Li>
  );
}

export default Todo;
