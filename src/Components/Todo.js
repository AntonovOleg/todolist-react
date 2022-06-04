import React from "react";

export default class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseIn: false
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
          <div className="captionTask"
            onMouseOut={this.mouseOut}
            onMouseEnter={this.mouseIn}
            onClick={() => funcChecked(todos.id)}
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
          {this.renderDelButton()}
        </div>
      </div>
    );
  }
}
