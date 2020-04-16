import React, { useState, useContext } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, Form } from 'reactstrap';
import { Link } from "react-router-dom";
import { UserContext } from '../contexts/UserContextProvider'

const NavMenu = (props) => {

  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  const { user, setUser } = useContext(UserContext)

  const logout = () => {
    fetch('/logout')
    setUser(null)
  }

  return (
    <Navbar color="faded" light className="container" expand="md"> {/*MOBILE */}
      <Link to="/" className="mr-auto navbar-brand text-info"><h3>Clear BnB</h3></Link>
      <NavbarToggler onClick={toggleNavbar} className="mr-0" />
      <Collapse isOpen={!collapsed} navbar>
        <Nav navbar className="text-right ml-auto">
          <NavItem>
            <Link to="/about/" className="nav-link text-info h5">Om oss</Link>
          </NavItem>
          {!user?(
          <>
            <NavItem>
              <Link to="/user-login" className="nav-link text-info h5">Logga in</Link>
            </NavItem>
            <NavItem>
              <Link to="/user-register" className="nav-link text-info h5">Skapa konto</Link>
            </NavItem>
          </>
          ):(
          <>
            <NavItem>
              <Link to="/mypage" 
                className="nav-link text-warning h5 capitalize"
                style={{ textTransform: 'capitalize' }}
              >Mina sidor</Link>
            </NavItem>
            <NavItem>
              <Link onClick={logout} to="/" className="nav-link text-info h5"> Logout</Link>
            </NavItem>
          </>
          )}
        </Nav>
      </Collapse>
      </Navbar>
  )
}

export default NavMenu;