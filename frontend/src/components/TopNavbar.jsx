import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Form, Button } from 'react-bootstrap';

const TopNav = () => {
    return (
        <Navbar expand="lg" className="bg-dark text-white fixed-top">
            <Container fluid>
                {/* Logo y nombre */}
                <Navbar.Brand href="#" className="text-white d-flex align-items-center">
                    <span className="me-2">🔒</span>
                    <strong>PLAZA CLUB</strong>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    {/* Enlaces de navegación */}
                    <Nav className="me-auto">
                        <Nav.Link href="#ofertas" className="text-white">Ofertas</Nav.Link>
                        {/* Menú desplegable */}
                        <NavDropdown title="Colección" id="navbarScrollingDropdown" className="text-white">
                            <NavDropdown.Item href="#remeras">Remeras</NavDropdown.Item>
                            <NavDropdown.Item href="#pantalones">Pantalones</NavDropdown.Item>
                            <NavDropdown.Item href="#buzos">Buzos</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#locales" className="text-white">Locales</Nav.Link>
                    </Nav>

                    {/* Campo de búsqueda */}
                    <Form className="d-flex me-3">
                        <Form.Control
                            type="search"
                            placeholder="Buscar"
                            className="me-2"
                            aria-label="Search"
                        />
                    </Form>

                    {/* Botones */}
                    <Button variant="outline-light" className="me-2">Carrito</Button>
                    <Button variant="light">Login</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default TopNav;
