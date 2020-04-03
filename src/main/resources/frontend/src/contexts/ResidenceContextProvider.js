import React, { createContext, useState, useEffect } from 'react';

export const ResidenceContext = createContext()

export default function ResidenceContextProvider(props) {
  //const [city, setCity] = useState(null)
  const [residences, setResidences] = useState([])
  const [residence, setResidence] = useState(null)

  //Get Data from API
  const fetchRecipes = async () => {
    let res = await fetch('/api/clearbnb/residences')
    res = await res.json()
    setResidences(res)
  }
  

  const getResidence = async (id) => {
    let res = await fetch('api/clearbnb/residences/' + id)
    res = await res.json()
    setResidence(res);
    console.log(res)
  }

  useEffect(() => {
    fetchRecipes()
  }, [])

  const values = {
    residences, 
    setResidences,
    residence,
    setResidence
  }

  return (
    <ResidenceContext.Provider value={values}>
      {props.children}
    </ResidenceContext.Provider>
  )
}