import React, { useContext, useState } from 'react';
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { AuthContext } from '../../../providers/AuthProvider';

const Register = () => {

  const { createUser } = useContext(AuthContext);
  const [accepted, setAccepted] = useState(false);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);
    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleAccepted = (event) => {
    setAccepted(event.target.checked);
  }

    return (
      <Container className="w-25 mx-auto mt-4">
        <h2 className="text-dtcn fw-bold" style={{ fontSize: "30px" }}>
          Please Register
        </h2>
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control
              type="text"
              name="photo"
              placeholder="Enter your photo URL"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Enter your password"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check
              onClick={handleAccepted}
              type="checkbox"
              name="accept"
              label={
                <>
                  Accept <Link to="/terms">Terms and Conditions</Link>{" "}
                </>
              }
            />
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
            disabled={!accepted}
          >
            <Link to='/login'>Sign up</Link>
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