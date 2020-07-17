import React, { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import UserContext from '../containers/Context/auth-context';
import Aux from '../hoc/Auxiliray';
import { Formik } from 'formik';
import * as Yup from 'yup';


const SignUp = (porps) => {

    const { saveUserData } = useContext(UserContext);

    const validationSchema = Yup.object().shape({
        first_name: Yup.string()
            .min(2, "*First Name must have at least 2 characters")
            .required("*Name Required"),
        last_name: Yup.string()
            .min(2, "*Last Name must have at least 2 characters")
            .required("*Last Name Required"),
        email: Yup.string()
            .email("*Must be a valid email address")
            .required("*Email Required"),
        password: Yup.string()
            .required("*Password Required")
            .min(6, "*Password must be more than 6 characters")
    });

    return (
        <Aux>
            <h2 className="mb-5 pb-3 text-center border-bottom">SignUp Page</h2>
            <Formik
                initialValues={{ first_name: '', last_name: '', email: '', password: '' }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    saveUserData(values);
                    const { history } = porps;
                    history.push('/login');
                    setSubmitting(false);
                }}>
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting
                }) => (
                        <Form onSubmit={handleSubmit}>
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
                                variant="secondary"
                                type="submit"
                                disabled={isSubmitting}
                                block>
                                Sign Up
                            </Button>
                        </Form>
                    )}
            </Formik>
        </Aux>
    )
}

export default SignUp;