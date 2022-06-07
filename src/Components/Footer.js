import React from "react";
import BtnClearAll from "./BtnClearCompleted";

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
    const { todos } = this.props;

    return todos.filter((curr) => {
      if (!curr.isDone) {
        return curr;
      } else {
        return null;
      }
    }).length;
  };

  render() {
    const {filterMode, visibleButtonClear, todos} = this.props;

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

        {/* ButtonClearCompleted */}
        <BtnClearAll
          clickClearCompleted={this.clickClearCompleted}
          visibleButtonClear={visibleButtonClear}
          todos={todos}
        />
      </div>
    );
  }
}
