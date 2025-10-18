import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Hero: React.FC = () => {
  return (
    <section  className="hero-section">
      <Container>
        <Row>
          <Col>
            <h1>Petrochemical Raw Materials</h1>
            <p>More than 25 years of successful experience in the field of import, export and production.</p>
            <Button variant="danger" href="#read-more">Read More</Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;