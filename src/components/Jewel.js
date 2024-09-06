import React, { useState, useContext } from 'react';
import { Card, Container, Row, Col, Button, Alert } from 'react-bootstrap';
import CartContext from './CartContext';

function Vegetable() {
  const { addToCart } = useContext(CartContext);
  const [successMessage, setSuccessMessage] = useState('');

  const handleAddToCart = (item) => {
    addToCart(item);
    setSuccessMessage(`Added ${item.name} to cart successfully!`);
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000); // Clear message after 3 seconds
  };

  return (
    <>
      {successMessage && (
        <Container>
          <Alert variant="success" style={{ marginTop: '20px' }}>
            {successMessage}
          </Alert>
        </Container>
      )}

      <Container style={{ marginTop: '125px' }}>
        <Row>
          <Col>
            <Card>
              <Card.Header>Gold Set 1</Card.Header>
              <Card.Img src='/Images/j1.jpeg' />
              <Card.Body>
                <Card.Text>Price: $2.00</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="primary" onClick={() => handleAddToCart({ name: 'Casual Wear Chappal', price: 2.00, image: '/Images/j1.jpeg' })}>
                  Add to Cart
                </Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>Gold Earings</Card.Header>
              <Card.Img src='/Images/j2.jpeg' />
              <Card.Body>
                <Card.Text>Price: $3.00</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="primary" onClick={() => handleAddToCart({ name: 'Casual Pink Sandle', price: 3.00, image: '/Images/j2.jpeg' })}>
                  Add to Cart
                </Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>Gold Anklet</Card.Header>
              <Card.Img src='/Images/j3.jpeg' />
              <Card.Body>
                <Card.Text>Price: $1.50</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="primary" onClick={() => handleAddToCart({ name: 'Wedge Heel Shoes', price: 1.50, image: '/Images/j3.jpeg' })}>
                  Add to Cart
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container className='mt-2 pt-2' style={{ marginTop: '150px' }}>
        <Row>
          <Col>
            <Card>
              <Card.Header>Gold Set 2</Card.Header>
              <Card.Img src='/Images/j4.jpeg' />
              <Card.Body>
                <Card.Text>Price: $4.00</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="primary" onClick={() => handleAddToCart({ name: 'Silver Festive Wear', price: 4.00, image: '/Images/j4.jpeg' })}>
                  Add to Cart
                </Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>Gold Anklet</Card.Header>
              <Card.Img src='/Images/j5.jpeg' />
              <Card.Body>
                <Card.Text>Price: $5.00</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="primary" onClick={() => handleAddToCart({ name: "Men's Black Chappal", price: 5.00, image: '/Images/j5.jpeg' })}>
                  Add to Cart
                </Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>Gold Bangles</Card.Header>
              <Card.Img src='/Images/j6.jpeg' />
              <Card.Body>
                <Card.Text>Price: $2.50</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="primary" onClick={() => handleAddToCart({ name: 'Black Slipper', price: 2.50, image: '/Images/j6.jpeg' })}>
                  Add to Cart
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Vegetable;
