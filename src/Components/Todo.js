import React from "react";

export default class Item extends React.Component {
  render() {
    const { isDone, funcChecked, todos, funcDel } = this.props;

    return (
      <div className="itemWrapper">
        <div className="item">
          <div className="inputWrapper">
            <input
              type="Checkbox"
              className="checkBox"
              checked={isDone}
              onChange={() => funcChecked(todos.id)}
            />
          </div>
          <div className="captionTask" onClick={() => funcChecked(todos.id)}>
            {todos.isDone ? (
              <div className="grayColor">
                <strike>{todos.todo}</strike>
              </div>
            ) : (
              <div>{todos.todo}</div>
            )}
          </div>
          <div className="delButton">
            <button onClick={() => funcDel(todos.id)}>X</button>
          </div>
        </div>
      </div>
    );
  }
}
