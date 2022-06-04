import React from "react";

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

  change = (v) => {
    this.setState({ value: v });
  };

  render() {
    const value = this.state.value;

    return (
      <div className="inputFieldWrapper">
        <input
          className="inputField"
          placeholder="Enter task and press Enter"
          onChange={(e) => this.change(e.target.value)}
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
