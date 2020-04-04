import React, { useState, useContext, useEffect } from 'react'
import { Container, Row, Col } from 'reactstrap';
import { UserContext } from '../contexts/UserContextProvider'
// import { BookingContext } from '../contexts/BookingContextProvider'

const MyPage = (props) => {
  const [ userId, setUserId ] = useState();
  const [ bookings, setBookings ] = useState();

  const { user } = useContext(UserContext)
  // const { bookings, getBookings } = useContext(BookingContext); 

  //Get Data from API
  const getBookings = async (id) => {
    let res = await fetch('/api/clearbnb/bookingsbyuserid/' + id)
    res = await res.json()
    setBookings(res)
  }

  useEffect(() => {

      getBookings(user.id);
    
  }, [])

  console.log(user);
  console.log(bookings);
  
  
  

  return (
    <div className="className">
      <Container>
        <Row>
          <Col className="mt-5">
            <h4>Välkommen</h4>
            {/* <h4><span>{user.first_name}</span> <span>{user.last_name}</span></h4> */}
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="4">
            <h4>Min bokning</h4>
            <h4>{}</h4>
          </Col>
          <Col xs="12" sm="8">Column</Col>
        </Row>
        <Row>
          <Col xs="12" sm="4">Column</Col>
          <Col xs="12" sm="8">Column</Col>
        </Row>
      </Container>
    </div>
  )
}

export default MyPage
