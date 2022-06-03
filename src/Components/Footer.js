import React from "react";

export default class Footer extends React.Component {
  clickAll = () => {
    return this.props.funcUpdateFilterMode("All");
  }

  clickActive = () => {
    this.props.funcUpdateFilterMode("Active");
  }

  clickCompleted = () => {
    return this.props.funcUpdateFilterMode("Completed");
  }

  clickClearCompleted = () => {
    return this.props.funcClearCompleted();
  }

  getCount = () => {
    if(this.props.filterMode === "All"){
      return this.props.lengthCount;
    } else if (this.props.filterMode === "Active"){
      return this.props.todos.filter((curr) => {
        if(!curr.isDone){
          return curr
        }else{
          return
        } 
      }).length
    } else if (this.props.filterMode === "Completed"){
      return this.props.todos.filter((curr) => {
        if(curr.isDone){
          return curr
        }else{
          return
        }
      }).length
    }
  }

  render() {
    return (
      <div className="footer">
        <div className="counter">{this.getCount()} items left</div>

        {/* FilterAllButton */}
        <div
          className={
            this.props.filterMode === "All"
              ? "filterAll filterSelected"
              : "filterAll"
          }
          onClick={this.clickAll}
        >
          All
        </div>

        {/* FilterActiveButton */}
        <div
          className={
            this.props.filterMode === "Active"
              ? "filterActive filterSelected"
              : "filterActive"
          }
          onClick={this.clickActive}
        >
          Active
        </div>

        {/* FilterCompletedButton */}
        <div
          className={
            this.props.filterMode === "Completed"
              ? "filterCompleted filterSelected"
              : "filterCompleted"
          }
          onClick={this.clickCompleted}
        >
          Completed
        </div>

        <div className="clearCompleted" onClick={this.clickClearCompleted}>
          ClearCompleted
        </div>
      </div>
    );
  }
}
