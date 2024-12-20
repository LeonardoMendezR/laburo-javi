import React from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import remera from '/src/assets/img/remera.webp';
import bermuda from '/src/assets/img/Bermuda.jpeg';
import buzos from '/src/assets/img/Buzos.jpeg';

function GroupExample() {
  return (
    <Container fluid className="py-5">
    <Row className="g-3 justify-content-center">
      {[
        { img: remera, title: 'Remeras', link: '#' },
        { img: bermuda, title: 'Pantalones', link: '#' },
        { img: buzos, title: 'Buzos', link: '#' },
      ].map((item, index) => (
        <Col md={4} key={index}>
          <Card className="text-center card-custom">
            <Card.Img variant="top" src={item.img} className="img-fluid img-custom" />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Button variant="dark" href={item.link}>
                Más información
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
  );
}

export default GroupExample;
