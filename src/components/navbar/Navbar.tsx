import React, { useState, useRef, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const NavScrollExample: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null); 

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  //close the menue when click out of the menu
  useEffect(() => {

    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Navbar
    id='home'
      expand="lg"
      className={`sticky-top shadow-sm ${darkMode ? 'bg-dark navbar-dark' : 'bg-light navbar-light'}`}
      ref={navRef} 
    >
      <Container fluid>
        <Navbar.Brand href="#">Onyx</Navbar.Brand>

        <div className="d-flex align-items-center ms-auto">
          <Button
            variant={darkMode ? 'light' : 'dark'}
            onClick={toggleDarkMode}
            className="me-2"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </Button>

          <Navbar.Toggle aria-controls="navbarScroll" onClick={handleToggle}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </Navbar.Toggle>
        </div>

        <Navbar.Collapse id="navbarScroll" in={menuOpen}>
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
          </Nav>
          <Form className="d-flex align-items-center">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-warning" className="me-2 btn-custom">
               Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavScrollExample;
