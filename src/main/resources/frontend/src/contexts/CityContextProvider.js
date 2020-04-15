import React, { createContext, useState, useEffect } from 'react'

export const CityContext = createContext()

export default function CityContextProvider(props) {
  const [cities, setCities] = useState([])
  //const [regions, setRegions] = useState([])
  //const [citiesByRegion, setCitiesByRegion] = useState([])

  /*const getRegions = async () => {
    let res = await fetch('/api/clearbnb/allregions')
    res = await res.json()
    setRegions(res)
  }*/

  const getCities = async () => {
    let res = await fetch('/api/clearbnb/cities')
    res = await res.json()
    setCities(res)
  }

  /*const getCitiesByRegion = async (region) => {
    let res = await fetch('/api/clearbnb/citiesbyregion/'+region)
    res = await res.json()
    setCitiesByRegion(res)
  }*/

  useEffect(() => {
    getCities()
  }, [])

  const values = {
    cities, 
    setCities,
    /*regions,
    setRegions,*/
    /*citiesByRegion,
    setCitiesByRegion*/
  }

  return (
    <CityContext.Provider value={values}>
      {props.children}
    </CityContext.Provider>
  )
}