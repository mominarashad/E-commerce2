// Vegetable.js
import React, { useContext } from 'react';
import { Card, Container, Row, Col, Button, Alert } from 'react-bootstrap';
import CartContext from './CartContext';

function Vegetable() {
  const { addToCart } = useContext(CartContext);
  const [successMessage, setSuccessMessage] = React.useState('');

  const handleAddToCart = (item) => {
    addToCart(item);
    setSuccessMessage(`Added ${item.name} to cart successfully!`);
    setTimeout(() => setSuccessMessage(''), 3000); // Clear message after 3 seconds
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

      <Container style={{ marginTop: '123px' }}>
        <h1>The prices are mentioned according to 1kg of items</h1>
      </Container>
      
      <Container style={{ marginTop: '20px' }}>
        <Row>
          <Col>
            <Card>
              <Card.Header>Potato</Card.Header>
              <Card.Img src='/Images/potato.jpg' alt='Potato' />
              <Card.Body>
                <Card.Text>Price: $2.00</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="primary" onClick={() => handleAddToCart({ name: 'Potato', price: 2.00, image: '/Images/potato.jpg' })}>
                  Add to Cart
                </Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>Tomato</Card.Header>
              <Card.Img src='/Images/tomato.jpg' alt='Tomato' />
              <Card.Body>
                <Card.Text>Price: $3.00</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="primary" onClick={() => handleAddToCart({ name: 'Tomato', price: 3.00, image: '/Images/tomato.jpg' })}>
                  Add to Cart
                </Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>Spinach</Card.Header>
              <Card.Img src='/Images/spinash.jpg' alt='Spinach' />
              <Card.Body>
                <Card.Text>Price: $1.50</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="primary" onClick={() => handleAddToCart({ name: 'Spinach', price: 1.50, image: '/Images/spinash.jpg' })}>
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
              <Card.Header>Ginger</Card.Header>
              <Card.Img src='/Images/ginger.jpg' alt='Ginger' />
              <Card.Body>
                <Card.Text>Price: $4.00</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="primary" onClick={() => handleAddToCart({ name: 'Ginger', price: 4.00, image: '/Images/ginger.jpg' })}>
                  Add to Cart
                </Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>Garlic</Card.Header>
              <Card.Img src='/Images/garlic.jpg' alt='Garlic' />
              <Card.Body>
                <Card.Text>Price: $5.00</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="primary" onClick={() => handleAddToCart({ name: 'Garlic', price: 5.00, image: '/Images/garlic.jpg' })}>
                  Add to Cart
                </Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>Peas</Card.Header>
              <Card.Img src='/Images/peas.jpg' alt='Peas' />
              <Card.Body>
                <Card.Text>Price: $2.50</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="primary" onClick={() => handleAddToCart({ name: 'Peas', price: 2.50, image: '/Images/peas.jpg' })}>
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
              <Card.Header>Onion</Card.Header>
              <Card.Img src='/Images/onion.jpg' alt='Onion' />
              <Card.Body>
                <Card.Text>Price: $2.20</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="primary" onClick={() => handleAddToCart({ name: 'Onion', price: 2.20, image: '/Images/onion.jpg' })}>
                  Add to Cart
                </Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>Capsicum</Card.Header>
              <Card.Img src='/Images/capsicum.jpg' alt='Capsicum' />
              <Card.Body>
                <Card.Text>Price: $3.50</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="primary" onClick={() => handleAddToCart({ name: 'Capsicum', price: 3.50, image: '/Images/capsicum.jpg' })}>
                  Add to Cart
                </Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>Cabbage</Card.Header>
              <Card.Img src='/Images/cabbage.jpg' alt='Cabbage' />
              <Card.Body>
                <Card.Text>Price: $1.80</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="primary" onClick={() => handleAddToCart({ name: 'Cabbage', price: 1.80, image: '/Images/cabbage.jpg' })}>
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
