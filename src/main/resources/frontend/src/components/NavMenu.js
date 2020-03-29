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
      <Navbar color="faded" light className=""> {/*MOBILE */}
        <Link to="/" className="mr-auto h2 text-info"><b>ClearBnB</b></Link>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar className="text-right h4 mr-2">
            <NavItem>
              <Link to="/login" className="text-info">Logga in</Link>
            </NavItem>
            <NavItem>
              <Link to="/search/" className="text-info">Sök</Link>
            </NavItem>
            <NavItem>
              <Link to="/about/" className="text-info">Om oss</Link>
            </NavItem>
          </Nav>
        </Collapse>
        </Navbar>
        
        

      </Router>
    </div>
  )
}

export default NavMenu;