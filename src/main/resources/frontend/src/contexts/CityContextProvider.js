import React, { createContext, useState, useEffect } from 'react'

export const CityContext = createContext()

export default function CityContextProvider(props) {
  const [cities, setCities] = useState([])

  //Get Data from API
  const getCities = async () => {
    let res = await fetch('/api/clearbnb/cities')
    res = await res.json()
    setCities(res)
  }

  useEffect(() => {
    getCities()
  }, [])

  const values = {
    cities, 
    setCities
  }

  return (
    <CityContext.Provider value={values}>
      {props.children}
    </CityContext.Provider>
  )
}