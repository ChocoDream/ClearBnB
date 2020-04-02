import React, {useContext} from 'react';
import FrontPageMenuMobile from '../components/FrontPageMenuMobile.js';
import FrontPageMenuDesktop from '../components/FrontPageMenuDesktop';
import Results from './Results.js';

const Home = () => {
  
  return (
    <div className="frontpage-splash">
      <div className="d-lg-none"> {/*MOBILE-TABLET MODE */}
        <FrontPageMenuMobile />
        <Results />
      </div>
      <div className="d-none d-lg-block"> {/*DESKTOP MODE */}
        <FrontPageMenuDesktop />
        <Results />
      </div>
    </div>
  )
}

export default Home;