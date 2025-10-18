import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import Img1 from 'https://onyxcompany.ir/assets/IMG_2287-BM3eospK.jpeg';


const Products: React.FC = () => {
  return (
    <section className="products-section">
      <Container>
        <h2>Products</h2>
        <Row>
          <Col md={4}><img src="https://onyxcompany.ir/assets/NN22-D46a2zYr.jpeg" alt="Industrial Refractory" className="img-fluid" /></Col>
          <Col md={4}><img src="https://onyxcompany.ir/assets/micronize-BAd9P8pn.jpeg" alt="Micronized Kaolin" className="img-fluid" /></Col>
          <Col md={4}><img src="https://onyxcompany.ir/assets/nodel-C5FKqEUw.jpeg" alt="Nodel Kaolin" className="img-fluid" /></Col>
          <Col md={4}><img src="https://onyxcompany.ir/assets/podrdaneh-JQOkxBm2.jpeg" alt="Powder Kaolin" className="img-fluid" /></Col>
        </Row>
      </Container>
    </section>
  );
};

export default Products;