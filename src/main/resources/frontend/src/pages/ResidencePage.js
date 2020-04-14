import React, { useContext, useEffect, useState } from 'react';
import { ResidenceContext } from '../contexts/ResidenceContextProvider';
import { Container, Row, Col } from 'reactstrap';
import { useParams, Link } from 'react-router-dom';

const ResidencePage = () => {
  let { id } = useParams();
  const { residence, getResidenceById } = useContext(ResidenceContext);

  const [totalPrice, setTotalPrice] = useState(Number);

  useEffect(() => {
    getResidenceById(id);
  }, [])
  
  useEffect(() => {
    //Calculating the total price in an useEffect
    setTotalPrice(residence.price)
  }, [residence.price])

  
  return (
    <Container>
      <Row>
        {residence ? (<Col>
          <h2 className="mt-2 h3"> <b>{residence.street_name} {residence.street_number}, {residence.city}</b> </h2>
          <h4 className="mt-3 mb-3 text-muted"> {residence.region}, {residence.country} </h4>
          {/*BILD HÄR */}
          <span className="d-flex justify-content-center">
            <Link to="/create-booking" className="btn btn-info btn-lg">Boka</Link>
          </span>
          {/*ANVÄNDARE HÄR */}
          <div className="text-center">
            <h2 className="mt-2"><b>Totalt {totalPrice} kr </b></h2>
            <h3><b>{residence.price} kr</b> / natt</h3>
            <h3>2 personer</h3>
            <h3>3 nätter</h3>
          </div>
          <h3><b>Information om boendet</b></h3>
          <p> logem lipsom logem lipson logem lipson logem lipson logem lipson logem lipson logen lipsom logem lipsom logen losipson lopgen lispon </p>
        </Col>) : ''
        }
      </Row>
    </Container>
  )
}

export default ResidencePage;