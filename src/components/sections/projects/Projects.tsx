import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Projects: React.FC = () => {
  return (
    <section className="projects-section">
      <Container>
        <h2>Industries We Serve</h2>
        <Row>
          <Col md={4}><img src="https://onyxcompany.ir/assets/p1-BeNN-TCa.jpeg" alt="Cement Factory" className="img-fluid" /></Col>
          <Col md={4}><img src="https://onyxcompany.ir/assets/p2-DE_dMmW1.jpeg" alt="Porcelain Dishes" className="img-fluid" /></Col>
          <Col md={4}><img src="https://onyxcompany.ir/assets/p3-DrP3I4_f.jpeg" alt="Sanitary Ware" className="img-fluid" /></Col>
        </Row>
        <h2>Projects</h2>
        <Row>
          <Col md={4}><img src="/assets/images/project1.jpg" alt="Project 1" className="img-fluid" /></Col>
          <Col md={4}><img src="/assets/images/project2.jpg" alt="Project 2" className="img-fluid" /></Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;