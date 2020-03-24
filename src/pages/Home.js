import React from 'react';
import FrontPageBookingMenuMobile from '../components/FrontpageBookingMenuMobile'

const Home = () => {
  return (
    <div className="frontpage-splash">
      <div className="d-lg-none"> {/*MEDIUM-SMALL DEVICES (mobile)*/}
        <FrontPageBookingMenuMobile />
      </div>
      <div className="d-lg"></div>
    </div>
  )
}

export default Home;