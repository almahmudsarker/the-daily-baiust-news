/* eslint-disable no-unused-vars */
import React from 'react';
import { Container } from 'react-bootstrap';
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext } from "react";

const NavigationBar = () => {
    const { user } = useContext(AuthContext);
    return (
      <Container>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav ">
              <Nav className="mx-auto">
                  <Link className="text-dtcn" to="/category/0">
                    Home
                  </Link>
                  <Link className="text-dtcn" to="/">
                    About
                  </Link>
                  <Link className="text-dtcn" to="/">
                    Career
                  </Link>
              </Nav>
              <Nav>
                {
                user && <FaUserCircle style={{ fontSize: "2rem" }}></FaUserCircle>
                }
                {
                  user ? (
                    <Link to="/login">
                      <button className="text-dtcn-btn">Logout</button>
                    </Link>
                  ) : (
                    <Link to="/login">
                      <button className="text-dtcn-btn">Login</button>
                    </Link>
                  )
                }
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    );
};

export default NavigationBar;