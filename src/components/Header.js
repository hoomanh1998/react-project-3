import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = (props) => (
    <Navbar fixed="top" expand="lg" variant="dark" bg="dark">
        <Container>
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item className="ml-3">
                        <Nav.Link to="/"></Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="ml-3">
                        <Nav.Link href="/login">Login</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="ml-3">
                        <Nav.Link href="/signup">Sign Up</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
)

export default Header;