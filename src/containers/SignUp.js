import React, { useState, useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import UserContext from '../containers/Context/auth-context';

const SignUp = (porps) => {

    const [userData, setUserData] = useState({
        first_name:'',
        last_name:'',
        email:'',
        password:''
    })

    const inputChnageHandler = (event) => {
        const value = event.target.value;
        setUserData({
            ...userData,
            [event.target.name]: value
        })
    }

    const { saveUserData } = useContext(UserContext);

    return (
        <Form onSubmit={(e) => {
            e.preventDefault();
            saveUserData(userData);
            const { history } = porps;
            history.push('/login');
        }}>
            <Form.Row>
                <Form.Group as={Col}>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your first name"
                        name="first_name"
                        value={userData.first_name}
                        onChange={inputChnageHandler} />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Last Family</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your last name"
                        name="last_name"
                        value={userData.last_name}
                        onChange={inputChnageHandler} />
                </Form.Group>
            </Form.Row>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter your email address"
                    name="email"
                    value={userData.email}
                    onChange={inputChnageHandler} />
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
            <Button className="mt-5" variant="secondary" type="submit" block>
                Sign Up
            </Button>
        </Form>
    )
}

export default SignUp;