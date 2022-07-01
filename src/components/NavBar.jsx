import { Navbar, Nav, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const auth = localStorage.getItem("user");
  const nevigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    nevigate("/signup");
  };
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
                  <Nav.Link href="/addproduct">Add product</Nav.Link>
                  <Nav.Link href="/updateproduct">Update product</Nav.Link>
                  <Nav.Link href="/profile">Profile</Nav.Link>
                  <Nav.Link href="/signup" onClick={logout}>
                    Logout
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
  );
};

export default NavBar;
