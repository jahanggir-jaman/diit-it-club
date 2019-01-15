import React from "react";
import MediaQuery from "react-responsive";

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <p className="text-center">&copy; Copyright {Date().split(" ")[3]}</p>
      </React.Fragment>
    );
  }
}
