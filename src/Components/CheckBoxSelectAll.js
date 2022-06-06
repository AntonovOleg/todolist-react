import React from "react";

export default class changeCheckBoxSelectAll extends React.Component {
  renderCheckBoxSelectAll = () => {
    const { selectAllFlag, todos } = this.props;
    const hide = todos.length === 0;

    return hide ? null : (
      <input
        type="checkbox"
        className="selectAll"
        onChange={(e) => this.props.changeCheckBoxSelectAll()}
        checked={selectAllFlag}
      />
    );
  };

  render() {
    return <div>{this.renderCheckBoxSelectAll()}</div>;
  }
}
