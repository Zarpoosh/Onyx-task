import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaMoon, FaSun } from 'react-icons/fa'; // اضافه کردن آیکون‌ها

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const NavScrollExample: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <Navbar
      expand="lg"
      className={`sticky-top shadow-sm ${darkMode ? 'bg-dark navbar-dark' : 'bg-light navbar-light'}`}
    >
      <Container fluid>
        <Navbar.Brand href="#">Onyx</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
            <NavDropdown title="More" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#projects">Projects</NavDropdown.Item>
              <NavDropdown.Item href="#services">Services</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#products">Products</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex align-items-center">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" className="me-2">Search</Button>
            <Button
              variant={darkMode ? 'light' : 'dark'}
              onClick={toggleDarkMode}
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavScrollExample;
