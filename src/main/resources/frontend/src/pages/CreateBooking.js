import React, { useState, useContext, useEffect } from 'react';
import { ResidenceContext } from '../contexts/ResidenceContextProvider';
import { UserContext } from '../contexts/UserContextProvider';
import { BookingContext } from '../contexts/BookingContextProvider';
import { Container, Card, CardTitle, CardText, CardSubtitle, CardBody, Row, Col, Input, InputGroup, InputGroupAddon} from 'reactstrap';
import DatePicker from 'react-datepicker'
import addDays from 'date-fns/addDays'
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

  const countDays=(start, end)=>{
    let diff = end - start
    setTotalDays(Math.round(diff/86400000))
  }

  const countPrice=(days, guests, price)=>{
    let total = days*guests*price
    setTotalPrice(total)
  }

  const booked = date => {
    
  };

  useEffect(()=>{
     setTotalPrice(residence.price*residence.max_guests)
     countDays(startDate, endDate)
     countPrice(totalDays, guestsNumber, residence.price)
  }, [])
 

  //Function to Create Booking
  const createBooking = async() => {  
    if(!user) props.history.push("/user-login");    
    const myBoking = {
      start_date: startDate,
      end_date: endDate,
      time_stamp: Date.now(),
      total_price: totalPrice,
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
  }    
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
        {/* CALENDAR & ANTAL GÄSTER */}
        <Col xs="12" sm="5">
          <Card>
            <CardBody className="bg-light border border-light">
            <Row className="mt-3">
             
              <Col xs="12" sm="6"> 
              <h5 className="text-info d-block">Datum</h5>              
                <DatePicker
                  className="pl-2 pr-3 py-1 text-info"
                  selected={startDate}
                  minDate={startDate}
                  onChange={date => {
                    setStartDate(date)
                    setEndDate(addDays(date, 1))
                  }}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  dateFormat="yyyy-MM-dd"
                />
              </Col>
              <Col xs="12" sm="5" className="pl-sm-0 ml-0">
              <h5 className="text-light d-block">...</h5>
                <DatePicker
                  className="pl-3 pr-1 py-1 text-info"
                  selected={endDate}
                  onChange={date => setEndDate(date)}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                  dateFormat="yyyy-MM-dd"
                />                             
              </Col>
            </Row>

            <Row className="mt-3">
              <Col xs="6" sm="6">   
              <h5 className="text-info">Antal gäster</h5>
                <InputGroup>
                  <Input 
                    style={{width: '100px', paddingLeft: '9px'}} 
                    placeholder={residence.max_guest} 
                    min={1} max={residence.max_guest} type="number"
                    onChange={(e)=> {
                        setGuestsNumber(e.target.value)
                        setTotalPrice(guestsNumber*residence.price*totalDays)
                     }
                    }/>
                </InputGroup>               
              </Col>          
              <Col xs="6" sm="6">   
              <h5 className="text-info">Antal nätter</h5>
                <InputGroup>
                  <Input placeholder={totalDays} />
                </InputGroup>
              </Col>          
            </Row>
            <Row className="mt-3">
              <Col xs="12" sm="12">   
                <h5 className="text-info">Totalpris</h5>
                <p>Avgift (15%) </p>
                <p>{totalPrice}</p>
                {/* <InputGroup>
                  <Input placeholder={totalPrice} value={totalPrice}/>
                  <InputGroupAddon addonType="append"> Kr</InputGroupAddon>
                </InputGroup> */}
              </Col>             
            </Row>    
              <hr/>
              <button className="btn btn-outline-info float-left">Tillbaka</button>
              <button 
                className="btn btn-outline-success float-right px-5" 
                onClick={()=> createBooking()}>Boka
              </button>
            </CardBody>
          </Card>
        </Col>     
      </Row>
      
    </Container>
  )
}

export default CreateBooking;