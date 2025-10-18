import React from 'react';
import { Container } from 'react-bootstrap';
import './Services.css';

const Services: React.FC = () => {
  const images = [
    "https://onyxcompany.ir/assets/IMG_2287-BM3eospK.jpeg",
    "https://onyxcompany.ir/assets/micronize-BAd9P8pn.jpeg",
    "https://onyxcompany.ir/assets/IMG_6523-D5GpIDHD.png",
    "https://onyxcompany.ir/assets/kore-KdTZM4wp.jpeg",
  ];

  // duplicate برای اسکرول seamless
  const allImages = [...images, ...images];

  return (
    <section id="services" className="services-section py-5">
      <Container>
        <h2 className='fw-bold text-center mb-4'>Our Products & Services</h2>
        <div className="slider-wrapper">
          <div className="slider-track">
            {allImages.map((src, index) => (
              <div className="slider-item" key={index}>
                <img src={src} alt={`Service ${index}`} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Services;
