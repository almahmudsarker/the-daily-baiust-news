/* eslint-disable no-unused-vars */
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import first from '../../../assets/1.png';
import second from '../../../assets/2.png';
import third from '../../../assets/3.png';

const Editors = () => {
    return (
      <Row xs={1} md={1} lg={1} className="g-4 mt-4">
        <Col>
          <Card>
            <Card.Img variant="top" src={first} />
            <Card.Body>
              <Card.Title className="fw-bold">
                Baiust Slams Authorities Over Flight Delay to Club BD cups
              </Card.Title>
            </Card.Body>
            <Card.Subtitle className="ps-3 mb-2">Sports</Card.Subtitle>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={second} />
            <Card.Body>
              <Card.Title className="fw-bold">
                Baiust Slams Authorities Over Flight Delay to Club BD cups
              </Card.Title>
            </Card.Body>
            <Card.Subtitle className="ps-3 mb-2">Sports</Card.Subtitle>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={third} />
            <Card.Body>
              <Card.Title className="fw-bold">
                Baiust Slams Authorities Over Flight Delay to Club BD cups
              </Card.Title>
            </Card.Body>
            <Card.Subtitle className="ps-3 mb-2">Sports</Card.Subtitle>
          </Card>
        </Col>
      </Row>
    );
};

export default Editors;