import React, { createContext, useState, useEffect } from 'react'

export const AmenitiesResidencesIdCon = createContext()

export default function AmenitiesResidencesIdConProvider(props) {
  //const [city, setCity] = useState(null)
  const [amenitiesResidencesId, setAmenitiesResidencesId] = useState([])
  const [amenitiesResidence, setAmenitiesResidence] = useState([]);

  //Get Data from API
  const getAmenitiesXResidences = async () => {
    let res = await fetch('/api/clearbnb/amxres')
    res = await res.json()
    setAmenitiesResidencesId(res)
  }

  const getAmenitiesFromResidenceId = async (id) => {
    let res = await fetch(`/api/clearbnb/amenitiesbyresidence/${id}`);
    res = await res.json();
    setAmenitiesResidence(res);
  }
  
  const appendAmenityResidencesId = (amenityxresidences) => {
    setAmenitiesResidencesId([...amenitiesResidencesId, amenityxresidences])
  }

  useEffect(() => {
    getAmenitiesXResidences()
  }, [])

  const values = {
    amenitiesResidencesId,
    setAmenitiesResidencesId,
    appendAmenityResidencesId,
    getAmenitiesFromResidenceId,
    setAmenitiesResidence,
    amenitiesResidence
  }

  return (
    <AmenitiesResidencesIdCon.Provider value={values}>
      {props.children}
    </AmenitiesResidencesIdCon.Provider>
  )
}