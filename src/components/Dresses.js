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
    }, 8000); // Clear the message after 3 seconds
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
      
      <Container style={{ marginTop: '120px' }}>
        <Row>
          <Col>
            <Card>
              <Card.Header>Lawn Embroidded 3 piece</Card.Header>
              <Card.Img src='/Images/d1.jpeg' />
              <Card.Body>
                <Card.Text>Price: $2.00</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="primary" onClick={() => handleAddToCart({ name: 'Lawn Embroidded 3 piece', price: 2.00, image: '/Images/d1.jpeg' })}>
                  Add to Cart
                </Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>Casual Wear Top & Trouser</Card.Header>
              <Card.Img src='/Images/d2.jpeg' />
              <Card.Body>
                <Card.Text>Price: $3.00</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="primary" onClick={() => handleAddToCart({ name: 'Casual Wear Top & Trouser', price: 3.00, image: '/Images/d2.jpeg' })}>
                  Add to Cart
                </Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>Orange Heaven Linen 3 piece</Card.Header>
              <Card.Img src='/Images/r3.jpg' />
              <Card.Body>
                <Card.Text>Price: $1.50</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="primary" onClick={() => handleAddToCart({ name: 'Orange Heaven Linen 3 piece', price: 1.50, image: '/Images/r3.jpg' })}>
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
              <Card.Header>Sky fall Kurta</Card.Header>
              <Card.Img src='/Images/r4.jpg' />
              <Card.Body>
                <Card.Text>Price: $4.00</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="primary" onClick={() => handleAddToCart({ name: 'Sky fall Kurta', price: 4.00, image: '/Images/r4.jpg' })}>
                  Add to Cart
                </Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>Royal Blue Shirt</Card.Header>
              <Card.Img src='/Images/r5.jpg' />
              <Card.Body>
                <Card.Text>Price: $5.00</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="primary" onClick={() => handleAddToCart({ name: 'Royal Blue Shirt', price: 5.00, image: '/Images/r5.jpg' })}>
                  Add to Cart
                </Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>White Shalwar Qameez Premium Quality Special Collection Eid</Card.Header>
              <Card.Img src='/Images/r6.jpg' />
              <Card.Body>
                <Card.Text>Price: $2.50</Card.Text>
              </Card.Body>
              <Card.Text style={{color:"red"}}>
                This is a limited Edition Price. Add this to your cart to avail this opportunity
              </Card.Text>
              <Card.Footer>
                <Button variant="primary" onClick={() => handleAddToCart({ name: 'White Shalwar Qameez Premium Quality Special Collection Eid', price: 2.50, image: '/Images/r6.jpg' })}>
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
              <Card.Header>Kurta Pajama</Card.Header>
              <Card.Img src='/Images/r7.jpg' />
              <Card.Body>
                <Card.Text>Price: $2.20</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="primary" onClick={() => handleAddToCart({ name: 'Kurta Pajama', price: 2.20, image: '/Images/r7.jpg' })}>
                  Add to Cart
                </Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>Waist Coat & Shalwar Qameez</Card.Header>
              <Card.Img src='/Images/r8.jpg' />
              <Card.Body>
                <Card.Text>Price: $3.50</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="primary" onClick={() => handleAddToCart({ name: 'Waist Coat & Shalwar Qameez', price: 3.50, image: '/Images/r8.jpg' })}>
                  Add to Cart
                </Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>Light Gray Waist Coat</Card.Header>
              <Card.Img src='/Images/r9.jpg' />
              <Card.Body>
                <Card.Text>Price: $1.80</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="primary" onClick={() => handleAddToCart({ name: 'Light Gray Waist Coat', price: 1.80, image: '/Images/r9.jpg' })}>
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
