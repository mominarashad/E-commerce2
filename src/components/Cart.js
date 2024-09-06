import React, { useContext } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import CartContext from './CartContext';

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <Container style={{ marginTop: '123px' }}>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <Row>
          {cart.map((item, index) => (
            <Col key={index}>
              <Card>
                <Card.Img variant="top" src={item.image} style={{width:'50px', height:'50px' ,alignContent:'center'}} /> {/* Display item image */}
                <Card.Header>{item.name}</Card.Header>
                <Card.Body>
                  <Card.Text>Price: ${item.price}</Card.Text>
                  <Button 
                    variant="danger" 
                    onClick={() => removeFromCart(index)}
                  >
                    Remove from Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}

export default Cart;
