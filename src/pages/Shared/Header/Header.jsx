// eslint-disable-next-line no-unused-vars
import React from 'react';
import moment from "moment";
import Button from "react-bootstrap/Button";
import { Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

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
            Bangladesh Army International University of Science and Technology,
            a pioneer university of Bangladesh Army, started its journey from 14
            February 2015 with the motto of “Knowledge, Wisdom and
            Technology”.... It is established temporarily at the serene and
            secured environment of Cumilla Cantonment with the mission to
            provide State of the Art education and research in science,
            engineering, Business Administration and other relevant programs. It
            expects to run its affairs in permanent location from 2022.... The
            University aims to provide innovative, multi-disciplinary courses
            and endeavors to make a hub of knowledge....
          </Marquee>
        </div>
      </Container>
    );
};

export default Header;