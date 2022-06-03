import React from "react";

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="footer">
        <div className="counter">{this.props.lengthCount} items left</div>
        <div className="filterAll filterSelected">All</div>
        <div className="filterActive">Active</div>
        <div className="filterCompleted">Completed</div>
        <div className="clearAll">ClearCompleted</div>
      </div>
    );
  }
}
