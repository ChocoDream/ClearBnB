import React, { createContext, useState, useEffect } from 'react'

export const OwnerResidenceContext = createContext()

export default function OwnersResidencesIdConProvider(props) {
  const [ownersresidences, setOwnerResidences] = useState([])

  //Get Data from API
  const getOwnerResidences = async () => {
    let res = await fetch('/api/clearbnb/ownersresidences')
    res = await res.json()
    setOwnerResidences(res)
  }
   
  const appendOwnersResidence = (ownerresidence) => {
    setOwnerResidences([...ownersresidences, ownerresidence])
  }

  useEffect(() => {
    getOwnerResidences()
  }, [])

  const values = {
    ownersresidences, 
    setOwnerResidences,
    appendOwnersResidence
  }

  return (
    <OwnerResidenceContext.Provider value={values}>
      {props.children}
    </OwnerResidenceContext.Provider>
  )
}