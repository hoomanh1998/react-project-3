import React, { useState, useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import UserContext from '../containers/Context/auth-context';
import ThemeContext from '../containers/Context/theme-context';

const Login = (props) => {

    const [userData, setUserData] = useState({
        email: '',
        password: '',
        isLogged: false
    });

    const inputChnageHandler = (event) => {
        const value = event.target.value;
        setUserData({
            ...userData,
            [event.target.name]: value
        })
    }

    const { user , toggleLogStatus } = useContext(UserContext)
    const { toggleTheme } = useContext(ThemeContext);

    const LoginHandler = (event) => {
        event.preventDefault();
        if (userData.email !== '' && userData.password !== '') {
            if (user.email === userData.email && user.password === userData.password) {
                toggleLogStatus();
                userData.isLogged = true
                localStorage.setItem('user', JSON.stringify(userData))
                const { history } = props;
                history.push('/')
            } else {
                alert('Email or password is incorrect');
            }
        } else {
            alert('Fill all the fields first!');
        }
    }

    return (
        <Form onSubmit={LoginHandler}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    value={userData.email}
                    onChange={inputChnageHandler} />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Enter your password"
                    name="password"
                    value={userData.password}
                    onChange={inputChnageHandler} />
            </Form.Group>
            <Button variant="outline-secondary" onClick={toggleTheme}>
                Toggle Theme
            </Button>
            <Button className="mt-5" variant="secondary" type="submit" block>
                Login
            </Button>
        </Form>
    )
}

export default Login;