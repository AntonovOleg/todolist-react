import React from "react";

export default class Footer extends React.Component {
  clickAll = () => {
    this.props.funcUpdateFilterMode("All");
  };

  clickActive = () => {
    this.props.funcUpdateFilterMode("Active");
  };

  clickCompleted = () => {
    this.props.funcUpdateFilterMode("Completed");
  };

  clickClearCompleted = () => {
    this.props.funcClearCompleted();
  };

  getCount = () => {
    const { filterMode, lengthCount, todos } = this.props;

    if (filterMode === "All") {
      return lengthCount;
    } else if (filterMode === "Active") {
      return todos.filter((curr) => {
        if (!curr.isDone) {
          return curr;
        } else {
          return;
        }
      }).length;
    } else if (filterMode === "Completed") {
      return todos.filter((curr) => {
        if (curr.isDone) {
          return curr;
        } else {
          return;
        }
      }).length;
    }
  };

  render() {
    const filterMode = this.props.filterMode;

    return (
      <div className="footer">
        <div className="counter">{this.getCount()} items left</div>

        {/* FilterAllButton */}
        <div
          className={
            filterMode === "All" ? "filterAll filterSelected" : "filterAll"
          }
          onClick={this.clickAll}
        >
          All
        </div>

        {/* FilterActiveButton */}
        <div
          className={ 
            filterMode === "Active"
              ? "filterActive filterSelected footerButton"
              : "filterActive footerButton"
          }
          onClick={this.clickActive}
        >
          Active
        </div>

        {/* FilterCompletedButton */}
        <div
          className={
            filterMode === "Completed"
              ? "filterCompleted filterSelected footerButton"
              : "filterCompleted footerButton"
          }
          onClick={this.clickCompleted}
        >
          Completed
        </div>

        <div className="clearCompleted footerButton" onClick={this.clickClearCompleted}>
          ClearCompleted
        </div>
      </div>
    );
  }
}
