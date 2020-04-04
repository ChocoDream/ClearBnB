import React, { createContext, useState, useEffect } from 'react'

export const ResidenceCon = createContext()

export default function ResidenceConProvider(props) {
  //const [city, setCity] = useState(null)
  const [residences, setResidences] = useState([])

  //Get Data from API
  const getResidences = async () => {
    let res = await fetch('/api/clearbnb/allresidences')
    res = await res.json()
    setResidences(res)
  }
  
  const appendResidence = (residence) => {
    setResidences([...residences, residence])
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
    <ResidenceCon.Provider value={values}>
      {props.children}
    </ResidenceCon.Provider>
  )
}