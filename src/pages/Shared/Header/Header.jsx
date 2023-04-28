// eslint-disable-next-line no-unused-vars
import React from 'react';
import logo from '../../../assets/logo.png';
import moment from "moment";
import Button from "react-bootstrap/Button";
import { Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { Nav, Navbar } from 'react-bootstrap';
const Header = () => {
    return (
      <Container className='mt-4'>
        <div className="text-center">
          <img src={logo} alt="" />
          <p className="text-secondary">
            <small>Journalism Without Fear or Favour</small>
          </p>
          <p>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
        <div className="d-flex">
          <Button variant="success">Latest</Button>
          <Marquee className="text-success" gradient={true} speed={100}>
            I can be a React component, multiple React components, or just some
            text..... I can be a React component, multiple React components, or
            just some text.....
          </Marquee>
        </div>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#career">Career</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">Profile</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  <Button variant="success">Login</Button>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    );
};

export default Header;