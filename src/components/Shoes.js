import React, { useContext } from 'react';
import { Card, Container, Row, Col, Button, Alert } from 'react-bootstrap';
import CartContext from './CartContext';

function Shoes() {
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

      <Container style={{ marginTop: '125px' }}>
        <Row>
          <Col>
            <Card>
              <Card.Header>Casual Wear Chappal</Card.Header>
              <Card.Img src='/Images/s11.jpg' alt='Casual Wear Chappal' />
              <Card.Body>
                <Card.Text>Price: $2.00</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button 
                  variant="primary" 
                  onClick={() => handleAddToCart({ name: 'Casual Wear Chappal', price: 2.00, image: '/Images/s11.jpg' })}
                >
                  Add to Cart
                </Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>Casual Pink Sandal</Card.Header>
              <Card.Img src='/Images/s12.jpg' alt='Casual Pink Sandal' />
              <Card.Body>
                <Card.Text>Price: $3.00</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button 
                  variant="primary" 
                  onClick={() => handleAddToCart({ name: 'Casual Pink Sandal', price: 3.00, image: '/Images/s12.jpg' })}
                >
                  Add to Cart
                </Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>Wedge Heel Shoes</Card.Header>
              <Card.Img src='/Images/s13.jpg' alt='Wedge Heel Shoes' />
              <Card.Body>
                <Card.Text>Price: $1.50</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button 
                  variant="primary" 
                  onClick={() => handleAddToCart({ name: 'Wedge Heel Shoes', price: 1.50, image: '/Images/s13.jpg' })}
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
              <Card.Header>Silver Festive Wear</Card.Header>
              <Card.Img src='/Images/s14.jpg' alt='Silver Festive Wear' />
              <Card.Body>
                <Card.Text>Price: $4.00</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button 
                  variant="primary" 
                  onClick={() => handleAddToCart({ name: 'Silver Festive Wear', price: 4.00, image: '/Images/s14.jpg' })}
                >
                  Add to Cart
                </Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>Men's Black Chappal</Card.Header>
              <Card.Img src='/Images/s15.jpg' />
              <Card.Body>
                <Card.Text>Price: $5.00</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button 
                  variant="primary" 
                  onClick={() => handleAddToCart({ name: 'Men\'s Black Chappal', price: 5.00, image: '/Images/s15.jpg' })}
                >
                  Add to Cart
                </Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>Black Slipper</Card.Header>
              <Card.Img src='/Images/s16.jpg' alt='Black Slipper' />
              <Card.Body>
                <Card.Text>Price: $2.50</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button 
                  variant="primary" 
                  onClick={() => handleAddToCart({ name: 'Black Slipper', price: 2.50, image: '/Images/s16.jpg' })}
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

export default Shoes;
