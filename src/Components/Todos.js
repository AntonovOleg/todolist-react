import React from "react";
import Item from "./Todo.js";
export default class Todos extends React.Component {
  checkFilter = (isDone, item) => {
    const {
      funcDel,
      funcChecked,
      updateVisibleButtonClearAll,
      updateVisibleCheckBoxSelectAll,
      changeCaptionTodo,
      filter,
    } = this.props;
    const elem = (
      <Item
        todos={item}
        key={item.id}
        funcDel={funcDel}
        funcChecked={funcChecked}
        isDone={item.isDone}
        updateVisibleButtonClearAll={updateVisibleButtonClearAll}
        updateVisibleCheckBoxSelectAll={updateVisibleCheckBoxSelectAll}
        changeCaptionTodo={changeCaptionTodo}
      />
    );

    switch (filter) {
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
