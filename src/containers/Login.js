import React, { useState, useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import UserContext from '../containers/Context/auth-context';
import ThemeContext from '../containers/Context/theme-context';
import Aux from '../hoc/Auxiliray';
import { Formik } from 'formik';
import * as Yup from 'yup';

const Login = (props) => {

    const [state, setState] = useState({isLogged: false});

    const { user, toggleLogStatus } = useContext(UserContext)
    const { toggleTheme } = useContext(ThemeContext);

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email("*Must be a valid email address")
            .required("*Email Required"),
        password: Yup.string()
            .required("*Password Required")
            .min(6, "*Password must be more than 6 characters")
    });

    return (
        <Aux>
            <h2 className="mb-5 text-center">Login Page</h2>
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={validationSchema}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting
                }) => (
                        <Form onSubmit={(e) => {
                            e.preventDefault();
                            toggleLogStatus();
                            state.isLogged = true;
                            localStorage.setItem('user', JSON.stringify(state))
                            const { history } = props;
                            history.push('/')
                        }}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter your email"
                                    name="email"
                                    value={values.email}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    isInvalid={touched.email && !!errors.email}
                                    isValid={touched.email && !errors.email} />
                                <Form.Control.Feedback type="invalid">
                                    {errors.email}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Enter your password"
                                    name="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isInvalid={touched.password && !!errors.password}
                                    isValid={touched.password && !errors.password} />
                                <Form.Control.Feedback type="invalid">
                                    {errors.password}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Button variant="outline-secondary" onClick={toggleTheme}>
                                Toggle Theme
                            </Button>
                            <Button className="mt-5" variant="secondary" type="submit" block disabled={isSubmitting}>
                                Login
                            </Button>
                        </Form>
                    )}
            </Formik>
        </Aux >
    )
}

export default Login;