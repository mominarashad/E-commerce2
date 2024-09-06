// SportsEquipment.js
import React, { useContext } from 'react';
import { Card, Container, Row, Col, Button, Alert } from 'react-bootstrap';
import CartContext from './CartContext';

function SportsEquipment() {
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
          <Alert variant="success" style={{ marginTop: '100px' }}>
            {successMessage}
          </Alert>
        </Container>
      )}

      <Container style={{ marginTop: '110px' }}>
        <Row>
          <Col>
            <Card>
              <Card.Header>Football</Card.Header>
              <Card.Img src='/Images/u1.jpeg' alt='Football' />
              <Card.Body>
                <Card.Text>Price: $2.00</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button 
                  variant="primary" 
                  onClick={() => handleAddToCart({ name: 'Football', price: 2.00, image: '/Images/u1.jpeg' })}
                >
                  Add to Cart
                </Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>Soccer</Card.Header>
              <Card.Img src='/Images/u2.jpeg' alt='Soccer' />
              <Card.Body>
                <Card.Text>Price: $3.00</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button 
                  variant="primary" 
                  onClick={() => handleAddToCart({ name: 'Soccer', price: 3.00, image: '/Images/u2.jpeg' })}
                >
                  Add to Cart
                </Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>Cricket Kit</Card.Header>
              <Card.Img src='/Images/u3.jpeg' alt='Cricket Kit' />
              <Card.Body>
                <Card.Text>Price: $1.50</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button 
                  variant="primary" 
                  onClick={() => handleAddToCart({ name: 'Cricket Kit', price: 1.50, image: '/Images/u3.jpeg' })}
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
              <Card.Header>Racket</Card.Header>
              <Card.Img src='/Images/u4.jpeg' alt='Racket' />
              <Card.Body>
                <Card.Text>Price: $4.00</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button 
                  variant="primary" 
                  onClick={() => handleAddToCart({ name: 'Racket', price: 4.00, image: '/Images/u4.jpeg' })}
                >
                  Add to Cart
                </Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>Sport Set</Card.Header>
              <Card.Img src='/Images/u5.jpeg' alt='Sport Set' />
              <Card.Body>
                <Card.Text>Price: $5.00</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button 
                  variant="primary" 
                  onClick={() => handleAddToCart({ name: 'Sport Set', price: 5.00, image: '/Images/u5.jpeg' })}
                >
                  Add to Cart
                </Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>Sport Shoes</Card.Header>
              <Card.Img src='/Images/u6.jpeg' alt='Sport Shoes' />
              <Card.Body>
                <Card.Text>Price: $2.50</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button 
                  variant="primary" 
                  onClick={() => handleAddToCart({ name: 'Sport Shoes', price: 2.50, image: '/Images/u6.jpeg' })}
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
              <Card.Header>Tennis Set</Card.Header>
              <Card.Img src='/Images/u7.jpeg' alt='Tennis Set' />
              <Card.Body>
                <Card.Text>Price: $2.20</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button 
                  variant="primary" 
                  onClick={() => handleAddToCart({ name: 'Tennis Set', price: 2.20, image: '/Images/u7.jpeg' })}
                >
                  Add to Cart
                </Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>Sport Cycle</Card.Header>
              <Card.Img src='/Images/u8.jpeg' alt='Sport Cycle' />
              <Card.Body>
                <Card.Text>Price: $3.50</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button 
                  variant="primary" 
                  onClick={() => handleAddToCart({ name: 'Sport Cycle', price: 3.50, image: '/Images/u8.jpeg' })}
                >
                  Add to Cart
                </Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>Basketball</Card.Header>
              <Card.Img src='/Images/u9.jpeg' alt='Basketball' />
              <Card.Body>
                <Card.Text>Price: $1.80</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button 
                  variant="primary" 
                  onClick={() => handleAddToCart({ name: 'Basketball', price: 1.80, image: '/Images/u9.jpeg' })}
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

export default SportsEquipment;
