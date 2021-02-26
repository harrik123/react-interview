import React from "react";
import styled from "styled-components";
import { ITodoItem } from "../../ts/intefaces";
import Todo from "./Todo";

const Ul = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

function TodosList(props: any) {
  return (
    <Ul>
      {props.todos.map((todo: ITodoItem) => {
        return (
          <Todo
            key={todo.id}
            todo={todo}
            onStatusChangeClick={props.onStatusChangeClick}
            onRemoveClick={props.onRemoveClick}
          />
        );
      })}
    </Ul>
  );
}

export default TodosList;
