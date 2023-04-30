import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Login = () => {
  const {signIn} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log('login page location',location);
  const from = location.state?.from?.pathname || '/category/0';

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, {replace: true});
      })
      .catch(error => {
        console.log(error);
      });
  };  



    return (
      <Container className="w-25 mx-auto mt-4">
        <h2 className="text-dtcn fw-bold" style={{ fontSize: "30px" }}>
          Please Login
        </h2>
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Button
            className="animated-text-btn"
            style={{ width: "100%", marginBottom: "20px", marginTop: "10px", borderColor: "gray", fontWeight: "bold", fontSize: "20px" }}
            variant="primary"
            type="submit"
          >
            Login
          </Button>
          <br />
          <Form.Text className="text-dtcn" style={{ marginLeft: "116px" }}>
            Don't have an account? <Link to="/register">Register</Link>
          </Form.Text>
          <Form.Text className="text-success"></Form.Text>
          <Form.Text className="text-danger"></Form.Text>
        </Form>
      </Container>
    );
};

export default Login;