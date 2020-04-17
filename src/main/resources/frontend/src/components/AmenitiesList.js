import React, { useContext, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col } from 'reactstrap';
import { AmenityContext } from '../contexts/AmenityContextProvider'
import { AmenitiesResidencesIdCon } from '../contexts/AmenitiesResidencesIdConProvider';

export default function AmenitiesList(props) {
  const { amenities } = useContext(AmenityContext)
  const { getAmenitiesFromResidenceId, amenitiesResidence } = useContext(AmenitiesResidencesIdCon);
  const [amenitiesVals, setAmenitiesVals] = useState([]);

   useEffect(() => {
     getAmenitiesFromResidenceId(props.residenceId)
     //console.log("hej")
  }, [])

  const appendAmenities = (amenity) => {
    setAmenitiesVals(amenitiesVals.push(amenity))
  }

  const getAmenities = () => {
    amenities.forEach(a => {
      amenitiesResidence.filter(ar => {
        if (a.id === ar.amenity_id) {
          return appendAmenities(a);
        }
      })
    })
    //console.log("Hopefully this works, getting amenitiesVals", amenitiesVals)
  }
  //VIKTIGT, Be Johan om hjälp om detta imorgon! Kan ej lösa själv
  //Löste det at last. WHOO

  const AmenitiesList = () => {
    return (
      <div>
      {
        amenitiesResidence
        ? <p onClick={() => getAmenities(props.residenceId)}> hello </p>
        : 'this is false'
      }
      </div>
    )

/*     return amenities.map((amenity, index) => {
        return (
            <Col key={index}
            onClick={() => { console.log("amenity :", amenity.id); getAmenities() }}>
            >{amenity.name} ({amenity.id})</Col>
          )
        }) */
  }

  return (
  <>
    {AmenitiesList()}
  </>
)
}