import React, { useContext } from 'react';
import {ResidenceContext} from '../contexts/ResidenceContextProvider'

const Home = () => {
  const residencesInfo = useContext(ResidenceContext)
  console.log(residencesInfo);

  return (
    <div className="container text-primary">
      <p>HELLO WORLD FROM HOME.</p>
    </div>
  )
}

export default Home;