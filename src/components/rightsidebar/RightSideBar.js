import React from "react";
import MediaQuery from "react-responsive";
import Content from "../content/Content";
export default class RightSideBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Content />
      </React.Fragment>
    );
  }
}
