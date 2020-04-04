import React, { useContext, useEffect, useState } from 'react';
import { ResidenceContext } from '../contexts/ResidenceContextProvider';
import { Container, Button, Row, Col } from 'reactstrap';
import { useParams } from 'react-router-dom';

const ResidencePage = () => {
  let { id } = useParams();
  const { residence } = useContext(ResidenceContext);


  return (
    <Container>
      <Row>
        <Col>
          {/*BILD HÄR */}
          <h2 className="mt-4">Fin villa i skåne trakterna</h2>
          <Button color="primary" size="lg" block>Boka</Button>
          {/*ANVÄNDARE HÄR */}
          <h3 className="mt-3 mb-2"><b>{residence.price} kr</b> natt</h3>
          <h2>Information on Boendet</h2>
          
        </Col>
      </Row>
    </Container>
  )
}

export default ResidencePage;