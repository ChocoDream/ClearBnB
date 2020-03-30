import React, {useContext} from 'react';
import FrontPageMenuMobile from '../components/FrontPageMenuMobile.js';
import FrontPageMenuDesktop from '../components/FrontPageMenuDesktop';
import {ResidenceContext} from '../contexts/ResidenceContextProvider'

const Home = () => {
  const {residences} = useContext(ResidenceContext)
  // const residence = residences.map(r => r.city)
  console.log(residences);

  return (
    <div className="frontpage-splash">
      <div className="d-lg-none"> {/*MOBILE-TABLET MODE */}
        <FrontPageMenuMobile />
      </div>
      <div className="d-none d-lg-block"> {/*DESKTOP MODE */}
        <FrontPageMenuDesktop />
      </div>
    </div>
  )
}

export default Home;