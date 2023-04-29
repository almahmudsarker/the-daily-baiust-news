// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import EditorsInsights from '../EditorsInsights/EditorsInsights';

const News = () => {
  const news = useLoaderData();
  const {title, details, image_url, category_id} = news;
    return (
      <>
        <Card>
          <Card.Img variant="top" src={image_url} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{details}</Card.Text>
            <Link to={`/category/${category_id}`}>
              <Button variant="success">
                <FaArrowLeft></FaArrowLeft> All News in this Category
              </Button>
            </Link>
          </Card.Body>
        </Card>
        <EditorsInsights></EditorsInsights>
      </>
    );
};

export default News;