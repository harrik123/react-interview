import React, { useState } from "react";
import GlobalStyle from "../../global-styles";
import { ITodoItem } from "../../ts/intefaces";
import Bar from "../Bar";
import TodosList from "../TodosList";

const initTodos: ITodoItem[] = [
  { id: 1, name: "Go to the supermarket", complete: false },
  { id: 2, name: "Call Alice", complete: false },
  { id: 3, name: "Ask Alice to call Bob", complete: false },
  { id: 4, name: "Do the dishes", complete: false },
  { id: 5, name: "Change car tyres", complete: false },
];

function App() {
  const [todos, setTodos] = useState(initTodos);
  const [newTodoName, setNewTodoName] = useState("");

  const generateNewId = () => {
    return todos.length + 1;
  };

  const onSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const newItem: ITodoItem = {
      id: generateNewId(),
      name: newTodoName,
      complete: false,
    };

    setTodos([...todos, newItem]);
    setNewTodoName("");
  };

  const onClick = (id: number) => {
    var todoItems = todos.slice();
    for (let i = 0; i < todos.length; i++) {
      if (todoItems[i].id === id) {
        var newComplete = !todoItems[i].complete;
        todoItems[i].complete = newComplete;
      }
    }

    setTodos(todoItems);
  };

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    setNewTodoName(event.currentTarget.value);
  };

  const onRemoveClick = (id: number) => {
    //implement this logic
    console.log("Remove Item!");
  };

  return (
    <>
      <div className="">
        <TodosList
          todos={todos}
          onClick={onClick}
          onRemoveClick={onRemoveClick}
        />

        <Bar
          onSubmit={onSubmit}
          newTodoName={newTodoName}
          onInputChange={onChange}
        />
      </div>
      <GlobalStyle />
    </>
  );
}

export default App;
