import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import Logo from "../../assets/Logo.jpeg";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Menu from "../../pages/Home/Menu";





function Header(){
   const [nav, setNav] = useState(false);

  //  scroll navbar
  const changeValueonScroll = () => {
    const scrollValue= document?.documentElement?.scrollTop;
    scrollValue > 100 ? setNav(true) : setNav(false);
  }

  React.useEffect(() => {
    window.addEventListener('scroll', changeValueonScroll);
    return () => {
      window.removeEventListener('scroll', changeValueonScroll);
    };
  }, []);
    return (
    <header>
            <Navbar collapseOnSelect expand="lg" className={`${nav===true ? "sticky": ""}`}>
          <Container>
            <Navbar.Brand href="#home">
                <Link to="/" className="logo">
                <img src={Logo} alt="Logo" className="img-fluid" />
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link as ={Link} to ="/">Home</Nav.Link>
                <Nav.Link as ={Link} to ="/about">About</Nav.Link>
                <Nav.Link as ={Link} to ="/menu">Our Menu</Nav.Link>
                <Nav.Link as ={Link} to ="/shop">Shop</Nav.Link>
                <Nav.Link as ={Link} to ="/blog">Blog</Nav.Link>
                <Nav.Link as ={Link} to ="/contact">Contact Us</Nav.Link>
                <Nav.Link as ={Link} to ="/">
                <div>
                    <i class="bi bi-bag fs-7"></i>
                    <em className="roundpoint">2</em>
                </div>
                </Nav.Link>

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </header>
    );

}


export default Header