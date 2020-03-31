import React, { useContext } from 'react';
import { ResidenceContext } from '../contexts/ResidenceContextProvider';
import {
  Card, CardImg, CardTitle, CardText,
  CardSubtitle, CardBody,
  Col
} from 'reactstrap';

const ResidenceList = () => {
  const { residences } = useContext(ResidenceContext)
  //Added randomImages for height card testing. 
  const randomImages = ["https://odis.homeaway.com/odis/listing/7e04139f-1678-4a69-a9dc-d86be6bd80c6.c10.jpg",
    "https://i.ytimg.com/vi/Ft8qVlwhOYE/maxresdefault.jpg",
    "https://i.ytimg.com/vi/kEzvxqjn11c/hqdefault.jpg",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FgOyZRPJRXhg%2Fmaxresdefault.jpg&f=1&nofb=1",
    "https://i.ytimg.com/vi/i7Qfc99RKUM/hqdefault.jpg",
    "http://assets.dagnysrealestate.com/popular_search/image_l_greenwich-ct-contemporary-homes-for-sale-find-buy-modern-houses-460a.jpg"]

  const list = () => {
    return residences.map((residence, index) => {
      return (
        <Col
          key={"res" + index + residence.id}
          className="mt-2 mb-2" xs={12} md={6} lg={4}
        onClick={() => {console.log("hej från :", residence.id)}}>
          <Card>
            <CardBody>
              {/*Ersätt denna kod neranför med bild från db alt ResidenceImageCarousel, nästa sprint */}
              <CardImg src={randomImages[(Math.floor(Math.random() * 6))]} alt="ClearBnB boende" />
              
              <CardText className="text-muted">Max antal gäster: {residence.max_guest} </CardText>
              <CardSubtitle> {residence.city}, {residence.region} </CardSubtitle>
              <CardTitle className="h4"> <b>{residence.price} kr SEK /</b> natt </CardTitle>
              <CardText> logemlisum logemlisum logemlisum logemlisum logemlisum logem lisum </CardText>
            </CardBody>
          </Card> 
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