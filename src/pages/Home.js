import React from 'react';
import NavMenu from '../components/NavMenu';
import FrontPageBookingMenu from '../components/FrontpageBookingMenu'

const Home = () => {
  return (
    <div>
      <NavMenu></NavMenu>
      <div className="d-lg-none"> {/*MEDIUM-SMALL DEVICES (mobile)*/}
        <FrontPageBookingMenu />
      </div>
    </div>
  )
}

export default Home;