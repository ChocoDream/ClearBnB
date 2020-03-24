import React, { createContext, useState, useEffect } from 'react'

export const ResidenceContext = createContext()

export default function ResidenceContextProvider(props) {
  const [residence, setResidence] = useState([])

  //Get Data from API
  const getResidence = async () => {
    let res = await fetch('/api/clearbnb/residences')
    res = await res.json()
    setResidence(res)
    console.log(res);
  }

  useEffect(() => {
    getResidence()
  }, [])

 
  
  const values = {
    residence, 
    setResidence
  }

  return (
    <ResidenceContext.Provider value={values}>
      {props.children}
    </ResidenceContext.Provider>
  )
}