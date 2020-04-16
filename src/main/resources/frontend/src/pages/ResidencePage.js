import React, { useContext, useEffect, useState } from 'react';
import { ResidenceContext } from '../contexts/ResidenceContextProvider';
import { PhotoContext } from '../contexts/PhotoContextProvider';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { useParams, Link } from 'react-router-dom';
import PhotoCarousel from '../components/PhotoCarousel';
import { ArrowRight } from 'react-bootstrap-icons';

const ResidencePage = () => {
  let { id } = useParams();
  const { residence, getResidenceById } = useContext(ResidenceContext);
  const [ amenities, setAmentiesList] = useState('');
  const { getPhotosByResidenceId } = useContext(PhotoContext);
  const [totalPrice, setTotalPrice] = useState(Number);

  useEffect(() => {
    getPhotosByResidenceId(id);
    getResidenceById(id);
    getAmenities(id);
  }, [])

  /*useEffect(() => {
    //Calculating the total price in an useEffect
    setTotalPrice(residence.price)
  }, [residence.price])*/


  const getAmenities = async (id) => {
    let amenities = await fetch(`/api/clearbnb/amenitiesbyresidence/${id}`);
    amenities = await amenities.json();
    console.log(amenities)
    
    if (amenities.length === 0){
        console.log('Inga sparade bostäder.');
        return
    }
    const amenitiesList = Array.from(Array(amenities.length).keys())
        .map(x => {
        console.log(amenities[x]);
                        
        return (<ListGroupItem className="ml-1 mb-1" key={x}>
          <svg fill="green" className="bi bi-check " width="1em" height="1em" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z" clipRule="evenodd"/>
          </svg>
          <span className="ml-2">{amenities[x]}</span></ListGroupItem>)
    });
    setAmentiesList(amenitiesList);
}


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
              <h3 className="order-sm-3 order-lg-1"><b>{residence.price} kr</b> / natt</h3>
              <h3 className="order-lg-2 d-none d-md-block"></h3>
            </Col>
          </Row>
        </Col>
        <Col xs="12" md={{ size: 6, order: 1 }}>
          <h3><b>Information om boendet</b></h3>
          <p> logem lipsom logem lipson logem lipson logem lipson logem lipson logem lipson logen lipsom logem lipsom logen losipson lopgen lispon </p>
          <ListGroup flush>{amenities}</ListGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default ResidencePage;