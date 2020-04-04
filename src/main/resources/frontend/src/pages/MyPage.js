import React, { useState, useContext, useEffect } from 'react'
import { Container, Row, Col } from 'reactstrap';
import { UserContext } from '../contexts/UserContextProvider'
import {
  Card, CardTitle, CardText,
  CardSubtitle, CardBody,
} from 'reactstrap';

const MyPage = (props) => {
  const [ bookings, setBookings ] = useState();
  const [ message, setMessage ] = useState('');
  const { user } = useContext(UserContext);

  const getBookings = async (id) => {
    let res = await fetch('/api/clearbnb/bookingsbyuserid/' + id)
    res = await res.json()
    setBookings(res)
  }

  useEffect(() => {
    if (user !== null) {
      getBookings(user.id);
    } else {
      setMessage('Du har inga bokningar!')
    }
  }, [user])

  console.log(bookings);
  
  let myBooking;
  if (bookings) {
    myBooking = bookings.map((booking) => {
        return(
          <>
            <li>{booking.user.first_name}</li>
          </>
        )
    })
  }

  return (
    <Container className="container">
        <Row>
          <Col className="mt-5">
            <h4>Välkommen</h4>
            {/* <h4><span>{user.first_name}</span> <span>{user.last_name}</span></h4> */}
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            {myBooking}
          </Col>
          <Col xs="12" sm="8">Column</Col>
        </Row>
        <Row>
          <Col xs="12" sm="4">Column</Col>
          <Col xs="12" sm="8">Column</Col>
        </Row>
    </Container>
  )
}

export default MyPage
