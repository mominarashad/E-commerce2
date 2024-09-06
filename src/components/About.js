import React from 'react';
import './About.css'; // Make sure to create this CSS file for additional styling

function About() {
  return (
    <div className='container mt-5 pt-9'>
      <h1 className='text-center mb-4'>About Us</h1>
      <p className='lead text-center mb-5'>
        Welcome to <strong>[Al Fatah International Store]</strong>, where your shopping experience is our top priority!
      </p>

      <div className='row'>
        <div className='col-lg-8 offset-lg-2'>
          <h2>Our Mission</h2>
          <p>
            At <strong>[Al Fatah International Store]</strong>, we believe in providing our customers with a seamless shopping experience, exceptional products, and outstanding service. Our mission is to offer high-quality products at competitive prices, ensuring you find exactly what you’re looking for with ease.
          </p>

          <h2>Our Story</h2>
          <p>
            Founded in <strong>1987</strong> by <strong>Mr Aliyan Butt</strong> , <strong>Al Fatah International Store</strong> started with a simple idea: to make online shopping more enjoyable and accessible. From our humble beginnings as a small [type of store] to becoming a leading e-commerce destination, we have continuously evolved to meet our customers’ needs.
          </p>

          <h2>What Sets Us Apart</h2>
          <ul>
            <li><strong>Curated Selection:</strong> We handpick each item in our inventory to ensure top-notch quality and style.</li>
            <li><strong>Customer-Centric Service:</strong> Our dedicated support team is here to assist you every step of the way.</li>
            <li><strong>Fast Shipping:</strong> Enjoy quick and reliable shipping on all orders, with tracking available for your convenience.</li>
          </ul>

          <h2>Meet Our Team</h2>
          <p>
            Our passionate team is dedicated to delivering excellence in every aspect of our business. From our customer service representatives to our product experts, each member plays a crucial role in ensuring you have the best shopping experience possible.
          </p>

          <h2>Our Commitment</h2>
          <p>
            We are committed to your satisfaction. Whether you’re looking for the latest trends or everyday essentials, we strive to provide an effortless shopping experience and top-quality products.
          </p>

          <h2>Get in Touch</h2>
          <p>
            Have questions or need assistance? Feel free to contact us at <a href='mailto:[email address]'>[alfatah@gmail.com]</a> or <a href='tel:[phone number]'>[+92 310 4668990]</a>. We’re here to help!
          </p>

          <p className='text-center'>
            Thank you for choosing <strong>Al Fatah International Store</strong>. We look forward to serving you!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
