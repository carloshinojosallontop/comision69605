import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="fw-bold">
          🎮 GamingStore
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-content" />
        <Navbar.Collapse id="navbar-content">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Inicio</Nav.Link>
            <Nav.Link as={NavLink} to="/category/ofertas">Ofertas</Nav.Link>
            <NavDropdown title="Productos" id="nav-dropdown">
              <NavDropdown.Item as={NavLink} to="/category/nintendo">Nintendo</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/category/ps5">PS5</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/category/ps4">PS4</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/cart" className="position-relative">
              <CartWidget />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
