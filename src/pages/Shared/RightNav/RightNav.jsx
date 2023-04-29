// eslint-disable-next-line no-unused-vars
import React from 'react';
import Button from "react-bootstrap/Button";
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png';
import './rightnav.css';

const RightNav = () => {
    return (
      <div className="my-4">
        <h4 className="text-dtcn fw-bold" style={{ fontSize: "30px" }}>
          Login With
        </h4>
        <Button className="mb-2" variant="outline-success">
          {" "}
          <FaGoogle /> Login with Google
        </Button>
        <Button variant="outline-warning">
          {" "}
          <FaGithub /> Login with Github
        </Button>
        <div className="my-4">
          <h4 className="text-dtcn fw-bold" style={{ fontSize: "30px" }}>
            Find us on
          </h4>
          <ListGroup>
            <ListGroup.Item>
              <FaFacebook /> facebook
            </ListGroup.Item>
            <ListGroup.Item>
              <FaTwitter /> twitter
            </ListGroup.Item>
            <ListGroup.Item>
              <FaInstagram /> Instagram
            </ListGroup.Item>
          </ListGroup>
        </div>
        <QZone></QZone>
        <div>
          <div className="position-relative">
            <img className="position-absolute" src={bg} alt="" />
            <h2 className="position-absolute margin-top-h w-50 text-center text-light fw-bolder">
              Create an Amazing Newspaper
            </h2>
            <p className="position-absolute text-center text-light margin-top-p">
              Discover thousands of options, easy to customize layouts,
              one-click to import demo and much more.
            </p>
            <Button
              className="position-absolute fs-5 fw-bolder margin-top-btn"
              variant="warning"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    );
};

export default RightNav;