import React from "react";

export default class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  click = (v) => {
    if(v){
      this.props.func(v);
      this.setState({value: ""})
    }
    else{
      alert("Введите наименование");
    }
  }

  change = (v) => {
    this.setState({ value: v });
  }

  render() {
    return (
      <div className="inputFieldWrapper">
        <input
          className="inputField"
          placeholder="InputField"
          onChange={(e) => this.change(e.target.value)}
          value={this.state.value}
        />
        <button onClick={() => this.click(this.state.value)}>
          Добавить
        </button>
      </div>
    );
  }
}
