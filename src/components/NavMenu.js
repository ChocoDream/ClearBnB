import React, {useState} from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";


const NavMenu = () => {

  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Router>

      <Navbar color="faded" light>
        <Link to="/" className="mr-auto navbar-brand">ClearBnB</Link>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <Link to="/" className="nav-link">Search</Link>
            </NavItem>
            <NavItem>
              <Link to="/" className="nav-link">About</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      </Router>
    </div>
  )
}

export default NavMenu;