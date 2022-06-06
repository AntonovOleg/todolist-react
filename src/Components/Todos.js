import React from "react";
import Item from "./Todo.js";
export default class Todos extends React.Component {
  render() {
    const {
      funcDel,
      funcChecked,
      updateVisibleButtonClearAll,
      updateVisibleCheckBoxSelectAll,
      changeCaptionTodo,
      filteredTodos,
    } = this.props;

    const elem = (item) => (
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

    const writer = () => {
      return filteredTodos.map((item) => {
        return (
          <div key={item.id} className="flexRow">
            {elem(item)}
          </div>
        );
      });
    };

    return <div className="todosWrapper">{writer()}</div>;
  }
}
