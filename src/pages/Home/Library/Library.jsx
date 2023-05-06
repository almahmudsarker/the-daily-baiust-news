import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';

const Library = () => {
    useTitle("Central Library");
    return (
      <Container>
        <h1 className="text-dtcn fs-1 fw-bolder">Central Library</h1>
        <h1 className="text-dtcn fs-2 fw-bolder">OPAC</h1>
        <hr />
        <Link to="http://opac.baiust.ac.bd">LIBRARY SERVICES</Link>
        <br />
        <br />
        <br />
        <h1 className="text-dtcn fs-2 fw-bolder">E-Book</h1>
        <hr />
        <Link to="https://www.wileyindia.com/Wiley_Online_Resources/UGC%20Bangladesh/UGC%20Bangladesh.html">
          UGC-Bangladesh
        </Link>
      </Container>
    );
};

export default Library;