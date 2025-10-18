import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Services: React.FC = () => {
  return (
    <section  id="services"className="services-section">
      <Container>
        <h2>Our Products & Services</h2>
        <Row>
          <Col md={3}><img src="https://onyxcompany.ir/assets/IMG_2287-BM3eospK.jpeg" alt="Kaolin" className="img-fluid" /></Col>
          <Col md={3}><img src="https://onyxcompany.ir/assets/micronize-BAd9P8pn.jpeg" alt="Micronized Kaolin" className="img-fluid" /></Col>
          <Col md={3}><img src="https://onyxcompany.ir/assets/IMG_6523-D5GpIDHD.png" alt="Inflammable Masses" className="img-fluid" /></Col>
          <Col md={3}><img src="https://onyxcompany.ir/assets/kore-KdTZM4wp.jpeg" alt="Refractory Furnace" className="img-fluid" /></Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;