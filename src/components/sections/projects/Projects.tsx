import React from "react";
import "./Projects.css";
import { Container, Row, Col,Card, Button } from "react-bootstrap";

const Projects: React.FC = () => {
  const industries = [
    {
      title: "Cement Factory",
      text: "Supplying high-quality raw materials for cement production with long-lasting industrial partnerships.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTPn9uUYedje3eRLvYMHCaXMZlXVHJVgFYbYsc9fcnrHK5dAAGyGmTno-UXYvMha3mIFY&usqp=CAU",
    },
    {
      title: "Porcelain Dishes",
      text: "Delivering refined materials for porcelain and tableware industries with premium quality standards.",
      img: "https://images.pexels.com/photos/705190/coffee-cups-stacked-white-705190.jpeg",
    },
    {
      title: "Ceramic Products",
      text: "Providing advanced ceramic materials for decorative and industrial applications.",
      img: "https://biplans.ir/wp-content/uploads/2025/04/1-ceramic.webp",
    },
    {
      title: "Sanitary Ware",
      text: "Trusted supplier of durable raw materials for sanitary ware and bathroom fixtures.",
      img: "https://luxchini.com/wp-content/uploads/2024/11/%DA%A9%D8%A7%D8%B1%D8%AE%D8%A7%D9%86%D9%87-%D8%AA%D9%88%D9%84%DB%8C%D8%AF-%D8%AA%D9%88%D8%A7%D9%84%D8%AA-%D9%81%D8%B1%D9%86%DA%AF%DB%8C.jpg",
    },
  ];
  return (
    <section id="projects" className="projects-section py-5">
      <Container>
      <h2 className="text-center fw-bold mb-5">Industries We Serve</h2>
{industries.map((item, index) => (
  <Row key={index} className="mb-5">
    <Col
      lg={6}
      className={`mb-4 mb-lg-0 ${index % 2 === 1 ? "order-lg-2" : ""}`}
    >
      <Card className="shadow h-100 industry-card">
        <Card.Img
          variant="top"
          src={item.img}
          alt={item.title}
          className="industry-img"
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title>{item.title}</Card.Title>
          <Card.Text className="flex-grow-1">{item.text}</Card.Text>
          <Button variant="warning" href="#" className="mt-auto btn-custom">
            Read More
          </Button>
        </Card.Body>
      </Card>
    </Col>
    <Col lg={6} className="d-none d-lg-block"></Col>
  </Row>
))}




        <h2 className="fw-bold">Projects</h2>
        <p>Preparing the Onyx Industrial Refractory Project</p>
        <Row className="g-3">
  <Col md={4}>
    <img
      src="https://onyxcompany.ir/assets/p1-BeNN-TCa.jpeg"
      alt="Project 1"
      className="img-fluid"
    />
  </Col>
  <Col md={4}>
    <img
      src="https://onyxcompany.ir/assets/p2-DE_dMmW1.jpeg"
      alt="Project 2"
      className="img-fluid"
    />
  </Col>
  <Col md={4}>
    <img
      src="https://onyxcompany.ir/assets/p3-DrP3I4_f.jpeg"
      alt="Project 3"
      className="img-fluid"
    />
  </Col>
</Row>

      </Container>
    </section>
  );
};

export default Projects;
