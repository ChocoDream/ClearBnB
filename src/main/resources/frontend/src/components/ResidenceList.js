import React, { useContext } from 'react';
import { ResidenceContext } from '../contexts/ResidenceContextProvider';
import {
  Card, CardImg, CardTitle, CardText,
  CardSubtitle, CardBody,
  Row, Col
} from 'reactstrap';

const ResidenceList = () => {
  const {residences} = useContext(ResidenceContext)

  const list = () => {
    return residences.map((residence, i) => {
      return (
        <Col>
          <Card
            key={residence.price + residence.country + residence.id + i}
            className="mt-2 mb-2"
          >
            <CardBody>
              {/*När vi lägger in bilder
              <CardImg src="" alt=`boende i ${residence.city}` />
              */}
              <CardText>Max antal gäster: {residence.max_guest} </CardText>
              <CardSubtitle> {residence.city}, {residence.region} </CardSubtitle>
              <CardTitle className="h4"> <b>{residence.price} kr SEK /</b> natt </CardTitle>
            </CardBody>
          </Card> 
        </Col>
      )
    })
  }

  return (
    <div className="container">
      <Row className="row-cols-3">
      {list()}
      </Row>
    </div>
  )
};

export default ResidenceList;