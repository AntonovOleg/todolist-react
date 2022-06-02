import React from "react";
import Item from "./Todo.js";

export default class Todos extends React.Component {
  render() {
    const writer = () => {
      return this.props.todo.map((item) => (
        <Item
          todos={item}
          key={item.id}
          funcDel={this.props.funcDel}
          funcChecked={this.props.funcChecked}
        />
      ));
    };
    return <div className="todosWrapper">{writer()}</div>;
  }
}
