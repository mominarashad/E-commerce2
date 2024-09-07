import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';

function Home() {
  const customStyle = {
    fontFamily: 'Arial, sans-serif',
    fontSize: '24px',
    fontWeight: 'bold',
    color: 'white', // Updated text color
  };

  return (
    <div className="mt-5 pt-5">
      <Container fluid>
        <Row className="align-items-center mt-30">
          <Col md={6} className="text-center text-md-start ml-2">
            <h1 style={customStyle}> {/* Use `style` for custom styles */}
              <Typewriter
                options={{
                  strings: ['Welcome to the official website of Al Fatah International Store,Discover Unmatched Quality and Style – Shop the Best Deals Today!'],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                }}
              />
            </h1>
          </Col>
          <Col md={6}>
            <Carousel style={{ marginTop: '95px' }}>
              <Carousel.Item interval={1000}>
                <img src='/Images/i1.jpg' className="d-block w-100" alt="carousel image" />
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <img src='/Images/i2.jpg' className="d-block w-100" alt="carousel image" />
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <img src='/Images/i3.jpeg' className="d-block w-100" alt="carousel image" />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
