import React, { Fragment } from "react";
import { Card, Col } from "react-bootstrap";
import './OurServiceCard.css'

const OurServiceCard = ({ service }) => {
  const { img, name, des } = service;

  return (
    <Fragment>
     <section>
     {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
          <Card className="service-card-style text-center">
            <Card.Img className="w-full mx-auto" variant="top" src={img} />
            <Card.Body>
              <Card.Title>
                <h5>{name}</h5>
              </Card.Title>
                  <p>{des}</p>
            </Card.Body>
          </Card>
        </Col>
      ))}
      </section>
    </Fragment>
  );
};

export default OurServiceCard;
