import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { connect } from '../../store/store';
import { withRouter } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import * as actions from '../../store/actions';


const SignUp = (props) => {

    const validationSchema = Yup.object().shape({
        first_name: Yup.string()
            .min(2, "*First Name must have at least 2 characters"),
        last_name: Yup.string()
            .min(2, "*Last Name must have at least 2 characters"),
        email: Yup.string()
            .email("*Must be a valid email address")
            .required("*Email Required"),
        password: Yup.string()
            .required("*Password Required")
            .min(6, "*Password must be more than 6 characters")
    });

    const submitHandler = (e, values) => {
        e.preventDefault();
        props.onSaveUser(values);
        console.log(props.posts)
        props.history.push('/login');
    }

    return (
        <>
            <Formik
                initialValues={{
                    first_name: '',
                    last_name: '',
                    email: '',
                    password: ''
                }}
                validationSchema={validationSchema}>
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    isSubmitting
                }) => (
                        <Form
                            className="p-5 border rounded"
                            onSubmit={e => submitHandler(e, values)}>
                            <h2 className="mb-5">Sign Up</h2>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your first name"
                                        name="first_name"
                                        value={values.first_name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        isInvalid={touched.first_name && !!errors.first_name} />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.first_name}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Last Family</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your last name"
                                        name="last_name"
                                        value={values.last_name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        isInvalid={touched.last_name && !!errors.last_name} />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.last_name}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter your email address"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
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
                            <Button
                                className="mt-5"
                                variant="primary"
                                type="submit"
                                disabled={isSubmitting}
                                block>
                                Sign Up
                            </Button>
                        </Form>
                    )}
            </Formik>
        </>
    )
}

const mapStateToProps = state => ({
    data: state,
    posts: state.posts
})

const mapDispatchToProps = dispatch => ({
    onSaveUser: (userData) => dispatch(actions.saveUser(userData))
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignUp));
