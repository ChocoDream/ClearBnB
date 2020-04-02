import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Container, 
    Row, 
    Col } from 'reactstrap';
import { AmenityContext } from '../contexts/AmenityContextProvider'

export default function AmenitiesList() {
  const { amenities } = useContext(AmenityContext)

  const AmenitiesList = () => {
    return amenities.map((amenity, index) => {
        return (
            <Col key={index}
            onClick={() => {console.log("amenity :", amenity.id)}}>
            >{amenity.name} ({amenity.id})</Col>
          )
        })
  }

return (
  <>
    {AmenitiesList()}
  </>
)
}