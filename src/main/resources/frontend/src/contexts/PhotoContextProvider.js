import React, { createContext, useState, useEffect } from 'react'

export const PhotoContext = createContext()

export default function PhotoContextProvider(props) {
  const [photos, setPhotos] = useState([])
  const [residencePhotos, setResidencePhotos] = useState([])

  //Get Data from API
  const getPhotos = async () => {
    let res = await fetch('/api/clearbnb/photos')
    res = await res.json()
    setPhotos(res)
  }

  const getPhotosByResidenceId = async (id) => {
    let res = await fetch(`/api/clearbnb/photosByResidenceId/${id}`)
    res = await res.json()
    if (res.length === 0) { //If residence contains no photo
      console.log("Is empty")
      res = [{ path: "/assets/noavailablephoto.jpg"}] //HACKY WAY TO SHOW GIVE RESIDENCE WITHOUT A PHOTO AN UNAVAILBLE PHOTO
    }
    console.log(res)
    setResidencePhotos(res)
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
    residencePhotos,
    setResidencePhotos,
    getPhotosByResidenceId
  }

  return (
    <PhotoContext.Provider value={values}>
      {props.children}
    </PhotoContext.Provider>
  )
}