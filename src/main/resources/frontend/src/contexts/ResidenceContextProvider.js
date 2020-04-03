import React, { createContext, useState, useEffect } from 'react';

export const ResidenceContext = createContext()

export default function ResidenceContextProvider(props) {
  //const [city, setCity] = useState(null)
  const [residences, setResidences] = useState([])
  const [residence, setResidence] = useState(null)

  //Get Data from API
  const getResidences = async () => {
    let res = await fetch('/api/clearbnb/residences')
    res = await res.json()
    setResidences(res)
  }
  
  const appendResidence = (residence) => {
    setResidences([...residences, residence])
  }

  const getResidence = async (id) => {
    let res = await fetch('api/clearbnb/residences/' + id)
    res = await res.json()
    setResidence(res);
    console.log(res)
  }

  useEffect(() => {
    getResidences()
  }, [])

  const values = {
    residences, 
    setResidences,
    appendResidence,
  }

  return (
    <ResidenceContext.Provider value={values}>
      {props.children}
    </ResidenceContext.Provider>
  )
}