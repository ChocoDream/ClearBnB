import React, { useState, useContext } from 'react'
import { Alert, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap'
import Select from 'react-select';

import { ResidenceContext } from '../contexts/ResidenceContextProvider'
import { withRouter } from 'react-router-dom'
import { CityContext } from '../contexts/CityContextProvider'

function NewResidence(props) {
  const { appendResidence } = useContext(ResidenceContext)
  const [city_id, setCityId] = useState('');
  const [street_name, setStreetName] = useState('')
  const [street_number, setStreetNumber] = useState('')
  const [apartment_number, setStreetApartment] = useState('')
  const [rooms, setRooms] = useState('')
  const [count_person, setCountPerson] = useState('')
  const [price, setPrice] = useState('')
  //const [amenities, setAmenities] = useState('')
  const [message, setMessage] = useState();
  const [visible, setVisible] = useState(false);
  const onDismiss = () => setVisible(false);

  const { cities } = useContext(CityContext)
  
  var someArrayOfStrings =[];
  someArrayOfStrings.map(opt => ({
      label: opt,
      value: opt
  }));

  const addResidence = async (e) => {
    e.preventDefault()

    const datas = {
        //region,
        //city,
        city_id,
        street_name,
        street_number,
        apartment_number,
        rooms,
        count_person,
        price
        }
    console.log(datas.city_id+'-'+datas.street_name+' '+datas.street_number+' '+datas.apartment_number+' '
                +datas.rooms+'-'+datas.count_person+' '+datas.price);

    if((!datas.city_id) || (!datas.street_name) || (!datas.street_number) || (!datas.apartment_number) 
                        || (!datas.rooms) || (!datas.count_person) || (!datas.price)
        ) {
        setMessage('Alla fält är obligatoriska!');
        setVisible(true);
        return
    }

    const residence = {
      city_id, 
      rooms,
      count_person,
      price
    }

    // send new residence to backend
    /*let res = await fetch('/api/clearbnb/residences', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(residence)
    })
    res = await res.json()

    console.log(res)*/
    
    //appendResidence(res)

    setStreetName('')
    setStreetNumber('')
    setStreetApartment('')
    setCityId('')
    setRooms('')
    setRooms('')
    setCountPerson('')
    setCountPerson('')

    props.history.push('/')
  }

  const CitiesSelect = () => {
    return (
      <div className="reactSelectDd">
        <Select options={cities} onChange = {opt => setCityId(opt.value)} placeholder="Vilken ort?" isSearchable required />
      </div>
      )
  }

  return (
    <div className="container">
      <h1>Ny bostad</h1>
      {/* in Vue: @submit="addResidence" */}
      <Form 
        onSubmit={addResidence}>
        <FormGroup>
            <Label for="street_name">Ort</Label>
            {CitiesSelect()}
        </FormGroup>
        <Row form>        
            <Col md={4}>
                <FormGroup>
                <Label for="street_name">Gata</Label>
                <Input 
                    required
                    type="text" 
                    id="street_name" 
                    placeholder=""
                    // in Vue: v-model="title"
                    value={street_name}
                    onChange={
                    e => setStreetName(e.target.value)
                    }
                />
                </FormGroup>
            </Col>
            <Col md={4}>
                <FormGroup>
                <Label for="street_number">Husnummer</Label>
                <Input
                    required
                    type="text" 
                    id="street_number" 
                    placeholder=""
                    // in Vue: v-model="title"
                    value={street_number}
                    onChange={
                    e => setStreetNumber(e.target.value)
                    }
                />
                </FormGroup>
            </Col>
            <Col md={4}>
                <FormGroup>
                <Label for="apartment_number">Lägenhet</Label>
                <Input
                    required
                    type="text" 
                    id="apartment_number" 
                    placeholder=""
                    // in Vue: v-model="title"
                    value={apartment_number}
                    onChange={
                    e => setStreetApartment(e.target.value)
                    }
                />
                </FormGroup>
            </Col>
        </Row>
        <Row form>        
            <Col md={4}>
                <FormGroup>
                    <Label for="rooms">Hur många room?</Label>
                    <Input 
                    required
                    type="text" 
                    id="rooms"
                    // in Vue: v-model="title"
                    value={rooms}
                    onChange={
                    e => setRooms(e.target.value)
                    }
                />
                </FormGroup>
            </Col>
            <Col md={4}>
                <FormGroup>
                    <Label for="rooms">Hur många gäster?</Label>
                    <Input
                    value={count_person}
                    onChange={e=>setCountPerson(e.target.value)} 
                    type="text"
                    id="count_person"
                    required  />
                </FormGroup>
            </Col>
            <Col md={4}>
                <FormGroup>
                <Label for="price">Pris</Label>
                <Input 
                    required
                    type="text" 
                    id="price" 
                    placeholder=""
                    // in Vue: v-model="title"
                    value={price}
                    onChange={
                    e => setPrice(e.target.value)
                    }
                />
                </FormGroup>
            </Col>
        </Row>
        <FormGroup row>
        <Label for="exampleSelectMulti" sm={2}>Amenities</Label>
        <Col sm={10}>
          <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
            <option>Wifi</option>
            <option>Badkar</option>
            <option>lorem ipsum</option>
            <option>lorem ipsum</option>
            <option>lorem ipsum</option>
          </Input>
        </Col>
      </FormGroup>
        <Button color="info" size="mg">Spara bostad</Button>
        <Alert className="mb-1 ml-2 mr-sm-0 mb-sm-0" color="warning" isOpen={visible} toggle={onDismiss}>{message}</Alert>
      </Form>
    </div>
  )
}

export default withRouter(NewResidence)