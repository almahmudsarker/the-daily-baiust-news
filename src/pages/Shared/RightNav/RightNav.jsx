import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png';
import './rightnav.css';
import { AuthContext } from "../../../providers/AuthProvider";
import { Link } from "react-router-dom";

const RightNav = () => {
  const { signInWithGoogle, signInWithGithub } = useContext(AuthContext);
    return (
      <div className="my-4">
        <h4 className="text-dtcn fw-bold" style={{ fontSize: "30px" }}>
          Login With
        </h4>
        <Button
          onClick={signInWithGoogle}
          className="mb-2"
          variant="outline-success"
        >
          {" "}
          <FaGoogle /> Login with Google
        </Button>
        <Button onClick={signInWithGithub} variant="outline-warning">
          {" "}
          <FaGithub /> Login with Github
        </Button>
        <div className="my-4">
          <h4 className="text-dtcn fw-bold" style={{ fontSize: "30px" }}>
            Find us on
          </h4>
          <ListGroup>
            <ListGroup.Item>
              <FaFacebook />
              <Link className="text-decoration-none" to="https://www.facebook.com/groups/2244562355601940">
                {" "}
                Facebook
              </Link>
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