import React from 'react';
import { Col, Nav, Navbar, Container, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';

function Header() {
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Container>
        <Row className="w-100">
          <Col xs={4} className="d-flex align-items-center">
            <LinkContainer to="/">
              <Navbar.Brand>
                <img src="Images/logo.jpeg" width={30} height={30} alt="logo" />
                &nbsp; Al Fatah International Store
              </Navbar.Brand>
            </LinkContainer>
          </Col>
          <Col xs={4} className="d-flex justify-content-center">
            <Nav className="d-flex align-items-center">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/products">
                <Nav.Link>Products</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact">
                <Nav.Link>Contact</Nav.Link>
              </LinkContainer>
            </Nav>
          </Col>
          <Col xs={4} className="d-flex justify-content-end align-items-center">
            <Navbar.Text className='me-3'>
              <Link to="/signup" className="text-light">SignUp here</Link>
              &nbsp;|&nbsp;
              <a href='/signin' className="text-light">Sign in Here</a>
            </Navbar.Text>
            <Link to='/cart'>
              <ShoppingCart size={32} className='text-light' />
            </Link>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default Header;
