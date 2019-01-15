import React from "react";
import MediaQuery from "react-responsive";
import "./splitpane.scss";

export default class SplitPane extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <div className="SplitPane">
          <div className="SplitPane-left">{this.props.left}</div>
          <div className="SplitPane-right">{this.props.right}</div>
        </div>
      </React.Fragment>
    );
  }
}
