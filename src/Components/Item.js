import React from "react";

export default class Item extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return(
      <div class="ItemWrapper">
        <div class="Item">
          
                <input type="Checkbox" class="CheckBox"/>
             
              
                <div class="captionTask">
                  <input value="Caption"/>
                </div>
              
                <div class="delButton">
                  <input type="button" value="X"/>
                </div>
            
        </div>
      </div>
    )
  }
}