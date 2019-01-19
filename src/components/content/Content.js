import React from "react";
import MediaQuery from "react-responsive";
import { Switch, Route } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import Home from "../pages/Home";
import About from "../pages/About";
import Events from "../pages/Events";
import Blog from "../pages/Blogs";
import Contact from "../pages/Contact";

export default class Content extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Switch>
        <div className="content h-100">
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/contact" component={Contact} />
        </div>
      </Switch>
    );
  }
}
