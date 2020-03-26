import React from 'react';
import FrontPageMenuMobile from '../components/FrontPageMenuMobile.js';
import FrontPageMenuDesktop from '../components/FrontPageMenuDesktop';

const Home = () => {
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