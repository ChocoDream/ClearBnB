import React, { useState, useContext, useEffect } from 'react'
import { UserContext } from '../contexts/UserContextProvider'
import { UncontrolledCollapse, Button, Alert, CardHeader,
         CardDeck, Card, CardBody, Container, Row, Col,
         CardTitle, CardText, CardSubtitle} from 'reactstrap'
import moment from 'moment'
const SetResidence = () => {
    const { user } = useContext(UserContext);
    const [ message, setMessage ] = useState('');
    const [ visible, setVisible] = useState(false);
    const [ bookingMessage, setBookingMessage ] = useState('');
    const [ bookingMessageVisible, setBookingMessageVisible] = useState(false);
    const [ residence_list, setResidenceList] = useState('');
    const [ booking_list, setBookingList] = useState('');    
    const onDismiss = () => setVisible(false);

    const timeFormat = (time) => {
        return moment(time).format("YYYY-MM-DD");
    }
    
    useEffect(() => {
        // Run! Like go get some data from an API.
            getResidence();
      }, []);

    const getResidence = async () => { 
        
        const getResidenceByOwner = async (owner_id) => {
            let res = await fetch('/api/clearbnb/residencesbyowner/' + owner_id)            
            res = await res.json();
            console.log(res)
            
            if (res.length == 0){
                setMessage('Inga sparade bostäder.');
                setVisible(true);
                return
            }
            const list = Array.from(Array(res.length).keys())
                .map(x => {
                console.log(res[x].id);
                                
                return (<Card key={res[x].id} >
                            <CardHeader> {res[x].city}, {res[x].region} Id [{res[x].id}]</CardHeader>
                            <CardBody>
                                <CardText className="text-muted"> {res[x].street_name} {res[x].street_number} </CardText>
                                <CardText className="text-muted">Max antal gäster: {res[x].max_guest}</CardText>
                                <CardText className="text-muted">Room: {res[x].rooms}</CardText>
                                <CardTitle className="h4 text-dark"> <b>{res[x].price} kr SEK /</b> natt </CardTitle>
                            </CardBody>
                        </Card>)
            });
            setResidenceList(list);
        }

        const getBookingByOwnerId = async (owner_id) => {
            let res = await fetch('/api/clearbnb/bookingsByOwnerId/' + owner_id)      
            res = await res.json();

            if (res.length == 0){
                setBookingMessage('Inga sparade bostäder.');
                setBookingMessageVisible(true);
                return
            }


            const bookingByOwnerId = Array.from(Array(res.length).keys())
                .map(x => {
                return (    <Card key={res[x].id}>     
                                    <CardHeader> {res[x].residenceInfo.city}, 
                                                 {res[x].residenceInfo.region} Id [{res[x].id}]</CardHeader>
                                    <CardBody>
                                    <Col>
                                        {timeFormat(res[x].start_date)} - {timeFormat(res[x].end_date)} 
                                    </Col>
                                    <Col>
                                        antal: {res[x].total_guests} 
                                        <svg className="bi bi-person" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M13 14s1 0 1-1-1-4-6-4-6 3-6 4 1 1 1 1h10zm-9.995-.944v-.002.002zM3.022 13h9.956a.274.274 0 00.014-.002l.008-.002c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664a1.05 1.05 0 00.022.004zm9.974.056v-.002.002zM8 7a2 2 0 100-4 2 2 0 000 4zm3-2a3 3 0 11-6 0 3 3 0 016 0z" 
                                            clipRule="evenodd"/>
                                        </svg>
                                    </Col>
                                    <Col>
                                        totalpris: {res[x].total_price} kr
                                    </Col>
                                    <Col>    
                                        email: {res[x].user.email}
                                    </Col>
                                    <Col>    
                                        aktiv: {(res[x].is_active == true) ? 'Ja' : 'Nej'}
                                    </Col>
                                    </CardBody>
                            </Card>)
            });        
            setBookingList(bookingByOwnerId)
        }

        /*var user_id;

        if (user_id== null){*/
            if (user !== null){
                var user_id=user.id;
                console.log(user.id)      
                getResidenceByOwner(user_id);
                getBookingByOwnerId(user_id);
            }
        //}
        
    }

    

  return (    
        <Col>
            <h4>
                <a href="" className="text-secondary nav-link mt-2" id="toggler" style={{ marginBottom: '1rem' }}>
                Mina bostäder
                </a>
            </h4>
            <UncontrolledCollapse toggler="#toggler" className="mt-2">
                <CardDeck>{residence_list}</CardDeck>
                <h5><a href="" className="text-secondary nav-link mt-2" id="bookingToggler" style={{ marginBottom: '1rem' }}>
                Alla bokningar
                </a></h5>
                <UncontrolledCollapse toggler="#bookingToggler" className="mt-2">
                    <CardDeck>{booking_list}</CardDeck>
                </UncontrolledCollapse>
                <Alert className="mb-1 ml-2 mr-sm-0 mb-sm-0" color="warning" isOpen={bookingMessageVisible} 
                    >{bookingMessage}</Alert>
            </UncontrolledCollapse>            
            <Alert className="mb-1 ml-2 mr-sm-0 mb-sm-0" color="warning" isOpen={visible} toggle={onDismiss}>{message}</Alert>
            <hr/>
        </Col>
    )

}

export default SetResidence