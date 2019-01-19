import React from "react";
import MediaQuery from "react-responsive";

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <p className="m-1 text-center">
          &copy; Copyright {Date().split(" ")[3]}
        </p>
      </React.Fragment>
    );
  }
}
