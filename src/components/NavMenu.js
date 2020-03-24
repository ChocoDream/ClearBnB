import React, {useState} from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";


const NavMenu = () => {

  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Router>

      {/*Right now the user got to refresh to head
      to each page after clicking on the link, Got to fix */}
      <Navbar color="faded" light>
        <Link to="/" className="mr-auto navbar-brand">ClearBnB</Link>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <Link to="/search/" className="nav-link">Search</Link>
            </NavItem>
            <NavItem>
              <Link to="/about/" className="nav-link">About</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      </Router>
    </div>
  )
}

export default NavMenu;