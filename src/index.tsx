// import React, { useState } from 'react';
// import { Container, Navbar, Nav, Button } from 'react-bootstrap';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// import Hero from './components/sections/hero/Hero';
// import About from './components/sections/about/About'
// import Services from './components/sections/services/Services';
// import Projects from './components/sections/projects/Projects';
// import Products from './components/sections/products/Products';
// import Footer from './components/footer/Footer';

// const Main: React.FC = () => {
//   const [darkMode, setDarkMode] = useState(false);

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//     document.body.className = darkMode ? '' : 'bg-dark text-light';
//   };

//   return (
//     <div className={darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}>
//       <Navbar bg={darkMode ? 'dark' : 'light'} variant={darkMode ? 'dark' : 'light'} expand="lg">
//         <Container>
//           <Navbar.Brand href="#home">Onyx</Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="me-auto">
//               <Nav.Link href="#home">Home</Nav.Link>
//               <Nav.Link href="#about">About</Nav.Link>
//               <Nav.Link href="#services">Services</Nav.Link>
//               <Nav.Link href="#projects">Projects</Nav.Link>
//               <Nav.Link href="#products">Products</Nav.Link>
//             </Nav>
//             <Button variant={darkMode ? 'light' : 'dark'} onClick={toggleDarkMode}>
//               {darkMode ? 'Light Mode' : 'Dark Mode'}
//             </Button>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>

//       <Hero />
//       <About />
//       <Services />
//       <Projects />
//       <Products />
//       <Footer />
//     </div>
//   );
// };

// export default Main;  


import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // یا Main
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
