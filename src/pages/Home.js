import React from 'react';
import FrontPageMenuMobile from '../components/FrontPageMenuMobile.js';
import FrontPageMenuDesktop from '../components/FrontPageMenuDesktop';
import {ResidenceContext} from '../contexts/ResidenceContextProvider'

const Home = () => {
  const residencesInfo = useContext(ResidenceContext)
  console.log(residencesInfo);

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