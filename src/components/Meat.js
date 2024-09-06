import React, { useContext, useState } from 'react';
import { Card, Container, Row, Col, Button, Alert } from 'react-bootstrap';
import CartContext from './CartContext'; // Adjust the path if necessary

function Meat() {
  const { addToCart } = useContext(CartContext);
  const [successMessage, setSuccessMessage] = useState('');

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

      <Container style={{ marginTop: '123px', color: 'red' }}>
        <h1>The prices are mentioned according to 1kg of items</h1>
      </Container>

      <Container style={{ marginTop: '20px' }}>
        <Row>
          <Col>
            <Card>
              <Card.Header>Mutton</Card.Header>
              <Card.Img src='/Images/m1.jpg' alt='Mutton' />
              <Card.Body>
                <Card.Text>Price: $2.00</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button 
                  variant="primary" 
                  onClick={() => handleAddToCart({ name: 'Mutton', price: 2.00, image: '/Images/m1.jpg' })}
                >
                  Add to Cart
                </Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>Beef</Card.Header>
              <Card.Img src='/Images/m2.jpg' alt='Beef' />
              <Card.Body>
                <Card.Text>Price: $3.00</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button 
                  variant="primary" 
                  onClick={() => handleAddToCart({ name: 'Beef', price: 3.00, image: '/Images/m2.jpg' })}
                >
                  Add to Cart
                </Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>Crab</Card.Header>
              <Card.Img src='/Images/m3.jpg' alt='Crab' />
              <Card.Body>
                <Card.Text>Price: $1.50</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button 
                  variant="primary" 
                  onClick={() => handleAddToCart({ name: 'Crab', price: 1.50, image: '/Images/m3.jpg' })}
                >
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
              <Card.Header>Bull Meat</Card.Header>
              <Card.Img src='/Images/m4.jpg' alt='Bull Meat' />
              <Card.Body>
                <Card.Text>Price: $4.00</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button 
                  variant="primary" 
                  onClick={() => handleAddToCart({ name: 'Bull Meat', price: 4.00, image: '/Images/m4.jpg' })}
                >
                  Add to Cart
                </Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>Fish</Card.Header>
              <Card.Img src='/Images/m5.jpg' alt='Fish' />
              <Card.Body>
                <Card.Text>Price: $5.00</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button 
                  variant="primary" 
                  onClick={() => handleAddToCart({ name: 'Fish', price: 5.00, image: '/Images/m5.jpg' })}
                >
                  Add to Cart
                </Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>BBQ Piece</Card.Header>
              <Card.Img src='/Images/m6.jpg' alt='BBQ Piece' />
              <Card.Body>
                <Card.Text>Price: $2.50</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button 
                  variant="primary" 
                  onClick={() => handleAddToCart({ name: 'BBQ Piece', price: 2.50, image: '/Images/m6.jpg' })}
                >
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

export default Meat;
