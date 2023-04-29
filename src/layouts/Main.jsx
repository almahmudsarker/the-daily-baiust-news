// eslint-disable-next-line no-unused-vars
import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../pages/Shared/LeftNav/LeftNav';
import RightNav from '../pages/Shared/RightNav/RightNav';
import { Outlet } from 'react-router-dom';
const Main = () => {
    return (
      <div className="position-relative">
        <Header></Header>
        <Container>
          <Row>
            <Col lg={3}>
              <LeftNav></LeftNav>
            </Col>
            <Col lg={6}>
              <Outlet></Outlet>
            </Col>
            <Col lg={3}>
              <RightNav></RightNav>
            </Col>
          </Row>
        </Container>
        <Footer></Footer>
      </div>
    );
};

export default Main;