import React, { useContext, useRef, useState } from "react";
import { Container } from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import useTitle from "../../../hooks/useTitle";

const Login = () => {
 const [error, setError] = useState("");
 const [success, setSuccess] = useState("");
 const emailRef = useRef();
  useTitle("Login");
  const { signIn, resetPassword } = useContext(AuthContext);
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
    setError("");
    setSuccess("");
    if (!/(?=.*[a-z]).{8,}/.test(password)) {
      setError(
        "Must contain at least one number and lowercase letter, and at least 8 or more characters"
      );
      return;
    }
    signIn(email, password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setError("");
        setSuccess("Logged in successfully!");
        form.reset();
        navigate(from, {replace: true});
      })
      .catch(error => {
        console.log(error);
        setError(error.message);
      });
  };  

  const handleResetPassword = (event) => {
    const email = emailRef.current.value;
    console.log(email);
    if (!email) {
      setError("Please enter your email address to reset your password");
    }
    resetPassword(email)
      .then(() => {
        setError("");
        setSuccess("Please check your email for further instructions");
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
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
              ref={emailRef}
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
          <p>
            <small>
              Forgot Password? Please{" "}
              <button onClick={handleResetPassword} className="btn btn-link">
                Reset Password
              </button>
            </small>
          </p>
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
            Login
          </Button>
          <small className="text-danger">{error}</small>
          <small className="text-success">{success}</small>
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