import React from "react";

export default class InputField extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return (
      <div class="inputFieldWrapper">
        <input class="inputField"
          placeholder="InputField"
        />
      </div>
    )
  }
}