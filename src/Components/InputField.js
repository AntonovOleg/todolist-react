import React from "react";
import CheckBoxSelectAll from "./CheckBoxSelectAll.js";

export default class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
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
    const {
      changeSelectAllFlag,
      updateVisibleCheckBoxSelectAll,
      selectAllFlag,
    } = this.props;

    changeSelectAllFlag(!selectAllFlag);
    updateVisibleCheckBoxSelectAll();
  };

  renderCheckBoxSelectAll = () => {
    const { selectAllFlag, todos } = this.props;
    const hide = todos.length === 0;

    return hide ? null : (
      <input
        type="checkbox"
        className="selectAll"
        onChange={(e) => this.changeCheckBoxSelectAll()}
        checked={selectAllFlag}
      />
    );
  };

  render() {
    const value = this.state.value;

    return (
      <div className="inputFieldWrapper">
        <CheckBoxSelectAll
          todos={this.props.todos}
          changeCheckBoxSelectAll={this.changeCheckBoxSelectAll}
        />

        <input
          className="inputField"
          placeholder="Enter task and press Enter"
          onChange={(e) => this.changeInput(e.target.value)}
          value={value}
          onKeyDown={(key) => (key.keyCode === 13 ? this.click(value) : null)}
        />
      </div>
    );
  }
}
