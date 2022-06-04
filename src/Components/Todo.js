import React from "react";

export default class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseIn: false,
      editable: false
    }
  }

  mouseIn = () => {
    this.setState({ mouseIn: true });
  }

  mouseOut = () => {
    this.setState({ mouseIn: false });
  }

  renderDelButton = () => {
    const { funcDel, todos } = this.props;



    return (
      <div className="delButton">
        <div className={this.state.mouseIn ? "buttonVisible" : "buttonHidden"}>
          <button onClick={() => funcDel(todos.id)}
            onMouseOut={this.mouseOut}
            onMouseEnter={this.mouseIn}
          >X</button>
        </div>
      </div>
    )
  }

  funcDoubleClickTodo = (todoId) => {
    console.log("doubleClick", todoId);
    this.setState({ editable: !this.state.editable });
  }

  renderText = () => {
    const { todos, funcChecked } = this.props;

    return <div className="captionTask"
      onMouseOut={this.mouseOut}
      onMouseEnter={this.mouseIn}
      onClick={() => funcChecked(todos.id)}
      onDoubleClick={() => this.funcDoubleClickTodo(todos.id)}
    >
      {todos.isDone ? (
        <div className="grayColor"
          onMouseOut={this.mouseOut}
          onMouseEnter={this.mouseIn}
        >
          <strike>{todos.todo}</strike>
        </div>
      ) : (
        <div>{todos.todo}</div>
      )}
    </div>
  }

  renderEdit = () => {
    const { todos, funcChecked } = this.props;

    return (
      <input
        type="text"
        className="editTask"
        onDoubleClick={() => this.funcDoubleClickTodo(todos.id)}
        value={todos.todo}
        onChange={(e) => this.props.changeCaptionTodo(todos.id, e.target.value)}
      />
    )
  }


  renderCaption = () => {
    return this.state.editable ? this.renderEdit() : this.renderText();
  }

  render() {
    const { isDone, funcChecked, todos, funcDel } = this.props;

    return (
      <div className="itemWrapper"
        onMouseOut={this.mouseOut}
        onMouseEnter={this.mouseIn}
      >
        <div className="item">
          <div className="inputWrapper">
            <input
              type="Checkbox"
              className="checkBox"
              checked={isDone}
              onChange={() => funcChecked(todos.id)}
            />
          </div>
          {this.renderCaption()}
          {this.renderDelButton()}
        </div>
      </div>
    );
  }
}
