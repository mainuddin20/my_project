import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
function NavbarHead() {
  // const scrollY = useScroll(); // Get scrollY motion value
  // const [hidden, setHidden] = useState(false);
  // const [lastScrollY, setLastScrollY] = useState(0); // Track last scroll position

  // // Handle scroll event
  // useMotionValueEvent(scrollY, "change", (latest) => {
  //   if (latest > lastScrollY) {
  //     setHidden(true); // Scroll down
  //   } else {
  //     setHidden(false); // Scroll up
  //   }
  //   setLastScrollY(latest); // Update last scroll position
  // });
  return(

    // <motion.nav
    //   variants={{
    //     visible: { y: 0 },
    //     hidden: { y: "-100%" }, // Ensure it's "-100%"
    //   }}
    //   animate={hidden ? "hidden" : "visible"}
    //   transition={{ duration: 0.5, ease: "easeInOut" }}
    // >
      
       
            <Navbar expand="lg" className=''>
              <Container>
                <Navbar.Brand as={NavLink} to="/" className="logo m-0 p-0">
                  Portfolio
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ms-auto">
                    <NavLink to="/" style={{ '--i': 1 }} className={({ isActive }) => (isActive ? 'active' : '')}>
                      Home
                    </NavLink>
                    <NavLink to="/Aboutpage" style={{ '--i': 2 }} className={({ isActive }) => (isActive ? 'active' : '')}>
                      About
                    </NavLink>
                    <NavLink to="/Myservicepage" style={{ '--i': 3 }} className={({ isActive }) => (isActive ? 'active' : '')}>
                      Services
                    </NavLink>
                    <NavLink to="/Protfoliopage" style={{ '--i': 4 }} className={({ isActive }) => (isActive ? 'active' : '')}>
                      Portfolio
                    </NavLink>
                    <NavLink to="/Contactpage" style={{ '--i': 5 }} className={({ isActive }) => (isActive ? 'active' : '')}>
                      Contact
                    </NavLink>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          
        
      
    // </motion.nav>
  );
}

export default NavbarHead;
