import React from "react";

export default class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  click(v) {
    this.props.func(v);
  }

  change(v) {
    this.setState({ value: v });
  }

  render() {
    return (
      <div className="inputFieldWrapper">
        <input
          className="inputField"
          placeholder="InputField"
          onChange={(e) => this.change(e.target.value)}
        />
        <button onClick={() => this.props.func(this.state.value)}>
          Добавить
        </button>
      </div>
    );
  }
}
