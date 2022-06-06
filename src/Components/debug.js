import React from "react";

export default class Debug extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <button onClick={this.props.debug1}>Debug1</button>
        <button onClick={this.props.debug2}>Debug2</button>
      </div>
    );
  }
}
