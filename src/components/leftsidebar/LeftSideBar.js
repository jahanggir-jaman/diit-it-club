import React from "react";
import LeftMenu from "../menu/LeftMenu";
import MediaQuery from "react-responsive";

export default class LeftSideBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <LeftMenu />
      </React.Fragment>
    );
  }
}
