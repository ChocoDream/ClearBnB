import React, { useState, useContext } from 'react';
import {Button, Form, Input, FormGroup } from 'reactstrap';
import Select from 'react-select';
import { ResidenceContext } from '../contexts/ResidenceContextProvider'
import { CityContext } from '../contexts/CityContextProvider'

const FrontPageMenuDesktop = () => {
  const { setResidences } = useContext(ResidenceContext)

  const [region, setRegion] = useState('')
  const [city, setCity] = useState('')
  const [start_date, setStartDate] = useState('')
  const [end_date, setEndDate] = useState('')
  const [count_person, setCountPerson] = useState('')
  const [city_id, setCityId] = useState('');
  const { setResidence } = useContext(ResidenceContext)

  const { cities } = useContext(CityContext)

  var someArrayOfStrings =[];
  someArrayOfStrings.map(opt => ({
      label: opt,
      value: opt
  }));

  const doSearch = async() => {
    const datas = {
                  region,
                  city,
                  city_id,
                  start_date,
                  end_date,
                  count_person
                  }
    console.log(datas.city_id+' '+datas.city+'-'+datas.start_date+'-'+datas.end_date+' person:'+datas.count_person);

    let res;
    if((!datas.city_id) && (!datas.start_date)) {
      res = await fetch('/api/clearbnb/residences')
    } else {
      res = await fetch('/api/clearbnb/residenceSearch/'+datas.city_id+'/'+datas.start_date+'/'+datas.end_date+'/'+datas.count_person+'')
    }
    res = await res.json()
    setResidences(res)
  }
  const CitiesSelect = () => {
    return (
      <div className="reactSelectDd">
        <Select options={cities} onChange = {opt => setCityId(opt.value)} placeholder="Vart vill du åka?" isSearchable required />
      </div>
      )
  }
 
  return (
    <div className="d-flex justify-content-center">
      <Form className="bg-secondary rounded p-2 form-inline" style={{marginTop: '5%'}}>
          <FormGroup>
            {CitiesSelect()}
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Input
              value={start_date} 
              onChange={e=>setStartDate(e.target.value)} 
              type="text" name="start_date" 
              id="start_date"
              placeholder="Startdatum"
              required/>
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Input
              value={end_date} 
              onChange={e=>setEndDate(e.target.value)} 
              type="text" name="end_date" 
              id="end_date" 
              placeholder="Slutdatum"
              required/>
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Input
              value={count_person} 
              onChange={e=>setCountPerson(e.target.value)} 
              type="count_person" name="count_person" 
              id="count_person" 
              placeholder="Hur många gäster?"
              required/>
          </FormGroup>
          <Button onClick={doSearch} color="info" size="lg" >Sök</Button>
      </Form>
    </div>
  )
}

export default FrontPageMenuDesktop