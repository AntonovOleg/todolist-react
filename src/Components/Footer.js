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

    // Новый режим, при котором отображается количество незавершенных заданий
    return todos.filter((curr) => {
            if (!curr.isDone) {
              return curr;
            } else {
              return;
            }
          }).length;

    // Преждний режим, при котором отображалось количесвто items 
    //  при текущем фильтре

    // switch (filterMode) {
    //   case "All":
    //     // return lengthCount;
    //     // break;
    //   case "Active":
    //     return todos.filter((curr) => {
    //       if (!curr.isDone) {
    //         return curr;
    //       } else {
    //         return;
    //       }
    //     }).length;
    //     break;
    //   // case "Completed":
    //   //   return todos.filter((curr) => {
    //   //     if (curr.isDone) {
    //   //       return curr;
    //   //     } else {
    //   //       return;
    //   //     }
    //   //   }).length;
    //   //   break;
    //   default:
    //     alert("Непредвиденная ошибка");
    //     break;
    // }
  };

  renderButtonClearCompleted = () => {
    let currentClassName = `clearCompleted footerButton ${this.props.visibleButtonClear ? "visible" : "hidden"}`;
    let elem = <div className={currentClassName} onClick={this.clickClearCompleted}>ClearCompleted</div>
    return elem;
  }

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

        {/* ButtonClearCompleted */}
        {this.renderButtonClearCompleted()}
      </div>
    );
  }
}
