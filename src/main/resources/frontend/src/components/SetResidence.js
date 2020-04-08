import React, { useState, useContext, useEffect } from 'react'
import { UserContext } from '../contexts/UserContextProvider'
import { withRouter } from 'react-router-dom'
import { UncontrolledCollapse, Button, Alert,
         CardDeck, Card, CardBody, Col,
         CardTitle, CardText, CardSubtitle} from 'reactstrap'

const SetResidence = () => {
    const { user } = useContext(UserContext);
    const [ message, setMessage ] = useState('');
    const [residence_list, setResidenceList] = useState('');
    const [visible, setVisible] = useState(false);
    const onDismiss = () => setVisible(false);

    const getResidence = async (e) => {
        e.preventDefault()
        
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
                return (<Card key={res[x].id}>
                            <CardBody>
                                <CardText className="text-muted">Max antal gäster: {res[x].max_guest} </CardText>
                                <CardSubtitle className="text-dark"> {res[x].city}, {res[x].region} </CardSubtitle>
                                <CardTitle className="h4 text-dark"> <b>{res[x].price} kr SEK /</b> natt </CardTitle>
                                <CardText className="text-dark">  </CardText>
                                <Button onClick={setResidenceStatus}>Inaktivära</Button>
                            </CardBody>
                        </Card>)
            });
            setResidenceList(list);
        }

        var user_id;

        if (user_id== null){
            if (user !== null){
                user_id=user.id;
                console.log(user.id)      
                getResidenceByOwner(user_id);
            }
        }
    }

    const setResidenceStatus = async (e) => {
    }

  return (    
        <Col>
            <h4>
                <a href="" className="text-secondary nav-link mt-2" onClick={getResidence} id="toggler" style={{ marginBottom: '1rem' }}>
                Mina bostäder
                </a>
            </h4>
            <UncontrolledCollapse toggler="#toggler" className="mt-2">
                <CardDeck>{residence_list}</CardDeck>
            </UncontrolledCollapse>
            <Alert className="mb-1 ml-2 mr-sm-0 mb-sm-0" color="warning" isOpen={visible} toggle={onDismiss}>{message}</Alert>
            <hr/>
        </Col>
    )

}

export default SetResidence