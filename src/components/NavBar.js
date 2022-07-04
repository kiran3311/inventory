import React from 'react';
import { Navbar, Nav, Container } from "react-bootstrap";
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
import {
    Link, useNavigate
} from 'react-router-dom';
const NavBar = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/signup')
    }
    return (
        <>
      <>
        {auth ? (
          <>
            <Navbar bg="dark" variant="dark">
              <Container>
                <Navbar.Brand href="/">PRODUCT INVENTORY </Navbar.Brand>
                <Nav className="ml-auto">
                  <Nav.Link href="/">Product</Nav.Link>
                  <Nav.Link href="/add">Add product</Nav.Link>
                  <Nav.Link href="/profile">Profile</Nav.Link>
                  <Nav.Link href="/signup" onClick={logout}>
                    Logout<LogoutSharpIcon/>
                  </Nav.Link>
                </Nav>
              </Container>
            </Navbar>
          </>
        ) : (
          <>
            <Navbar bg="dark" variant="dark">
              <Container>
                <Navbar.Brand href="/">PRODUCT INVENTORY </Navbar.Brand>
                <Nav className="ml-auto">
                  <Nav.Link href="/signup">Signup</Nav.Link>
                  <Nav.Link href="/login">Login</Nav.Link>
                </Nav>
              </Container>
            </Navbar>
          </>
        )}
      </>
    </>
    )
}

export default NavBar;