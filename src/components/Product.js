import React from 'react';
import { Card, CardFooter, CardHeader, Col, Container, Row } from 'react-bootstrap';
//import Header from './Header';  // Importing the Header component
import './Product.css';  // Assuming you'll have some custom styles
import { Link } from 'react-router-dom';
//import Vegetable from './Vegetable';
function CardBs() {
  return (
    <>
      {/* <Header />  Calling the Header component */}
      
      <Container style={{ marginTop: '130px' }}>
        <Row>
          <Col>
            <Card className='text-center'>
              <CardHeader>Vegetables</CardHeader>
              <Card.Img src='Images/th.jpeg' className='card-img-custom' />
              <Card.Body>
                <Card.Title>Fresh and Juicy Vegetables</Card.Title>
                <Card.Text style={{ fontWeight:'medium' }}>
                  Fresh and organic vegetables delivered to your doorstep, ensuring the best quality for your kitchen.
                </Card.Text>
              </Card.Body>
              <CardFooter className='card-footer-custom' style={{hover:'blue'}}>
              <Link to='/products/vegetables'>Shop Now</Link>
              </CardFooter>
            </Card>
          </Col>
          <Col>
            <Card className='text-center'>
              <CardHeader>Crockery Items</CardHeader>
              <Card.Img src='Images/p2.jpeg' className='card-img-custom' />
              <Card.Body>
                <Card.Title>Imported Classy Crockery</Card.Title>
                <Card.Text style={{ fontWeight:'medium' }}>
                  Explore our exquisite collection of crockery items, perfect for elevating every meal with elegance and style.
                </Card.Text>
              </Card.Body>
              <CardFooter className='card-footer-custom'>
              <Link to='/products/crockery'>Shop Now</Link>
              </CardFooter>
            </Card>
          </Col>
          <Col>
            <Card className='text-center'>
              <CardHeader>Sport Items</CardHeader>
              <Card.Img src='Images/p3.jpeg' className='card-img-custom' />
              <Card.Body>
                <Card.Title>All Brand Sport Accessories</Card.Title>
                <Card.Text style={{ fontWeight:'medium' }}>
                  Shop top-quality sports equipment and gear to elevate your game and achieve peak performance.
                </Card.Text>
              </Card.Body>
              <CardFooter className='card-footer-custom'>
              <Link to='/products/sports'>Shop Now</Link>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container style={{ marginTop: '100px' }}>
        <Row>
          <Col>
            <Card className='text-center'>
              <CardHeader>Fruits</CardHeader>
              <Card.Img src='Images/p4.jpeg' className='card-img-custom' />
              <Card.Body>
                <Card.Title>Fresh and Juicy Fruits</Card.Title>
                <Card.Text style={{ fontWeight:'medium' }}>
                  Fresh and organic fruits delivered to your doorstep, ensuring the best quality for your kitchen.
                </Card.Text>
              </Card.Body>
              <CardFooter className='card-footer-custom'>
              <Link to='/products/fruits'>Shop Now</Link>
              </CardFooter>
            </Card>
          </Col>
          <Col>
            <Card className='text-center'>
              <CardHeader>Men and Women DressWear</CardHeader>
              <Card.Img src='Images/p5.jpeg' className='card-img-custom' />
              <Card.Body>
                <Card.Title>All Brand Dresses </Card.Title>
                <Card.Text style={{ fontWeight:'medium' }}>
                Discover our latest collection of stylish dresses that blend elegance with comfort, perfect for every occasion
                </Card.Text>
              </Card.Body>
              <CardFooter className='card-footer-custom'>
              <Link to='/products/dresses'>Shop Now</Link>
              </CardFooter>
            </Card>
          </Col>
          <Col>
            <Card className='text-center'>
              <CardHeader>Sun Glasses</CardHeader>
              <Card.Img src='Images/p6.jpeg' className='card-img-custom' />
              <Card.Body>
                <Card.Title>All Kind of Accessories</Card.Title>
                <Card.Text style={{ fontWeight:'medium' }}>
                Discover stylish and protective sunglasses, perfect for every occasion under the sun
                </Card.Text>
              </Card.Body>
              <CardFooter className='card-footer-custom'>
              <Link to='/products/accessories'>Shop Now</Link>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container style={{ marginTop: '100px' }}>
        <Row>
          <Col>
            <Card className='text-center'>
              <CardHeader>Meat</CardHeader>
              <Card.Img src='Images/p7.jpeg' className='card-img-custom' />
              <Card.Body>
                <Card.Title>All kind of Meat</Card.Title>
                <Card.Text style={{ fontWeight:'medium' }}>
                Premium quality, farm-fresh meats delivered to your door for the ultimate culinary experience
                </Card.Text>
              </Card.Body>
              <CardFooter className='card-footer-custom'>
              <Link to='/products/meat'>Shop Now</Link>
              </CardFooter>
            </Card>
          </Col>
          <Col>
            <Card className='text-center'>
              <CardHeader>Men and Women FootWear</CardHeader>
              <Card.Img src='Images/p8.jpeg' className='card-img-custom' />
              <Card.Body>
                <Card.Title>All Brand FootWear </Card.Title>
                <Card.Text style={{ fontWeight:'medium' }}>
                Discover our latest collection of stylish footwear that blend elegance with comfort, perfect for every occasion
                </Card.Text>
              </Card.Body>
              <CardFooter className='card-footer-custom'>
              <Link to='/products/shoes'>Shop Now</Link>
              </CardFooter>
            </Card>
          </Col>
          <Col>
            <Card className='text-center'>
              <CardHeader>Women Accessories</CardHeader>
              <Card.Img src='Images/p9.jpeg' className='card-img-custom' />
              <Card.Body>
                <Card.Title>All Kind Women of Jeweleries</Card.Title>
                <Card.Text style={{ fontWeight:'medium' }}>
                Discover our exquisite jewelry collection, where elegance meets craftsmanship 
                </Card.Text>
              </Card.Body>
              <CardFooter className='card-footer-custom'>
              <Link to='/products/jewel'>Shop Now</Link>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CardBs;


