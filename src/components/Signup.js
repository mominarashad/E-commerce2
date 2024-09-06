import { Field, Formik, ErrorMessage } from 'formik';
import React, { useState } from 'react';
import { Button, Container, Form, Row, Col, Alert } from 'react-bootstrap';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [message, setMessage] = useState(''); // State to display signup message
  const navigate = useNavigate(); // Create a navigate instance

  const newValidations = Yup.object({
    name: Yup.string().min(3, 'Name must be at least 3 characters long').required('Name is required!'),
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
              initialValues={{ name: '', email: '', password: '' }}
              validationSchema={newValidations}
              onSubmit={(values, { resetForm }) => {
                // Save form values to localStorage on signup
                localStorage.setItem('userData', JSON.stringify(values));
                setMessage('Signup successful!'); // Display signup success message
                resetForm(); // Clear form fields after successful signup
                navigate('/');
              }}
            >
              {({ handleSubmit }) => (
                <Form className='border p-4 shadow-lg rounded bg-dark text-white my-5' onSubmit={handleSubmit}>
                  <h2 className='text-center mb-4'>Signup for an Account</h2>

                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Field 
                      type='text' 
                      name='name' 
                      placeholder='Enter your name' 
                      className='form-control' 
                    />
                    <ErrorMessage name='name' component="div" className="text-danger" />
                  </Form.Group>

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
                    <Button type="submit" className='btn btn-success'>Signup</Button>
                  </div>
                </Form>
              )}
            </Formik>

            {message && (
              <Alert className="mt-4" variant="success">
                {message}
              </Alert>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Signup;
