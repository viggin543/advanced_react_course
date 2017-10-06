import React from 'react';
import {Nav,NavItem,Navbar,NavDropdown,MenuItem} from 'react-bootstrap';

class NavBar extends React.Component {
  render() {
    return(
      <Navbar  collapseOnSelect fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">CODE4FUN</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem className="nav-animation" eventKey={1} href="#">Write</NavItem>
            <NavItem className="nav-animation" eventKey={2} href="#">Read</NavItem>
            <NavDropdown 
              className="nav-animation"
              eventKey={3} 
              title="Dropdown" 
              id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            <NavItem className="nav-animation" eventKey={1} href="#">Support </NavItem>
            <NavItem className="nav-animation" eventKey={2} href="#">Donate</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default NavBar;