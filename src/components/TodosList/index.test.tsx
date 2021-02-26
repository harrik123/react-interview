import React from "react";
import renderer from "react-test-renderer";
import TodosList from ".";
import { ITodoItem } from "../../ts/intefaces";

const initTodos: ITodoItem[] = [
  { id: 1, name: "Go to the supermarket", complete: false },
  { id: 2, name: "Call Alice", complete: true },
  { id: 3, name: "Ask Alice to call Bob", complete: false },
  { id: 4, name: "Do the dishes", complete: true },
  { id: 5, name: "Change car tyres", complete: false },
];

describe("<TosdosList />", () => {
  test("TodosList snapshot matches", () => {
    const component = renderer.create(
      <TodosList
        todos={initTodos}
        onRemoveClick={() => {}}
        onStatusChangeClick={() => {}}
      />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
