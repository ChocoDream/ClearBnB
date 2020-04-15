import React, { useContext, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col } from 'reactstrap';
import { AmenityContext } from '../contexts/AmenityContextProvider'
import { AmenitiesResidencesIdCon } from '../contexts/AmenitiesResidencesIdConProvider';

export default function AmenitiesList(props) {
  const { amenities } = useContext(AmenityContext)
  const { getAmenitiesFromResidenceId, amenitiesResidence } = useContext(AmenitiesResidencesIdCon);
  const [amenitiesVals, setAmenitiesVals] = useState([]);

  const getAmenities = async () => {
    console.log(props.residenceId)
    console.log("Check all props: ", props)
    await getAmenitiesFromResidenceId(props.residenceId)
  }

  useEffect(() => {
    console.log("amenities ", amenities)
    console.log("amenity Residence ", amenitiesResidence)
    amenities.forEach(a => {
      setAmenitiesVals(
        amenitiesResidence.filter(ar => {
          return (a.id == ar.amenity_id)
        })
      )
    })
  }, [amenities])

   useEffect(() => {
    getAmenities()
  }, [])

  const appendAmenities = (amenity) => {
    console.log("amenity", amenity)
    setAmenitiesVals([...amenitiesVals, amenity])
  }

  //VIKTIGT, Be Johan om hjälp om detta imorgon! Kan ej lösa själv
  //Löste det at last. WHOO

  const AmenitiesList = () => {
     return amenitiesVals.map((amenity, index) => {
        return (
            <Col key={index}
            onClick={() => { console.log("amenity :", amenity.id)}}>
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