import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { withRouter } from "react-router";
import { LinkContainer } from "react-router-bootstrap";
import {connect} from '../store/store';

const Header = (props) => {

    let isLogged = null;
    if (JSON.parse(localStorage.getItem('user'))) {
        isLogged = JSON.parse(localStorage.getItem('user')).isLogged;
    }

    let navItems = null;
    if (isLogged === true) {
        navItems = (
            <Nav.Item className="ml-3">
                <Nav.Link href="/logout" onClick={() => props.onLogout()}>Logout</Nav.Link>
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
        <Navbar fixed="top" expand="lg" variant={props.theme.varient} bg={props.theme.background}>
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>Home</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto" activeKey={props.location.pathname}>
                        {navItems}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

const mapStateToProps = state => ({
    user: state.user,
    theme: state.theme
})

const mapDispatchToProps = dispatch => ({
    onLogout: () => dispatch({
        type: 'LOGOUT', payload: null
    })
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
