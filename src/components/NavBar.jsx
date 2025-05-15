import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="d-flex justify-content-between align-items-center">
        
        <div className="d-flex align-items-center flex-shrink-0">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Brand as={NavLink} to="/" className="ms-2">GamingStore</Navbar.Brand>
        </div>
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Inicio</Nav.Link>
            <Nav.Link as={NavLink} to="/category/ofertas">Ofertas</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to="/category/nintendo">Nintendo</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/category/ps5">PS5</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/category/ps4">PS4</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        {/* Widget del carrito */}
        <CartWidget />
      </Container>
    </Navbar>
  );
}

export default NavBar;
