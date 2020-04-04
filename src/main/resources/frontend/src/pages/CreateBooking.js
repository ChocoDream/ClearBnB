import React, { useContext } from 'react';
import { ResidenceContext } from '../contexts/ResidenceContextProvider';

const CreateBooking = () => {
  const { residence } = useContext(ResidenceContext);
  
  return (
    <div>
      <h2>THIS IS THE BOOKING PAGE</h2>
      <h3>WILL CONTAIN INFORMATION ABOUT THE CURRENT SELECTED RESIDENCE</h3>
      <h3> {residence.street_name} gatunamn </h3>
      <h3> {residence.city} stad </h3>
    </div>
  )
}

export default CreateBooking;