import React from "react";

class Bar extends React.Component<any, any> {
  render() {
    return (
      <form
        className="wrapper"
        style={{ "grid-template-columns": "7fr 2fr" } as React.CSSProperties}
        onSubmit={this.props.onSubmit}
      >
        <input
          placeholder="Add new todo"
          value={this.props.newTodoName}
          onChange={this.props.onInputChange}
        />
        <button className="btn btn-success" type="submit" value="Submit">
          Submit
        </button>
      </form>
    );
  }
}

export default Bar;
