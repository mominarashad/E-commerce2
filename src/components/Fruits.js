import React, { useContext, useState } from 'react';
import { Card, Container, Row, Col, Button, Alert } from 'react-bootstrap';
import CartContext from './CartContext';

function Fruit() {
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
              <Card.Header>Apple</Card.Header>
              <Card.Img src='/Images/apple.jpg' />
              <Card.Body>
                <Card.Text>Price: $2.00</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button 
                  variant="primary" 
                  onClick={() => handleAddToCart({ name: 'Apple', price: 2.00, image: '/Images/apple.jpg' })}
                >
                  Add to Cart
                </Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>Mango</Card.Header>
              <Card.Img src='/Images/mango.jpg' />
              <Card.Body>
                <Card.Text>Price: $3.00</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button 
                  variant="primary" 
                  onClick={() => handleAddToCart({ name: 'Mango', price: 3.00, image: '/Images/mango.jpg' })}
                >
                  Add to Cart
                </Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>Apricot</Card.Header>
              <Card.Img src='/Images/appricot.jpg' />
              <Card.Body>
                <Card.Text>Price: $1.50</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button 
                  variant="primary" 
                  onClick={() => handleAddToCart({ name: 'Apricot', price: 1.50, image: '/Images/appricot.jpg' })}
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
              <Card.Header>Banana</Card.Header>
              <Card.Img src='/Images/banana.jpg' />
              <Card.Body>
                <Card.Text>Price: $4.00</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button 
                  variant="primary" 
                  onClick={() => handleAddToCart({ name: 'Banana', price: 4.00, image: '/Images/banana.jpg' })}
                >
                  Add to Cart
                </Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>Melon</Card.Header>
              <Card.Img src='/Images/melon.jpg' />
              <Card.Body>
                <Card.Text>Price: $5.00</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button 
                  variant="primary" 
                  onClick={() => handleAddToCart({ name: 'Melon', price: 5.00, image: '/Images/melon.jpg' })}
                >
                  Add to Cart
                </Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>WaterMelon</Card.Header>
              <Card.Img src='/Images/watermelon.jpg' />
              <Card.Body>
                <Card.Text>Price: $2.50</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button 
                  variant="primary" 
                  onClick={() => handleAddToCart({ name: 'WaterMelon', price: 2.50, image: '/Images/watermelon.jpg' })}
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
              <Card.Header>Orange</Card.Header>
              <Card.Img src='/Images/orange.jpg' />
              <Card.Body>
                <Card.Text>Price: $2.20</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button 
                  variant="primary" 
                  onClick={() => handleAddToCart({ name: 'Orange', price: 2.20, image: '/Images/orange.jpg' })}
                >
                  Add to Cart
                </Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>Strawberry</Card.Header>
              <Card.Img src='/Images/strawberry.jpg' />
              <Card.Body>
                <Card.Text>Price: $3.50</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button 
                  variant="primary" 
                  onClick={() => handleAddToCart({ name: 'Strawberry', price: 3.50, image: '/Images/strawberry.jpg' })}
                >
                  Add to Cart
                </Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>Peach</Card.Header>
              <Card.Img src='/Images/peach.jpg' />
              <Card.Body>
                <Card.Text>Price: $1.80</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button 
                  variant="primary" 
                  onClick={() => handleAddToCart({ name: 'Peach', price: 1.80, image: '/Images/peach.jpg' })}
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

export default Fruit;
