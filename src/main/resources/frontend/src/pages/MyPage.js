import React, { useState, useContext, useEffect } from 'react'
import { Container, Row, Col } from 'reactstrap';
import { UserContext } from '../contexts/UserContextProvider'
import { BookingContext } from '../contexts/BookingContextProvider'
import {
  Card, CardTitle, CardText,
  CardSubtitle, CardBody
} from 'reactstrap';
import moment from 'moment'
import SetResidence from '../components/SetResidence';

const MyPage = (props) => {
  const [ message, setMessage ] = useState('');
  const { user } = useContext(UserContext);
  const { bookings, getBookings, removeBooking } = useContext(BookingContext)

  useEffect(() => {
    if (user !== null) {
      getBookings(user.id);
    } 
  }, [])

  const timeFormat = (time) => {
    return moment(time).format("YYYY-MM-DD");
  }
  
  let myBooking;
  if (bookings) {
 
    myBooking = bookings.map((booking, i) => {
      return(
        <Col xs="12" sm="12" md="6" key={'book' + booking.id + i}> 
          <Card className="m-2">
            <CardBody className="bg-light border border-info">
              <CardTitle>
                  <p>Bokningstid: {moment(booking.time_stamp).format("YYYY-MM-DD H:mm")}</p>
                  <h3 className="mt-4 text-info"> 
                  <span>{booking.residenceInfo.street_number} </span> 
                  <span>{booking.residenceInfo.street_name}, </span> 
                  <span>{booking.residenceInfo.city}</span></h3>
              </CardTitle>
              <CardSubtitle><h5 className="mt-2 text-muted"> 
                  <span>{booking.residenceInfo.zip_code} </span>
                  <span>{booking.residenceInfo.region}, </span> 
                  <span>{booking.residenceInfo.country}</span></h5>
              </CardSubtitle>
              <hr/>
              <CardSubtitle>
                  <h4>Totalpris: {booking.total_price} Kr</h4>
              </CardSubtitle>
              <CardText>
                  Startdatum: <span className="text-info">{timeFormat(booking.start_date)}</span> <br/>
                  Slutdatum: <span className="text-info">{timeFormat(booking.end_date)}</span>
              </CardText>
              <hr/>
              <button className="btn btn-outline-danger" onClick={()=>removeBooking(booking.id)}>Avboka</button>
            </CardBody>
          </Card>   
        </Col>     
      )
    })
  } 


  return (
    <Container>
        <Row>
          <Col xs="12" sm="12" md="12" className="mt-5">
            <h4 className="text-secondary">Välkommen</h4>
            {user&&(
              <h4 className="text-info"><span>{user.first_name}</span> <span>{user.last_name}</span></h4>
            )}            
            <hr/>
          </Col>
        </Row>
        <h4 className="text-secondary nav-link">Minbokning</h4>
        <hr/>
        <Row>              
           {myBooking}
        </Row>
        <Row>
          <SetResidence></SetResidence>
        </Row>
        <Row>
          <Col>
            <a href="/new-residence" className="nav-link">
              <h4 className="text-secondary">Ny bostad</h4>
            </a>
          </Col>
        </Row>
    </Container>
  )
}

export default MyPage
