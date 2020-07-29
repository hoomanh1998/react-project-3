import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { withRouter } from 'react-router-dom';
import { connect } from '../../store/store';
import { Formik } from 'formik';
import * as Yup from 'yup';
import * as actions from '../../store/actions';

const Login = (props) => {

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
        if (values.email !== "" && values.password !== "") {
            if (props.user.email === values.email && props.user.password === values.password) {
                props.onAuthentication()
                localStorage.setItem('user', JSON.stringify({
                    isLogged: true,
                    theme: props.theme
                }))
                props.history.push('/')
            } else {
                alert('SOMETHING WENT WRONG...')
            }
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
                            <Button variant="outline-secondary" onClick={() => props.onChangeTheme()}>
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

const mapStateToProps = state => ({
    user: state.user,
    isLogged: state.isLogged,
    theme: state.theme
})

const mapDispatchToProps = dispatch => ({
    onAuthentication: () => dispatch(actions.auth()),
    onChangeTheme: () => dispatch(actions.changeTheme())
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));