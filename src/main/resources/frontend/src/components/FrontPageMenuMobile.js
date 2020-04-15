import React, { useState, useContext } from 'react';
import { Alert, Col, Row, Form, FormGroup, Input, Container } from 'reactstrap';
import Select from 'react-select';
import { ResidenceContext } from '../contexts/ResidenceContextProvider'
import { CityContext } from '../contexts/CityContextProvider'

const FrontPageMenuMobile = () => {
  const { setResidences } = useContext(ResidenceContext)

  //const [region, setRegion] = useState('')
  //const [city, setCity] = useState('')
  const [start_date, setStartDate] = useState('')
  const [end_date, setEndDate] = useState('')
  const [count_person, setCountPerson] = useState('')
  const [city_id, setCityId] = useState('');
  const [message, setMessage] = useState();

  const { cities } = useContext(CityContext)

  var someArrayOfStrings =[];
  someArrayOfStrings.map(opt => ({
      label: opt,
      value: opt
  }));

  const [visible, setVisible] = useState(false);

  const onDismiss = () => setVisible(false);

  const doSearch = async() => {
    const datas = {
                  //region,
                  //city,
                  city_id,
                  start_date,
                  end_date,
                  count_person
                  }
    console.log(datas.city_id+'-'+datas.start_date+'-'+datas.end_date+' person:'+datas.count_person);

    let res;
    if (datas.start_date > datas.end_date){
      setMessage('Felaktigt till datum.');
      setVisible(true);
      return
    }
    else if((!datas.city_id) || (!datas.start_date) || (!datas.end_date) || (!datas.count_person)) {
      res = await fetch('/api/clearbnb/residences')
      setMessage('Alla fält är obligatoriska!');
      setVisible(true);
    } else {
      res = await fetch('/api/clearbnb/residenceSearch/'+datas.city_id+'/'+datas.start_date+'/'+datas.end_date+'/'+datas.count_person+'')
    }
    res = await res.json()
    setResidences(res)
  }
  const CitiesSelect = () => {
    return (
      <div>
        <Select options={cities} onChange = {opt => setCityId(opt.value)} placeholder="Vart vill du åka?" isSearchable required />
      </div>
      )
  }
 
  return (
    <div>
    <Container className="pt-4 rounded d-lg-hide bg-secondary">
        <Form>
          <Row form>
            <Col sd={6}>
              <FormGroup>
                <Input value={start_date} 
                  onChange={e=>setStartDate(e.target.value)}
                  bsSize="lg" 
                  type="text" name="start_date" 
                  id="start_date"
                  placeholder="Startdatum"
                  required />
              </FormGroup>
            </Col>
            <Col sd={6}>
              <FormGroup>
                <Input value={end_date} 
                  onChange={e=>setEndDate(e.target.value)}
                  bsSize="lg" 
                  type="text" name="end_date" 
                  id="end_date" 
                  placeholder="Slutdatum"
                  required />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            {CitiesSelect()}
          </FormGroup>
          <FormGroup>
            <Input value={count_person} 
              onChange={e=>setCountPerson(e.target.value)}
              bsSize="lg"
              type="count_person" name="count_person" 
              id="count_person" 
              placeholder="Hur många gäster?"
              required/>
          </FormGroup>
          <Alert color="warning" isOpen={visible} toggle={onDismiss}>{message}</Alert>
          <span  onClick={doSearch} className="btn-lg btn-info d-block mb-4 text-center">Sök</span>
          <span className="btn-lg btn-info d-block mt-3 mb-3 text-center">Ny Medlem?</span>
          <span className="btn-lg btn-info d-block mt-3 mb-3 text-center">Logga in</span>
        </Form>
      <section className="d-flex 
      justify-content-between
      ">
        <p className="text-white">Glömt lösenord?</p>
        <p className="text-white">Om oss</p>
      </section>
      </Container>
    </div>
  )
};

export default FrontPageMenuMobile;