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
    return amenities.map((amenity, i) => {
        return (
            <Col>{amenity.name}</Col>
          )
        })
  }

return (
  <>
    {AmenitiesList()}
  </>
)
}