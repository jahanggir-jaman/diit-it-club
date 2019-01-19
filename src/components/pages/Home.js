import React from "react";
import MediaQuery from "react-responsive";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <div className="w-100  h-100">
          <h1>Home</h1>
        </div>
      </React.Fragment>
    );
  }
}
