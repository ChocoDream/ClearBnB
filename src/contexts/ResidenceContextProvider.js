import React, { createContext, useState, useEffect } from 'react'

export const ResidenceContext = createContext()

export default function ResidenceContextProvider(props) {
  const [residences, setResidences] = useState([])

  //Get Data from API
  const getResidences = async () => {
    let res = await fetch('/api/clearbnb/residences')
    res = await res.json()
    setResidences(res)
  }

  useEffect(() => {
    getResidences()
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