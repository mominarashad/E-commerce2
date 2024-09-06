import { Field, Formik, ErrorMessage } from 'formik';
import React, { useState } from 'react';
import { Button, Container, Form, Row, Col, Alert } from 'react-bootstrap';
import * as Yup from 'yup';

function Login() {
  const [message, setMessage] = useState(''); // State to display a message after form submission

  // Validation schema using Yup
  const loginValidations = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    comment: Yup.string().required('Feedback is required'),
  });

  return (
    <div>
      <Container className='mt-5'>
        <Row className="justify-content-center">
          <Col md={6}>
            <Formik
              initialValues={{ email: '', comment: '' }}
              validationSchema={loginValidations}
              onSubmit={(values, { resetForm }) => {
                // Store the email and feedback (comments) in localStorage
                localStorage.setItem('email', values.email);
                localStorage.setItem('comment', values.comment);

                // Show a success message after submission
                setMessage('Your feedback has been submitted successfully!');

                // Clear the form fields
                resetForm();
              }}
            >
              {({ handleSubmit }) => (
                <Form className='border p-4 shadow-lg rounded bg-dark text-white my-5' onSubmit={handleSubmit}>
                  <h2 className='text-center mb-4'>Contact Us</h2>
                  <Form.Group className="mb-3">
                    <Form.Label>Email Address</Form.Label>
                    <Field 
                      type='email' 
                      name='email' 
                      placeholder='Enter your email' 
                      className='form-control' 
                    />
                    <ErrorMessage name='email' component="span" className="text-danger" />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Feedback</Form.Label>
                    <Field 
                      as='textarea' 
                      name='comment' 
                      placeholder='Enter your feedback' 
                      className='form-control' 
                      rows={4}
                    />
                    <ErrorMessage name='comment' component="span" className="text-danger" />
                  </Form.Group>

                  <div className="text-center">
                    <Button type="submit" className='btn btn-success'>Submit</Button>
                  </div>
                </Form>
              )}
            </Formik>

            {/* Show the success message if feedback is submitted */}
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

export default Login;
