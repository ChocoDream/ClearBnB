import React, { createContext, useState, useEffect } from 'react'

export const AmenityContext = createContext()

export default function AmenityContextProvider(props) {
  const [amenities, setAmenities] = useState([])

  //Get Data from API
  const getAmenities = async () => {
    let res = await fetch('/api/clearbnb/amenities')
    res = await res.json()
    setAmenities(res)
  }

  useEffect(() => {
    getAmenities()
  }, [])

  const values = {
    amenities, 
    setAmenities
  }

  return (
    <AmenityContext.Provider value={values}>
      {props.children}
    </AmenityContext.Provider>
  )
}