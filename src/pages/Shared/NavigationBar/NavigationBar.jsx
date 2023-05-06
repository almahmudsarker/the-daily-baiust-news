/* eslint-disable no-unused-vars */
import React from 'react';
import { Container } from 'react-bootstrap';
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext } from "react";
import { Tooltip } from "react-tooltip";

const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const Name = user ? user.displayName : "Guest";
    const photo = user ? user.photoURL : "user.png";

    const handleLogOut = () => {
      logOut()
        .then()
        .catch((error) => {
          console.log(error);
        });
    };

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
                <Link className="text-dtcn" to="/about">
                  About
                </Link>
                <Link className="text-dtcn" to="/central_library">
                  Central Library
                </Link>
              </Nav>
              <Nav>
                <div>
                  {user && (
                    <img
                      src={photo}
                      className="my-anchor-element rounded-circle me-3"
                      style={{ width: "50px" }}
                    />
                  )}
                  <Tooltip
                    anchorSelect=".my-anchor-element"
                    place="left"
                    content={user ? Name : "Login"}
                  />
                </div>

                {user ? (
                  <Link to="/login">
                    <button onClick={handleLogOut} className="text-dtcn-btn">
                      Logout
                    </button>
                  </Link>
                ) : (
                  <Link to="/login">
                    <button className="text-dtcn-btn">Login</button>
                  </Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    );
};

export default NavigationBar;