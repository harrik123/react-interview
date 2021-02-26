import React, { useState } from "react";
import GlobalStyle from "../../global-styles";
import { ITodoItem } from "../../ts/intefaces";
import InputBar from "../InputBar";
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

  const generateNewId = () => {
    return todos.length + 1;
  };

  const handleAddTodo = (newTodoName: string) => {
    const newItem: ITodoItem = {
      id: generateNewId(),
      name: newTodoName,
      complete: false,
    };

    setTodos([...todos, newItem]);
  };

  const handleStatusChange = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : todo
      )
    );
  };

  const handleRemoveTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <TodosList
        todos={todos}
        onStatusChangeClick={handleStatusChange}
        onRemoveClick={handleRemoveTodo}
      />
      <InputBar placeholder={"Add new todo"} onSubmit={handleAddTodo} />
      <GlobalStyle />
    </>
  );
}

export default App;
