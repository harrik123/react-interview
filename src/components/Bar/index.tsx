import React from "react";

function Bar(props: any) {
  return (
    <form
      className="wrapper"
      style={{ gridTemplateColumns: "7fr 2fr" } as React.CSSProperties}
      onSubmit={props.onSubmit}
    >
      <input
        placeholder="Add new todo"
        value={props.newTodoName}
        onChange={props.onInputChange}
      />
      <button className="btn btn-success" type="submit" value="Submit">
        Submit
      </button>
    </form>
  );
}

export default Bar;
