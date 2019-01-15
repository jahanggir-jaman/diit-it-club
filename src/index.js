import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import MainNavBar from "./components/navbar/MainNavBar";
import LeftSideBar from "./components/leftsidebar/LeftSideBar";
import RightSideBar from "./components/rightsidebar/RightSideBar";
import SplitPane from "./components/splitpane/SplitPane";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/footer/Footer";
// import Example from "./components/NavBar.NavBar.js"

import "./styles.css";

function App() {
  return (
    <Router>
      <React.Fragment>
        {/* NavBar */}
        <MainNavBar />
        {/*Left Side Bar */}
        {/* <LeftSideBar /> */}
        {/* Right Side NavBar */}
        {/* <RightSideBar /> */}
        <SplitPane left={<LeftSideBar />} right={<RightSideBar />} />
        {/* Footer */}
        <Footer />
      </React.Fragment>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
