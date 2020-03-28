import React, { useContext } from 'react';
import {ResidenceContext} from '../contexts/ResidenceContextProvider'

const Home = () => {
  const {residences} = useContext(ResidenceContext)
  console.log(residences);
  const residence = residences.map(r=>{
    return (
      <div>
        <h4>{r.rooms}</h4>
      </div>
    )
  })

  return (
    <div className="container text-primary">
      <p>HELLO WORLD FROM HOME.</p>
      <p>{residence}</p>
    </div>
  )
}

export default Home;