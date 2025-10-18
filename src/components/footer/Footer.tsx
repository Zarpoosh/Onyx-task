import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer: React.FC = () => {
  return (
    <footer id='about' className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Onyx</h5>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li ><a className='text-warning' href="#home">Home</a></li>
              <li ><a className='text-warning' href="#services">Services</a></li>
              <li ><a className='text-warning' href="#contact">Contact</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Connections</h5>
            <ul className="list-unstyled">
              <li ><a className='text-warning' href="#email">email@onyxcompany.com</a></li>
              <li ><a className='text-warning' href="#linkedin">linkedin.com/onyxcompany</a></li>
              <li ><a className='text-warning' href="#facebook">facebook.com/onyxcompany</a></li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-3">
            <p>&copy; 2023 Onyx. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;