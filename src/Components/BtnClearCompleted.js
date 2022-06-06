import React from "react";

export default class BtnClearAll extends React.Component {
  render() {
    const { todos, clickClearCompleted } = this.props;
    const show = todos.some((todo) => todo.isDone);
    const className = `clearCompleted footerButton ${
      show ? "visible" : "hidden"
    }`;

    return (
      <div className={className} onClick={clickClearCompleted}>
        ClearCompleted
      </div>
    );
  }
}
