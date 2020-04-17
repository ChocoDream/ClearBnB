import React, { useState, useContext, useEffect } from 'react';
import { ResidenceContext } from '../contexts/ResidenceContextProvider';
import { UserContext } from '../contexts/UserContextProvider';
import { BookingContext } from '../contexts/BookingContextProvider';
import { Link } from 'react-router-dom'
import { Container, Card, CardTitle, CardText, CardSubtitle, CardBody, Row, Col, Input, InputGroup, Alert} from 'reactstrap';
import DatePicker from 'react-datepicker'
import moment from 'moment'
import { addDays, sv } from 'date-fns'
import 'react-datepicker/dist/react-datepicker.css'

const CreateBooking = (props) => {
  const today = new Date();
  const tomorrow = today.setDate(today.getDate()+1);
  const { residence } = useContext(ResidenceContext);
  const { user } = useContext(UserContext);
  const { addBooking } = useContext(BookingContext); 
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(tomorrow);
  const [guestsNumber, setGuestsNumber] = useState(1)
  const [totalPrice, setTotalPrice] = useState()
  const [totalDays, setTotalDays] = useState(1)
  const [message, setMessage] = useState('')
  const [bookedDates, setBookedDates] = useState()

  const countDays=(start, end)=>{
    let diff = end - start
    setTotalDays(Math.round(diff/86400000))
  }

  const countPrice=(days, guests, price)=>{
    let total = days*guests*price
    setTotalPrice(total)
  }

  const getBookings = async () => {
    let res = await fetch('/api/clearbnb/bookings/')
    res = await res.json()
    let dates = []   
    res.map((d) => {
      let s = d.start_date, e = d.end_date
      if (residence.id === d.residenceInfo.id) {
      while(s<=e){   
        dates.push(s)
          s+=86400000
        }
      }
    })
    setBookedDates(dates)
  }


  useEffect(()=>{
     getBookings()  
     setTotalPrice(residence.price*residence.max_guests)
     countDays(startDate, endDate)
     countPrice(totalDays, guestsNumber, residence.price)   
  }, [residence.price, residence.max_guests, startDate, endDate, totalDays, guestsNumber])
 
  const createBooking = async() => {  
    if(!user) props.history.push("/user-login");    
    const myBoking = {
      start_date: +moment(startDate).format('x'),
      end_date: +moment(endDate).format('x'),
      time_stamp: Date.now(),
      total_price: totalPrice,
      total_guests: guestsNumber,
      is_active: true,
      user,
      residenceInfo: residence
    }
    
    let res = await fetch('/api/clearbnb/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(myBoking)
    })
    res = await res.json()
    addBooking(res)
    setMessage('Du har bokat bostaden!')
    props.history.push("/mypage");  
  } 
  
  if (user !== null) {
  return (
    <Container className="mt-5">
      <Row className="p-1">
        <Col>
          <Card xs="12" sm="7">
            <CardBody className="bg-light border border-light">
              <CardTitle><h3 className="mt-4 text-info"> 
                  <span>{residence.street_number} </span> 
                  <span>{residence.street_name}, </span> 
                  <span>{residence.city}</span></h3>
              </CardTitle>
              <CardSubtitle><h5 className="mt-2 text-muted"> 
                  <span>{residence.zip_code} </span>
                  <span>{residence.region}, </span> 
                  <span>{residence.country}</span></h5>
                  <p>Max antal gäster: {residence.max_guests}</p>
              </CardSubtitle>
              <hr/>
              <CardText>
                  <span className="text-secondary"
                   style={{fontSize:"24px"}} 
                  >{residence.price} kr/natt</span>
              </CardText>
            </CardBody>
          </Card>
        </Col> 
        <Col xs="12" sm="5">
          <Card>
            <CardBody className="bg-light border border-light">
            <Row className="mt-3">             
              <Col xs="12" sm="6"> 
              <h5 className="text-info d-block">Datum</h5>              
                <DatePicker
                  className="pl-2 pr-3 py-1 text-info"
                  locale="sv"
                  selected={startDate}
                  minDate={new Date()}
                  onChange={date => {
                    setStartDate(date)
                    setEndDate(addDays(date, 1))
                  }}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  dateFormat="yyyy-MM-dd"
                  excludeDates={bookedDates}
                />
              </Col>
              <Col xs="12" sm="5" className="pl-sm-0 ml-0">
              <span className="text-muted d-block mt-2">Slutdatum</span>
                <DatePicker
                  className="pl-3 pr-1 py-1 text-info"
                  locale="sv"
                  selected={endDate}
                  onChange={date => setEndDate(+date)}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={endDate}
                  dateFormat="yyyy-MM-dd"
                  excludeDates={bookedDates}
                />                             
              </Col>
            </Row>
            <Row className="mt-3">
              <Col xs="6" sm="6">   
              <h5 className="text-info">Antal gäster</h5>
                <InputGroup>
                  <Input 
                    style={{width: '100px', paddingLeft: '9px'}} 
                    type="number"
                    placeholder={1}
                    min={1} max={residence.max_guest}
                    onChange={(e)=> {
                      e.target.value>residence.max_guests?(
                        setGuestsNumber(residence.max_guests))
                        :(setGuestsNumber(e.target.value))
                        setTotalPrice(guestsNumber*residence.price*totalDays)
                    }}/>
                </InputGroup>               
              </Col>          
              <Col xs="6" sm="6">   
              <h5 className="text-info">Antal nätter</h5>
                <InputGroup>
                  <Input placeholder={totalDays} readOnly className="bg-white"/>
                </InputGroup>
              </Col>          
            </Row>
            <Row className="mt-3">
              <Col xs="12" sm="12">   
                <h5 className="text-info">Totalpris</h5>
                <div>
                  <span className="text-muted">Avgift (15%) ingår  {totalPrice*15/100}.00 Kr</span>
                </div>
                <div className="d-flex justify-content-between bg-white pt-2 px-1 text-dark border">
                   <h6>{residence.price} x {guestsNumber} gäster</h6>
                   <h6 className="">{totalPrice}.00  Kr</h6>
                </div>
              </Col>             
            </Row>    
              <hr/>
              <Link to="/" className="btn btn-outline-info float-left">Tillbaka</Link>
              <button 
                className="btn btn-outline-success float-right px-5" 
                onClick={()=> createBooking()}>Boka
              </button>
            </CardBody>
          </Card>
        </Col>     
      </Row>      
    </Container>
  )} else { return ( 
    <div className="container">
     <Alert className="text-secondary bg-warning">Du måster logga in!</Alert>
    </div>)
  }
}

export default CreateBooking;