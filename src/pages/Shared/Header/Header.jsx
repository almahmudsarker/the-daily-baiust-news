// eslint-disable-next-line no-unused-vars
import React from 'react';
import moment from "moment";
import Button from "react-bootstrap/Button";
import { Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
      <Container className="mt-4 position-sticky">
        <div className="text-center">
          <h1 className="animated-text">The Daily Baiust</h1>
          <p className="text-secondary">
            <small>Journalism Without Fear or Favour</small>
          </p>
          <p>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
        <div className="d-flex">
          <Button className="animated-text-btn" variant="success">
            Latest
          </Button>
          <Marquee
            className="text-secondary"
            pauseOnHover={true}
            gradient={true}
            speed={100}
          >
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
                <Nav.Link href="#home">
                  <Link to="/">Home</Link>
                </Nav.Link>
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