import React, { useContext, useState } from 'react';
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
    }, 3000); // Clear the message after 3 seconds
  };

  return (
    <>
      <Container style={{ marginTop: '123px' }}>
        <h1>The prices are mentioned according to 1kg of items</h1>
      </Container>

      {successMessage && (
        <Container>
          <Alert variant="success" style={{ marginTop: '20px' }}>
            {successMessage}
          </Alert>
        </Container>
      )}

      <Container style={{ marginTop: '20px' }}>
        <Row>
          <Col>
            <Card>
              <Card.Header>Floral Set</Card.Header>
              <Card.Img src='/Images/t1.jpeg' />
              <Card.Body>
                <Card.Text>Price: $2.00</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="primary" onClick={() => handleAddToCart({ name: 'Floral Set', price: 2.00, image: '/Images/t1.jpeg' })}>
                  Add to Cart
                </Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>Jasmine Set</Card.Header>
              <Card.Img src='/Images/t2.jpeg' />
              <Card.Body>
                <Card.Text>Price: $3.00</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="primary" onClick={() => handleAddToCart({ name: 'Jasmine Set', price: 3.00, image: '/Images/t2.jpeg' })}>
                  Add to Cart
                </Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>Bounty Set</Card.Header>
              <Card.Img src='/Images/t3.jpeg' />
              <Card.Body>
                <Card.Text>Price: $1.50</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="primary" onClick={() => handleAddToCart({ name: 'Bounty Set', price: 1.50, image: '/Images/t3.jpeg' })}>
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
              <Card.Header>Water Fall Set</Card.Header>
              <Card.Img src='/Images/t4.jpeg' />
              <Card.Body>
                <Card.Text>Price: $4.00</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="primary" onClick={() => handleAddToCart({ name: 'Water Fall Set', price: 4.00, image: '/Images/t4.jpeg' })}>
                  Add to Cart
                </Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>Ellegance Set</Card.Header>
              <Card.Img src='/Images/t5.jpeg' />
              <Card.Body>
                <Card.Text>Price: $5.00</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="primary" onClick={() => handleAddToCart({ name: 'Ellegance Set', price: 5.00, image: '/Images/t5.jpeg' })}>
                  Add to Cart
                </Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>Rose Set</Card.Header>
              <Card.Img src='/Images/t6.jpeg' />
              <Card.Body>
                <Card.Text>Price: $2.50</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="primary" onClick={() => handleAddToCart({ name: 'Rose Set', price: 2.50, image: '/Images/t6.jpeg' })}>
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
              <Card.Header>Crock Set</Card.Header>
              <Card.Img src='/Images/t7.jpeg' />
              <Card.Body>
                <Card.Text>Price: $2.20</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="primary" onClick={() => handleAddToCart({ name: 'Crock Set', price: 2.20, image: '/Images/t7.jpeg' })}>
                  Add to Cart
                </Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>Elegancia Set</Card.Header>
              <Card.Img src='/Images/t8.jpeg' />
              <Card.Body>
                <Card.Text>Price: $3.50</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="primary" onClick={() => handleAddToCart({ name: 'Elegancia Set', price: 3.50, image: '/Images/t8.jpeg' })}>
                  Add to Cart
                </Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>Peach Set</Card.Header>
              <Card.Img src='/Images/t9.jpeg' />
              <Card.Body>
                <Card.Text>Price: $1.80</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="primary" onClick={() => handleAddToCart({ name: 'Peach Set', price: 1.80, image: '/Images/t9.jpeg' })}>
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
