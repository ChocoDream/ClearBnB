import React, { useState } from 'react';

const AmenitiesForResidenceList = (residenceId) => {
  const [amenities, setAmenities] = useState([]);
  //In here I'm going to find the amenities connected to right residence. Maybe I got to go in to backend
  //Read from AmentitiesResidencesConProvider to get the RxA, read from amenities from AmenityContextProvider
  //Residence I got from residenceId which mean this component will have an input data equal the residenId
  // Trying to make this lightweight and not code-heavy. 
  //TODO project after I have read the pictures in a carouel. 

  const list = () => {

  };

  return (
    <>
      {list}
    </>
  )
};

export default AmenitiesForResidenceList;