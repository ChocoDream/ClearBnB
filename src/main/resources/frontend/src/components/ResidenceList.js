import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ResidenceContext } from '../contexts/ResidenceContextProvider';

import {
  Card, CardImg, CardTitle, CardText,
  CardSubtitle, CardBody,
  Col
} from 'reactstrap';

const ResidenceList = () => {
  const { residences, getResidenceById } = useContext(ResidenceContext)

  /*const getPhoto= (path) => {
    if(path){
      path=path.substring(7)
    }
    else{
      console.log('no')
      path = '/assets/noavailablephoto.jpg'
    }
    return path;
  }*/

  const list = () => {
    return residences.map((residence, index) => {
      return (
        <Col
          key={"res" + index + residence.id}
          className="mt-2 mb-4 col" xs={12} md={6} lg={4}
          style={{ cursor: "pointer" }}> {/* Makes the whole card selectable */}
          <Link to={`/residences/${residence.id}`}
          onClick={() => getResidenceById(residence.id)} className="nav-link">
          <Card outline color="light">
            <CardBody>
              {/*Ersätt denna kod neranför med bild från db i nästa sprint */}
              <CardImg src={residence.path} alt="ClearBnB boende" />

              <CardText className="text-muted">Max antal gäster: {residence.max_guest} </CardText>
              <CardSubtitle className="text-dark"> {residence.city}, {residence.region} </CardSubtitle>
              <CardTitle className="h4 text-dark"> <b>{residence.price} kr SEK /</b> natt </CardTitle>
              <CardText className="text-dark"> logemlisum logemlisum logemlisum logemlisum logemlisum logem lisum </CardText>
            </CardBody>
          </Card> 
          </Link>
        </Col>
      )
    })
  }

  return (
    <span className="row row-cols-3">
      {list()}
    </span>
  )
};

export default ResidenceList;