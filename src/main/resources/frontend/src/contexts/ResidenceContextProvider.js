import React, { createContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const ResidenceContext = createContext()

export default function ResidenceContextProvider(props) {
  //const [city, setCity] = useState(null)
  const [residences, setResidences] = useState([])
  const [residence, setResidence] = useState([])

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
    let res = await fetch('/api/clearbnb/residences/' + id)
    res = await res.json();
    setResidence(res);
  }

  useEffect(() => {
    getResidences()
  }, [])


  const values = {
    residences, 
    setResidences,
    appendResidence,
    residence,
    setResidence,
    getResidence
  }

  return (
    <ResidenceContext.Provider value={values}>
      {props.children}
    </ResidenceContext.Provider>
  )
}