import React from 'react'
import './Hero.css'
import Carousel from 'react-bootstrap/Carousel';
import Cosl1 from '../Cosl1/Cosl1'
import Cosl2 from '../Cosl2/Cosl2';
import Cosl3 from '../Cosl3/Cosl3';

function UncontrolledExample() {
  return (
    <Carousel id="Home" className='hhh'>
      <Carousel.Item>
        <Cosl1 text="First slide" />
        <Carousel.Caption>
          <h1>Welcome To MoM'S Kitchen</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Cosl2 text="Second slide" />
        <Carousel.Caption>
          <h1>Enjoy Candile Light</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Cosl3 text="Third slide" />
        <Carousel.Caption>
          <h3>The Best Infra........</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;