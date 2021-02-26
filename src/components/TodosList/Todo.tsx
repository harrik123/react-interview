import React from "react";
import styled from "styled-components";

const Li = styled.li<{ backgroundColor: string }>`
  padding: 5px 15px;
  display: grid;
  grid-template-columns: 5fr 2fr 1fr;
  border: solid 1px;
  margin-bottom: 2px;
  background-color: ${(props) => props.backgroundColor};
`;

function Todo(props: any) {
  let color: string;
  let text: string;

  if (props.todo.complete === true) {
    color = "lightgreen";
    text = "Complete";
  } else {
    color = "pink";
    text = "Incomplete";
  }

  return (
    <Li backgroundColor={color}>
      <p>{props.todo.name}</p>
      <button
        className="btn"
        onClick={() => props.onStatusChangeClick(props.todo.id)}
      >
        {text}
      </button>
      <button
        className="btn"
        onClick={() => props.onRemoveClick(props.todo.id)}
      >
        Remove from list
      </button>
    </Li>
  );
}

export default Todo;
