import React from "react";

export default class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      checkBoxSelectAll: false
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

  changeCheckBoxSelectAll = (v, e) => {
    // this.setState({checkBoxSelectAll: v==="on"?true:false})

    console.log("v is ",v);
    console.log("e is ", e);

    if(v==="on"){
      this.setState({checkBoxSelectAll:true})
    }
    else{
      this.setState({checkBoxSelectAll:false})
    }

    console.log(this.state.checkBoxSelectAll);
  }

  render() {
    const value = this.state.value;

    return (
      <div className="inputFieldWrapper">
        <input type="checkbox" className="selectAll" onClick={(e) => this.changeCheckBoxSelectAll(e.target.value, e)}  
          checked={this.state.checkBoxSelectAll}
        />
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
