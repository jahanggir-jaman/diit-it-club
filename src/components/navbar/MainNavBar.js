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

          <MediaQuery query="(max-width: 800px)">
            <NavbarToggler onClick={this.toggle} />
            <Collapse
              className="hidden-md-up"
              isOpen={this.state.isOpen}
              navbar
            >
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/components/">Components</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">
                    GitHub
                  </NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Options
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>Option 1</DropdownItem>
                    <DropdownItem>Option 2</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Reset</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </MediaQuery>
        </Navbar>
      </React.Fragment>
    );
  }
}
