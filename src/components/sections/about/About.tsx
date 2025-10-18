import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About: React.FC = () => {
  return (
    <section id="contact" className="about-section">
      <Container>
        <Row>
          <Col md={8}>
            <h2>Onyx Industrial and Mining Group</h2>
            <p>Onyx company, more than 25 years of successful experience and large investments in scientific capabilities of management, production...</p>
            <a href="#learn-more">Learn More</a>
          </Col>
          <Col md={4}>
            <img src="https://onyxcompany.ir/assets/navaei-DmrPUgXk.jpeg" alt="Profile" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;