import React from "react";
import MediaQuery from "react-responsive";

import { NavLink as RNavLink } from "react-router-dom";
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

export default class LeftMenu extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="w-100 lsmenu btn-group-vertical h-100 btn-group-lg">
          <button type="button" class="btn btn-secondary">
            <RNavLink exact to="/">
              Home
            </RNavLink>
          </button>
          <button type="button" class="btn btn-secondary">
            <RNavLink to="/about">About</RNavLink>
          </button>
          <button type="button" class="btn btn-secondary">
            <RNavLink to="/events">Events</RNavLink>
          </button>
          <button type="button" class="btn btn-secondary">
            <RNavLink to="/blog">Blog</RNavLink>
          </button>
          <button type="button" class="btn btn-secondary">
            <RNavLink to="/contact">Contact</RNavLink>
          </button>
        </div>
      </React.Fragment>
    );
  }
}
