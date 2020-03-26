import React from 'react';
import FrontPageMenu from '../components/FrontPageMenu'

const Home = () => {
  return (
    <div className="frontpage-splash">
      <div className="d-lg-none"> {/*MOBILE-TABLET MODE */}
        <FrontPageMenu />
      </div>
      <div> {/*DESKTOP MODE */}
        
      </div>
    </div>
  )
}

export default Home;