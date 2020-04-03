import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ResidenceContext } from '../contexts/ResidenceContextProvider';

const ResidencePage = () => {
  let { id } = useParams();
  
  return (
    <div>
      <h2 className="h2">Hello my old friend</h2>
      <h3>Hello from {id}</h3>
    </div>
  )
}

export default ResidencePage;