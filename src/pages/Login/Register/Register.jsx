/* eslint-disable no-unused-vars */
import React from 'react';
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const Register = () => {
    return (
      <Container className="w-25 mx-auto mt-4">
        <h2 className="text-dtcn fw-bold" style={{ fontSize: "30px" }}>
          Please Register
        </h2>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control
              type="text"
              name="photo"
              placeholder="Enter your photo URL"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Enter your password"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" name='accept' label="Accept Terms and Conditions" />
          </Form.Group>
          <Button
            className="animated-text-btn"
            style={{
              width: "100%",
              marginBottom: "20px",
              marginTop: "10px",
              borderColor: "gray",
              fontWeight: "bold",
              fontSize: "20px",
            }}
            variant="primary"
            type="submit"
          >
            Sign up
          </Button>
          <br />
          <Form.Text className="text-dtcn" style={{ marginLeft: "116px" }}>
            Already have an account? <Link to="/login">Login</Link>
          </Form.Text>
          <Form.Text className="text-success"></Form.Text>
          <Form.Text className="text-danger"></Form.Text>
        </Form>
      </Container>
    );
};

export default Register;