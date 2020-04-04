import React, { createContext, useState, useEffect } from 'react'

export const AmenitiesResidencesIdCon = createContext()

export default function AmenitiesResidencesIdConProvider(props) {
  //const [city, setCity] = useState(null)
  const [amenitiesResidencesId, setAmenitiesResidencesId] = useState([])

  //Get Data from API
  const getAmenitiesXResidences = async () => {
    let res = await fetch('/api/clearbnb/amxres')
    res = await res.json()
    setAmenitiesResidencesId(res)
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
  }

  return (
    <AmenitiesResidencesIdCon.Provider value={values}>
      {props.children}
    </AmenitiesResidencesIdCon.Provider>
  )
}