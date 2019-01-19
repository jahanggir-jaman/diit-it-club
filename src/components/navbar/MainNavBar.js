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

const logoStyle = {
  position: "relative",
  zIndex: "20",
  display: "block",
  width: "40%",
  height: "70px",
  background: "url(/img/diit_logo.svg)",
  backgroundRepeat: "no-repeat"
};

export default class MainNavBar extends React.Component {
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
        <Navbar color="light" light expand="md">
          <RNavLink exact to="/" style={logoStyle} />

          {/*Bootstrap tab breakdown pint is 768px*/}
          <MediaQuery query="(max-width: 767px)">
            <NavbarToggler onClick={this.toggle} />
            <Collapse
              className="hidden-md-up"
              isOpen={this.state.isOpen}
              navbar
            >
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <RNavLink to="/about">About</RNavLink>
                </NavItem>
                <NavItem>
                  <RNavLink to="/events">Events</RNavLink>
                </NavItem>
                <RNavLink to="/blog">Blog</RNavLink>
                <RNavLink to="/contact">Contact</RNavLink>
              </Nav>
            </Collapse>
          </MediaQuery>
        </Navbar>
      </React.Fragment>
    );
  }
}
