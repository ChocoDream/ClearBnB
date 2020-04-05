import React, { createContext, useState, useEffect } from 'react'

export const PhotoContext = createContext()

export default function PhotoContextProvider(props) {
  const [photos, setPhotos] = useState([])

  //Get Data from API
  const getPhotos = async () => {
    let res = await fetch('/api/clearbnb/photos')
    res = await res.json()
    setPhotos(res)
  }
  
  const appendPhoto = (photo) => {
    setPhotos([...photos, photo])
  }

  useEffect(() => {
    getPhotos()
  }, [])

  const values = {
    photos, 
    setPhotos,
    appendPhoto,
  }

  return (
    <PhotoContext.Provider value={values}>
      {props.children}
    </PhotoContext.Provider>
  )
}