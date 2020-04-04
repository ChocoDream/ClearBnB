import React, { useContext, useEffect, useState } from 'react';
import { ResidenceContext } from '../contexts/ResidenceContextProvider';
import { Container, Button, Row, Col } from 'reactstrap';
import { useParams } from 'react-router-dom';

import AmenityList from '../components/AmenitiesList';

const ResidencePage = () => {
  let { id } = useParams();
  const { residence } = useContext(ResidenceContext);

  return (
    <Container>
      <Row>
        <Col>
          {/*BILD HÄR */}
          <h2 className="mt-4"> {residence.street_name}, {residence.city} </h2>
          <h4 className="mt-2 text-muted"> {residence.region}, {residence.country} </h4>
          <Button color="primary" size="lg" block>Boka</Button>
          {/*ANVÄNDARE HÄR */}
          <h3 className="mt-3 mb-2"><b>{residence.price} kr</b> natt</h3>
          <h2>Information om boendet</h2>
          <AmenityList />

        </Col>
      </Row>
    </Container>
  )
}

export default ResidencePage;