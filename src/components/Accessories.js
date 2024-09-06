// Vegetable.js
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
              <Card.Header>WristWatch</Card.Header>
              <Card.Img src='/Images/WristWatch.jpg' alt='WristWatch' />
              <Card.Body>
                <Card.Text>Price: $2.00</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="primary" onClick={() => handleAddToCart({ name: 'WristWatch', price: 2.00, image: '/Images/WristWatch.jpg' })}>
                  Add to Cart
                </Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>Sun Glasses</Card.Header>
              <Card.Img src='/Images/sunglasses.jpg' alt='Sun Glasses' />
              <Card.Body>
                <Card.Text>Price: $3.00</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="primary" onClick={() => handleAddToCart({ name: 'Sun Glasses', price: 3.00, image: '/Images/sunglasses.jpg' })}>
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
              <Card.Header>Necklace</Card.Header>
              <Card.Img src='/Images/necklace.jpg' alt='Necklace' />
              <Card.Body>
                <Card.Text>Price: $4.00</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="primary" onClick={() => handleAddToCart({ name: 'Necklace', price: 4.00, image: '/Images/necklace.jpg' })}>
                  Add to Cart
                </Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>Hair Beads</Card.Header>
              <Card.Img src='/Images/hairbeads.jpg' alt='Hair Beads' />
              <Card.Body>
                <Card.Text>Price: $5.00</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="primary" onClick={() => handleAddToCart({ name: 'Hair Beads', price: 5.00, image: '/Images/hairbeads.jpg' })}>
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
