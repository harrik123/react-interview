import React from "react";

class Hello extends React.Component<any, any> {
  render() {
    var color;
    var text;

    if (this.props.todo.complete === true) {
      color = "lightgreen";
      text = "Complete";
    } else {
      color = "pink";
      text = "Incomplete";
    }

    return (
      <div className="wrapper" style={{ backgroundColor: color }}>
        <h3>{this.props.todo.name}</h3>
        <button
          className="btn"
          onClick={() => this.props.onClick(this.props.todo.id)}
        >
          {text}
        </button>
        <button
          className="btn"
          onClick={() => this.props.onRemoveClick(this.props.todo.id)}
        >
          Remove from list
        </button>
      </div>
    );
  }
}

export default Hello;
