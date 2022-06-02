import React from "react";

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div class="footer">
              <div class="counter">3 items left</div>
              <div class="filterAll filterSelected">
                All
              </div>
              <div class="filterActive">
                Active
              </div>
              <div class="filterCompleted">
                Completed
              </div>
              <div class="clearAll">
                ClearCompleted
              </div> 
      </div>
    );
  }
}
