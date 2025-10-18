import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./About.css";

const About: React.FC = () => {
  return (
    <section id="about" className="about-section py-5 my-5">
      <Container>
        <Row className="align-items-center">
          {/* متن در موبایل اول نمایش داده شود */}
          <Col
            md={{ span: 7, order: 2 }}
            xs={{ span: 12, order: 1 }}
            className="text-md-start text-center my-4"
          >
            <h2 className="fw-bold mb-3">Onyx Industrial and Mining Group</h2>
            <p className="mb-4">
              Onyx company, with more than 25 years of successful experience and
              large investments in management and production, continues to
              provide high-quality services in the field of petrochemical raw
              materials and industrial products.
            </p>
            <Button variant="warning" className="warning" href="#learn-more">
              Learn More
            </Button>
          </Col>

          <Col
            md={{ span: 5, order: 1 }}
            xs={{ span: 12, order: 2 }}
            className="text-center mb-4 mb-md-0"
          >
            <img
              src="https://onyxcompany.ir/assets/navaei-DmrPUgXk.jpeg"
              alt="Profile"
              className="img-fluid rounded shadow about-image"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
