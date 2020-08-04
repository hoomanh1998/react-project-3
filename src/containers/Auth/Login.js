import React, { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { withRouter } from 'react-router-dom';
import { Store } from '../../store/store';
import { Formik } from 'formik';
import * as Yup from 'yup';
import * as actions from '../../store/actions';

const Login = (props) => {

    const { state, dispatch } = useContext(Store)

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email("*Must be a valid email address")
            .required("*Email Required"),
        password: Yup.string()
            .required("*Password Required")
            .min(6, "*Password must be more than 6 characters")
    });

    const submitHandler = (e, values) => {
        e.preventDefault();
        if (state.user.email === values.email && state.user.password === values.password) {
            dispatch(actions.authSuccess())
            props.history.push('/posts')
        } else {
            alert('SOMETHING WENT WRONG...')
        }
    }

    return (
        <>
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={validationSchema}>
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur
                }) => (
                        <Form
                            className="p-5 border rounded"
                            onSubmit={e => submitHandler(e, values)}>
                            <h2 className="mb-5">Login</h2>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    required
                                    type="email"
                                    placeholder="Enter your email"
                                    name="email"
                                    value={values.email}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    isInvalid={touched.email && !!errors.email} />
                                <Form.Control.Feedback type="invalid">
                                    {errors.email}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    required
                                    type="password"
                                    placeholder="Enter your password"
                                    name="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isInvalid={touched.password && !!errors.password} />
                                <Form.Control.Feedback type="invalid">
                                    {errors.password}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Button variant="outline-secondary" onClick={() => dispatch(actions.changeTheme())}>
                                Toggle Theme
                            </Button>
                            <Button className="mt-5" variant="success" type="submit" block>
                                Login
                            </Button>
                        </Form>
                    )}
            </Formik>
        </>
    )
}

export default withRouter(Login);