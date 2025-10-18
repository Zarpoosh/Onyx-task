import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const ImageSlider: React.FC = () => {
  return (
    <Carousel id='home' fade interval={3000} controls={true} indicators={true}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/705190/coffee-cups-stacked-white-705190.jpeg"
          alt="Slide 1"
          style={{ maxHeight: '500px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h3>Coffee Cups</h3>
          <p>Stacked coffee cups on white background</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://biplans.ir/wp-content/uploads/2025/04/1-ceramic.webp"
          alt="Slide 2"
          style={{ maxHeight: '500px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h3>Ceramic</h3>
          <p>Beautiful ceramic design</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTPn9uUYedje3eRLvYMHCaXMZlXVHJVgFYbYsc9fcnrHK5dAAGyGmTno-UXYvMha3mIFY&usqp=CAU"
          alt="Slide 3"
          style={{ maxHeight: '500px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h3>Design</h3>
          <p>Modern and clean design</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ImageSlider;
