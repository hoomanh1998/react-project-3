import React, { useContext } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import ThemeContext from "../containers/Context/theme-context";
import UserContext from '../containers/Context/auth-context';
import { withRouter } from "react-router";
import { LinkContainer } from "react-router-bootstrap";

const Header = (props) => {

    const { location } = props;
    const { theme } = useContext(ThemeContext);
    const { logoutHandler } = useContext(UserContext);

    let isLogged = null;
    if (JSON.parse(localStorage.getItem('user'))) {
        isLogged = JSON.parse(localStorage.getItem('user')).isLogged;
    }

    let navItems = null;
    if (isLogged === true) {
        navItems = (
            <Nav.Item className="ml-3">
                <Nav.Link href="/login" onClick={logoutHandler}>Logout</Nav.Link>
            </Nav.Item>
        )
    } else {
        navItems = (
            <>
                <Nav.Item className="ml-3">
                    <LinkContainer to="/login">
                        <Nav.Link>Login</Nav.Link>
                    </LinkContainer>
                </Nav.Item>
                <Nav.Item className="ml-3">
                    <LinkContainer to="/signup">
                        <Nav.Link>Sign Up</Nav.Link>
                    </LinkContainer>
                </Nav.Item>
            </>
        )
    }

    return (
        <Navbar fixed="top" expand="lg" variant={theme.varient} bg={theme.background}>
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>Home</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto" activeKey={location.pathname}>
                        {navItems}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default withRouter(Header);
