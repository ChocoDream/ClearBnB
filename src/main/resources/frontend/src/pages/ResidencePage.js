import React, { useContext, useEffect, useState } from 'react';
import { ResidenceContext } from '../contexts/ResidenceContextProvider';
import { Container, Button, Row, Col } from 'reactstrap';
import { useParams, Link } from 'react-router-dom';

import AmenityList from '../components/AmenitiesList';

const ResidencePage = () => {
  let { id } = useParams();
  const { residence, getResidence } = useContext(ResidenceContext);

  useEffect(() => {
    getResidence(id);
  }, [])

  
  return (
    <Container>
      <Row>
        <Col>
          <h2 className="mt-2 h3"> <b>{residence.street_name} {residence.street_number}, {residence.city}</b> </h2>
          <h4 className="mt-3 mb-3 text-muted"> {residence.region}, {residence.country} </h4>
          {/*BILD HÄR */}
          <Link to="/create-booking">
          <Button color="info" size="lg" block>Boka</Button>
          </Link>
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