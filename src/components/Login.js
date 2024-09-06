import { Field, Formik, ErrorMessage } from 'formik';
import React, { useState } from 'react';
import { Button, Container, Form, Row, Col, Alert } from 'react-bootstrap';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [message, setMessage] = useState(''); // State to display login message
  const storedUserData = JSON.parse(localStorage.getItem('userData'));
  const navigate = useNavigate(); // Create a navigate instance

  const loginValidations = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters long')
      .max(20, 'Password cannot be longer than 20 characters')
      .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
      .matches(/[0-9]/, 'Password must contain at least one number')
      .matches(/[!@#$%^&*]/, 'Password must contain at least one special character')
      .required('Password is required!')
  });

  return (
    <div>
      <Container className='mt-5'>
        <Row className="justify-content-center">
          <Col md={6} lg={4}>
            <Formik
              initialValues={{ email: '', password: '' }}
              validationSchema={loginValidations}
              onSubmit={(values, { resetForm }) => {
                if (storedUserData) {
                  // Compare input values with stored user data
                  if (
                    values.email === storedUserData.email &&
                    values.password === storedUserData.password
                  ) {
                    setMessage(`Login successful! Welcome, ${storedUserData.name}`);
                    resetForm(); // Clear form fields after successful login
                    navigate('/');
                  } else {
                    setMessage('Invalid email or password');
                  }
                } else {
                  setMessage('No user found. Please signup first.');
                }
              }}
            >
              {({ handleSubmit }) => (
                <Form className='border p-4 shadow-lg rounded bg-dark text-white my-5' onSubmit={handleSubmit}>
                  <h2 className='text-center mb-4'>Login to Your Account</h2>
                  
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Field 
                      type='email' 
                      name='email' 
                      placeholder='Enter your email' 
                      className='form-control' 
                    />
                    <ErrorMessage name='email' component="div" className="text-danger" />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Password</Form.Label>
                    <Field 
                      type='password' 
                      name='password' 
                      placeholder='Enter your password' 
                      className='form-control' 
                    />
                    <ErrorMessage name='password' component="div" className="text-danger" />
                  </Form.Group>

                  <div className="text-center">
                    <Button type="submit" className='btn btn-success'>Login</Button>
                  </div>
                </Form>
              )}
            </Formik>

            {message && (
              <Alert className="mt-4" variant={message.includes('successful') ? 'success' : 'danger'}>
                {message}
              </Alert>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
