import React from "react";

export default class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      // checkBoxSelectAll: false
    };
  }

  click = (v) => {
    if (v) {
      this.props.funcAddNewTodo(v);
      this.setState({ value: "" });
    } else {
      alert("Введите наименование");
    }
  };

  changeInput = (v) => {
    this.setState({ value: v });
  };

  changeCheckBoxSelectAll = () => {
    this.props.changeSelectAllFlag(!this.props.selectAllFlag);

  }

  renderCheckBoxSelectAll = () => {
    return (this.props.isEmpty?null:<input type="checkbox" className="selectAll" onChange={(e) => this.changeCheckBoxSelectAll()}  
    checked={this.props.selectAllFlag}
  />)
  }

  render() {
    const value = this.state.value;

    return (
      <div className="inputFieldWrapper">
        {this.renderCheckBoxSelectAll()}
        
        <input
          className="inputField"
          placeholder="Enter task and press Enter"
          onChange={(e) => this.changeInput(e.target.value)}
          value={value}
          onKeyDown={(key) =>
            key.keyCode === 13 ? this.click(this.state.value) : null
          }
        />
        <button className="btnAdd" onClick={() => this.click(value)}>
          Добавить
        </button>
      </div>
    );
  }
}
