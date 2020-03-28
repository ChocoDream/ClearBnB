import React, { useContext } from 'react';
import {ResidenceContext} from '../contexts/ResidenceContextProvider'

const Home = () => {
  const {residences} = useContext(ResidenceContext)
  console.log(residences);
  const residence = residences.map(r=>{
    return (
      <div className="card p-3 my-2" key={r.id} style={{width: 18 + 'rem'}}>
        <h5>City: {r.city}</h5>
        <p>{r.street_name}</p>
        <p><span>{r.zip_code}</span> <span>{r.city}</span></p>
        <p>{r.country}</p>
      </div>
    )
  })

  return (
    <div className="container">
     <h3 className="my-4">CLEAR BNB</h3>
      <div className="row">
        <div className="col-lg-3">
          {residence}
        </div>
      </div>
    </div>
  )
}

export default Home;