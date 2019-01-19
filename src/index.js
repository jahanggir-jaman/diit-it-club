import React from "react";
import ReactDOM from "react-dom";

import "./styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import MainNavBar from "./components/navbar/MainNavBar";
import LeftSideBar from "./components/leftsidebar/LeftSideBar";
import RightSideBar from "./components/rightsidebar/RightSideBar";
import SplitPane from "./components/splitpane/SplitPane";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <React.Fragment>
        {/* NavBar */}
        <main className="main d-flex flex-column h-100">
          <header className="header">
            <MainNavBar />
          </header>
          {/*Left Side Bar */}
          {/* <LeftSideBar /> */}
          {/* Right Side NavBar */}
          {/* <RightSideBar /> */}
          <div className="flex-1">
            <SplitPane left={<LeftSideBar />} right={<RightSideBar />} />
          </div>
          {/* Footer */}
          <footer className="footer">
            <Footer />
          </footer>
        </main>
      </React.Fragment>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
