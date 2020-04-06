import React, { useState, useContext } from 'react'
import { Alert, Row, Col, Button, ButtonGroup, Form, FormGroup, Label, Input } from 'reactstrap'
import Select from 'react-select';

import { ResidenceCon } from '../contexts/ResidenceConProvider'
import { AddressContext } from '../contexts/AddressContextProvider'
import { withRouter } from 'react-router-dom'
import { CityContext } from '../contexts/CityContextProvider'
import { AmenityContext } from '../contexts/AmenityContextProvider'
import { AmenitiesResidencesIdCon } from '../contexts/AmenitiesResidencesIdConProvider'
import { PhotoContext} from '../contexts/PhotoContextProvider'

function NewResidence(props) {
    const { appendResidence } = useContext(ResidenceCon)
    const { appendAddress } = useContext(AddressContext)  
    const { appendAmenityResidencesId } = useContext(AmenitiesResidencesIdCon)
    const { appendPhoto} = useContext(PhotoContext)
    const { cities } = useContext(CityContext)
    const { amenities } = useContext(AmenityContext)

    const [zip_code, setZipCode] = useState('');
    const [city_id, setCityId] = useState('');
    const [street_name, setStreetName] = useState('')
    const [street_number, setStreetNumber] = useState('')
    const [apartment_number, setStreetApartment] = useState('')
    const [rooms, setRooms] = useState('')
    const [max_guests, setMax_guests] = useState('')
    const [price, setPrice] = useState('')
    const [message, setMessage] = useState();
    const [ready, setReadyMessage] = useState();
    const [visible, setVisible] = useState(false);
    const [ready_visible, setReadyVisible] = useState(false);
    const [form_visible, setFormVisible] = useState(true);
    const onDismiss = () => setVisible(false);

    const [cSelected, setCSelected] = useState([]);
    const [rSelected, setRSelected] = useState(null);
 
    let images = []

    const filesChange = async fileList => {
        // handle file changes
        const formData = new FormData();

        if (!fileList.length) return;

        // append the files to FormData
        Array.from(Array(fileList.length).keys())
        .map(x => {
            formData.append("files", fileList[x], fileList[x].name);
        });

        let response = await fetch('/api/clearbnb/uploadfiles', {
            method: 'POST',
            body: formData
        }).catch(console.warn)

        response = await response.json()
        console.log(response);        
        images = response
    }

    var someArrayOfStrings =[];
    someArrayOfStrings.map(opt => ({
        label: opt,
        value: opt
    }));

    const addResidence = async (e) => {
        e.preventDefault()

        const datas = {
            city_id,
            street_name,
            street_number,
            apartment_number,
            rooms,
            max_guests,
            price
            }
        console.log(datas.city_id+'-'+datas.street_name+' '+datas.street_number+' '+datas.apartment_number+' '
                    +datas.rooms+'-'+datas.max_guests+' '+datas.price);

        if((!datas.city_id) || (!datas.street_name) || (!datas.street_number) ||
                            (!datas.rooms) || (!datas.max_guests) || (!datas.price)
            ) {
            setMessage('Alla fält är obligatoriska!');
            setVisible(true);
            return
        }

        const address = {
            city_id, 
            zip_code,
            street_name,
            street_number,
            apartment_number
        }

        // send new address to backend
        let res = await fetch('/api/clearbnb/addresses', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(address)
        })
        res = await res.json()

        console.log(res)
        var address_id = res.id;
        appendAddress(res)

        const residence = {
            address_id, 
            rooms,
            price,
            max_guests
        }

        // send new residence to backend
        let newres = await fetch('/api/clearbnb/allresidences', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(residence)
        })
        newres = await newres.json()
        var residence_id = newres.id;
        console.log(newres)

        appendResidence(newres)

        const amenities = cSelected;
        console.log('amenities:'+JSON.stringify(amenities));
        var start_date = 0; //Date.now();
        var end_date = 0; //Date.now();

        for(var i = 0; i < amenities.length; i++) {
            var amenity_id = amenities[i];
            const amenities_x_residences = {
                amenity_id,
                residence_id,
                start_date,
                end_date
            };   
            // send new residence to backend
            let newamxres = await fetch('/api/clearbnb/amxres', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(amenities_x_residences)
            })
            newamxres = await newamxres.json()
            appendAmenityResidencesId(newamxres)
        }

        //PHOTOS
        for(var i = 0; i < images.length; i++) {
            var photo_path = images[i];

            const photo = {
                residence_id, 
                path: photo_path
            }

            let photores = await fetch('/api/clearbnb/photos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(photo)
            })
            photores = await photores.json()
            
            appendPhoto(photores)
        }

        setReadyMessage('Bostaden är sparad');
        setReadyVisible(true);

        /*setStreetName('')
        setStreetNumber('')
        setStreetApartment('')
        setZipCode('')    
        setCityId('')
        setRooms('')
        setMax_guests('')
        setPrice('')
        setCSelected([]);
        filesChange('');*/
    }

    const CitiesSelect = () => {
        return (
            <div>
            <Select options={cities} onChange = {opt => setCityId(opt.value)} placeholder="Vilken ort?" isSearchable required />
            </div>
            )
    }

    const onCheckboxBtnClick = (selected) => {
        const index = cSelected.indexOf(selected);
        if (index < 0) {
        cSelected.push(selected);
        } else {
        cSelected.splice(index, 1);
        }
        setCSelected([...cSelected]);
    }

    const AmenitiesList = () => {
        return amenities.map((amenity, index) => {
            return (
            <Button outline className="ml-1" color="primary" key={index} onClick={() => onCheckboxBtnClick(amenity.id)} active={cSelected.includes(amenity.id)}>{amenity.name}
            </Button>
            )
        })
    }

  return (
    <div className="container">
        <Alert className="mb-1 ml-2 mr-sm-0 mb-sm-0" color="warning" isOpen={ready_visible}>{ready}</Alert>
      <h1>Ny bostad</h1>
      {/* in Vue: @submit="addResidence" */}
      <Form 
        onSubmit={addResidence}
        >
        <Row form>        
            <Col md={6}>
                <FormGroup>
                    <Label for="street_name">Ort</Label>
                    {CitiesSelect()}
                </FormGroup>
            </Col>
            <Col md={6}>
            <FormGroup>
                <Label for="zip_code">Postnummer</Label>
                <Input 
                    required
                    type="text" 
                    id="zip_code" 
                    placeholder=""
                    value={zip_code}
                    onChange={
                    e => setZipCode(e.target.value)
                    }
                />
                </FormGroup>
            </Col>
        </Row>
        <Row form>        
            <Col md={4}>
                <FormGroup>
                <Label for="street_name">Gata</Label>
                <Input 
                    required
                    type="text" 
                    id="street_name" 
                    placeholder=""
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
                    type="text" 
                    id="apartment_number" 
                    placeholder=""
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
                    value={rooms}
                    onChange={
                    e => setRooms(e.target.value)
                    }
                />
                </FormGroup>
            </Col>
            <Col md={4}>
                <FormGroup>
                    <Label for="max_guests">Hur många gäster?</Label>
                    <Input
                    value={max_guests}
                    onChange={e=>setMax_guests(e.target.value)} 
                    type="text"
                    id="max_guests"
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
                    value={price}
                    onChange={
                    e => setPrice(e.target.value)
                    }
                />
                </FormGroup>
            </Col>
        </Row>
        <FormGroup>
            <Row form>
                <Col md={12}>
                    <ButtonGroup>
                        <AmenitiesList></AmenitiesList>
                    </ButtonGroup>
                </Col>
            </Row>
        </FormGroup>
        <FormGroup className="m-3">
          <Label for="files">Ladda upp bilder (Max 1 MB filstorlek):</Label>
          <Input 
            type="file" 
            name="files"
            id="files" 
            accept=".png,.jpg,.jpeg,.gif,.bmp,.jfif" 
            multiple 
            required
            onChange={e => filesChange(e.target.files)}
            />
          </FormGroup>
        <Button color="info" size="mg">Spara bostad</Button>
        <Alert className="mb-1 ml-2 mr-sm-0 mb-sm-0" color="warning" isOpen={visible} toggle={onDismiss}>{message}</Alert>
      </Form>     
    </div>
  )
}

export default withRouter(NewResidence)