import React, { useContext } from 'react';
import { ResidenceContext } from '../contexts/ResidenceContextProvider';
import { UserContext } from '../contexts/UserContextProvider';
import { BookingContext } from '../contexts/BookingContextProvider';
import { Container, Button } from 'reactstrap'

const CreateBooking = () => {
  const { residence } = useContext(ResidenceContext);
  const { user } = useContext(UserContext);
  const { addBooking } = useContext(BookingContext);

  const createBooking = async() => {    
    const myBoking = {
      start_date: 1586102049,
      end_date: 1586188449,
      time_stamp: 1586187695,
      total_price: 2321,
      user,
      residenceInfo: residence
    }

    let res = await fetch('/api/clearbnb/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(myBoking)
    })
    res = await res.json()
    addBooking(res)
  }
    
  return (
    <Container className="mt-5">
      <h2>THIS IS THE BOOKING PAGE</h2>
      <h3>WILL CONTAIN INFORMATION ABOUT THE CURRENT SELECTED RESIDENCE</h3>
      <h3> {residence.street_name} gatunamn </h3>
      <h3> {residence.city} stad </h3>
      <Button onClick={()=> createBooking()}>Boka</Button>
    </Container>
  )
}

export default CreateBooking;