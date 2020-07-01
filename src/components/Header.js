import React, { useContext } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import ThemeContext from "./theme-context";

const Header = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <Navbar fixed="top" expand="lg" variant={theme} bg={theme}>
            <Container>
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Item className="ml-3">
                            <Nav.Link to="/" />
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
    );
};

export default Header;
