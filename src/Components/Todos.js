import React from "react";
import Item from "./Item.js";

export default class Todos extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return (
      <div class="todosWrapper">
        
          <Item />
          <Item />
          <Item />
        
      </div>
    );
  }
}