import React, { createContext, useState, useEffect } from 'react'

export const ResidenceContext = createContext()

export default function ResidenceContextProvider(props) {
  //const [city, setCity] = useState(null)
  const [residences, setResidences] = useState([])

  //Get Data from API
  const fetchRecipes = async () => {
    let res = await fetch('/api/clearbnb/residences')
    res = await res.json()
    setResidences(res)
  }
  

  useEffect(() => {
    fetchRecipes()
  }, [])

  const values = {
    residences, 
    setResidences
  }

  return (
    <ResidenceContext.Provider value={values}>
      {props.children}
    </ResidenceContext.Provider>
  )
}