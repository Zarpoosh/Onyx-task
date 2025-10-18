import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaMoon, FaSun } from 'react-icons/fa';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const NavScrollExample: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Navbar
      expand="lg"
      className={`sticky-top shadow-sm ${darkMode ? 'bg-dark navbar-dark' : 'bg-light navbar-light'}`}
    >
      <Container fluid>
        <Navbar.Brand href="#">Onyx</Navbar.Brand>

        <div className="d-flex align-items-center ms-auto">
          {/* دکمه دارک مود */}
          <Button
            variant={darkMode ? 'light' : 'dark'}
            onClick={toggleDarkMode}
            className="me-2"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </Button>

          {/* Toggle با آیکون شرطی */}
          <Navbar.Toggle
            aria-controls="navbarScroll"
            onClick={handleToggle}
          >
            {menuOpen ? '×' : '☰'}
          </Navbar.Toggle>
        </div>

        <Navbar.Collapse id="navbarScroll" onClick={() => setMenuOpen(false)}>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#products">Products</Nav.Link>
            {/* <NavDropdown title="More" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#projects">Projects</NavDropdown.Item>
              <NavDropdown.Item href="#services">Services</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#products">Products</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Form className="d-flex align-items-center">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" className="me-2">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavScrollExample;
