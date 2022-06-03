import React from "react";

export default class Item extends React.Component {
  render() {
    return (
      <div className="ItemWrapper">
        <div className="Item">
          <div className="inputWrapper">
            <input
              type="Checkbox"
              className="CheckBox"
              checked={this.props.isDone}

              onChange={()=>this.props.funcChecked(this.props.todos.id)}  
              
            />
          </div>
          <div className="captionTask">
            <div>{this.props.todos.todo}</div>
          </div>
          <div className="delButton">
            <button onClick={() => this.props.funcDel(this.props.todos.id)}>
              X
            </button>
          </div>
        </div>
      </div>
    );
  }
}
