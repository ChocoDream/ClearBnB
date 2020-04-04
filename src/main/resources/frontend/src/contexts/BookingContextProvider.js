import React, { createContext, useState, useEffect } from 'react'

export const BookingContext = createContext()

const BookingContextProvider = (props) => {
  const [bookings, setBookings] = useState([])

  //Get Data from API
  const getBookings = async (id) => {
    let res = await fetch('/api/clearbnb/bookingsbyuserid/' + id)
    res = await res.json()
    setBookings(res)
  }

  const values = {
    bookings,
    getBookings
  }

  return (
    <BookingContext.Provider value={values}>
      {props.children}
    </BookingContext.Provider>
  )
}

export default BookingContextProvider