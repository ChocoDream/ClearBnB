import React, { createContext, useState } from 'react'

export const BookingContext = createContext()

const BookingContextProvider = (props) => {
  const [bookings, setBookings] = useState([])

  //Get Data from API
  const getBookings = async (id) => {
    let res = await fetch('/api/clearbnb/bookingsbyuserid/' + id)
    res = await res.json()
    setBookings(res)
  }

  const addBooking = (booking) => {
    setBookings([...bookings, booking])
  }

  const values = {
    bookings,
    getBookings,
    addBooking
  }

  return (
    <BookingContext.Provider value={values}>
      {props.children}
    </BookingContext.Provider>
  )
}

export default BookingContextProvider