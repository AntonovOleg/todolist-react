import React from "react";
import Item from "./Todo.js";
export default class Todos extends React.Component {
  checkFilter = (isDone, item) => {
    const elem = (
      <Item
        todos={item}
        key={item.id}
        funcDel={this.props.funcDel}
        funcChecked={this.props.funcChecked}
        isDone={item.isDone}
        updateVisibleButtonClearAll={this.props.updateVisibleButtonClearAll}
      />
    );

    switch (this.props.filter) {
      case "All":
        return elem;
        break;
      case "Active":
        if (!isDone) {
          return elem;
        }
        break;
      case "Completed":
        if (isDone) {
          return elem;
        }
        break;
      default:
        alert("Непредвиденная ошибка");
        break;
    }
  };

  render() {
    const writer = () => {
      return this.props.todo.map((item) => (
        <div key={item.id} className="flexRow">
          {this.checkFilter(item.isDone, item)}
        </div>
      ));
    };
    return <div className="todosWrapper">{writer()}</div>;
  }
}
