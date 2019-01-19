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
        <div className="h-100 w-100 d-flex">
          <div className="flex-2 d-none d-md-block">{this.props.left}</div>
          <div className="flex-8">{this.props.right}</div>
        </div>
      </React.Fragment>
    );
  }
}
