import React, { createContext, useState, useEffect } from 'react'

export const AddressContext = createContext()

export default function AddressContextProvider(props) {
  //const [city, setCity] = useState(null)
  const [addresses, setAddresses] = useState([])

  //Get Data from API
  const getAddresses = async () => {
    let res = await fetch('/api/clearbnb/addresses')
    res = await res.json()
    setAddresses(res)
  }
  
  const appendAddress = (address) => {
    setAddresses([...addresses, address])
  }

  useEffect(() => {
    getAddresses()
  }, [])

  const values = {
    addresses, 
    setAddresses,
    appendAddress,
  }

  return (
    <AddressContext.Provider value={values}>
      {props.children}
    </AddressContext.Provider>
  )
}