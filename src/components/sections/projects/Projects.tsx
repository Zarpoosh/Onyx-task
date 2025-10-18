import React from 'react';
import "./Projects.css"
import { Container, Row, Col } from 'react-bootstrap';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects-section py-5">
      <Container>
        <h2 className='fw-bold'>Industries We Serve</h2>
        <Row>
          <Col md={4}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTPn9uUYedje3eRLvYMHCaXMZlXVHJVgFYbYsc9fcnrHK5dAAGyGmTno-UXYvMha3mIFY&usqp=CAU" alt="Cement Factory" className="img-fluid" /></Col>
          <Col md={4}><img src="https://images.pexels.com/photos/705190/coffee-cups-stacked-white-705190.jpeg" alt="Porcelain Dishes" className="img-fluid" /></Col>
          <Col md={4}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiLJpqUUXMkNcPnWx7XLqST1TBLAcJaoR76Q&shttps://biplans.ir/wp-content/uploads/2025/04/1-ceramic.webp" alt="Sanitary Ware" className="img-fluid" /></Col>
          <Col md={4}><img src="https://luxchini.com/wp-content/uploads/2024/11/%DA%A9%D8%A7%D8%B1%D8%AE%D8%A7%D9%86%D9%87-%D8%AA%D9%88%D9%84%DB%8C%D8%AF-%D8%AA%D9%88%D8%A7%D9%84%D8%AA-%D9%81%D8%B1%D9%86%DA%AF%DB%8C.jpg" alt="Sanitary Ware" className="img-fluid" /></Col>
        </Row>
        <h2 className='fw-bold'>Projects</h2>
        <Row>
          <Col md={4}><img src="https://onyxcompany.ir/assets/p1-BeNN-TCa.jpeg" alt="Project 1" className="img-fluid" /></Col>
          <Col md={4}><img src="https://onyxcompany.ir/assets/p2-DE_dMmW1.jpeg" alt="Project 2" className="img-fluid" /></Col>
          <Col md={4}><img src="https://onyxcompany.ir/assets/p3-DrP3I4_f.jpeg" alt="Project 2" className="img-fluid" /></Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;