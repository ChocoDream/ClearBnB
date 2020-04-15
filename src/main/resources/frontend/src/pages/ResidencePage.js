import React, { useContext, useEffect, useState } from 'react';
import { ResidenceContext } from '../contexts/ResidenceContextProvider';
import { PhotoContext } from '../contexts/PhotoContextProvider';
import { Container, Row, Col } from 'reactstrap';
import { useParams, Link } from 'react-router-dom';
import PhotoCarousel from '../components/PhotoCarousel';

const ResidencePage = () => {
  let { id } = useParams();
  const { residence, getResidenceById } = useContext(ResidenceContext);
  const { getPhotosByResidenceId } = useContext(PhotoContext);
  const [totalPrice, setTotalPrice] = useState(Number);

  useEffect(() => {
    getPhotosByResidenceId(id);
    getResidenceById(id);
  }, [])

  useEffect(() => {
    //Calculating the total price in an useEffect
    setTotalPrice(residence.price)
  }, [residence.price])


  return (
    <Container>
      <Row style={{ marginBottom: '5%' }}>
        <Col xs={{ size: 12, order: 1 }} md={{ order: 2 }}>
          <span className="mt-2 h1" xs="12" lg="5"> <b>{residence.street_name} {residence.street_number}, {residence.city}</b> </span>
          <span className="mt-3 mb-3 text-muted h2" xs="12" lg="7"> {residence.region}, {residence.country} </span>
        </Col>
        <Col xs={{ size: 12, order: 2 }} lg={{ order: 1 }}>
          {/*PHOTO HERE */}
          {/* 
          <PhotoCarousel className="mb-4" />
          */}
        </Col>
      </Row>
      <Row>
        <Col xs="12" md={{ size: 6, order: 2 }} className="text-center">
          <Row>
            <Col className="d-flex flex-column">
              <span className="justify-content-center order-sm-1 order-lg-6">
                <Link to="/create-booking" className="btn btn-info btn-lg">Boka</Link>
              </span>
              <h2 className="mt-2 order-sm-2 order-lg-5"><b>Totalt {totalPrice} kr </b></h2>
              <h3 className="order-sm-3 order-lg-1"><b>{residence.price} kr</b> / natt</h3>
              <h3 className="order-lg-2 d-none d-md-block"><hr width="60%" noshade></hr></h3>
              <h3 className="order-sm-4 order-lg-3">2 personer</h3>
              <h3 className="order-sm-5 order-lg-4">3 nätter</h3>
            </Col>
          </Row>
        </Col>
        <Col xs="12" md={{ size: 6, order: 1 }}>
          <h3><b>Information om boendet</b></h3>
          <p> logem lipsom logem lipson logem lipson logem lipson logem lipson logem lipson logen lipsom logem lipsom logen losipson lopgen lispon </p>
        </Col>
      </Row>
    </Container>
  )
}

export default ResidencePage;