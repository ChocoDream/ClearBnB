import React, { useContext } from 'react';
import { ResidenceContext } from '../contexts/ResidenceContextProvider';
import {
  Card, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';

const ResidenceList = () => {
  const {residences} = useContext(ResidenceContext)

  const list = () => {
    return residences.map((residence, i) => {
      return(
        <Card
          key={residence.price + residence.country + residence.id + i}
        >
          <CardBody>
            {/*När vi lägger in bilder
            <CardImg src="" alt=`boende i ${residence.city}` />
            */}
            <CardTitle> {residence.price} SEK:- </CardTitle>
            <CardTitle> {residence.street_name} {residence.street_number}, {residence.city} </CardTitle>
            <CardSubtitle> {residence.region}, {residence.country} </CardSubtitle>
            <CardText>Max antal gäster: {residence.max_guest} </CardText>
            <p>Price: {residence.price} </p>
            <p>Address id: {residence.address_id} </p>
            <p>country: {residence.country} </p>
            <p>region: {residence.region} </p>
            <p>city: {residence.city} </p>
            <p>zip_code: {residence.zip_code} </p>
            <p>street_name: {residence.street_name} </p>
            <p>street_number: {residence.street_number} </p>
            <p>max_guest: {residence.max_guest} </p>
          </CardBody>
        </Card>
      )
    })
  }

  return (
    <CardDeck className="container">
      {list()}
    </CardDeck>
  )
};

export default ResidenceList;