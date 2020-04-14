import React, { useContext, useEffect, useState } from 'react';
import { ResidenceContext } from '../contexts/ResidenceContextProvider';
import { Container, Button, Row, Col } from 'reactstrap';
import { useParams, Link } from 'react-router-dom';

import AmenityList from '../components/AmenitiesList';

const ResidencePage = () => {
  let {id} = useParams();

  const { residence, getResidence } = useContext(ResidenceContext);
  const [residencePhotos, setResidenceGallery] = useState([])

  useEffect(() => {
    // Run! Like go get some data from an API.
    getPhotosByResidenceId();
  }, []);

  const getPhotosByResidenceId = async () => {
    let res = await fetch('/api/clearbnb/photosByResidenceId/' +id)
    res = await res.json()
    if (res.length === 0) { //If residence contains no photo
      console.log("Is empty")
      res = [{ path: "/assets/noavailablephoto.jpg"}] //HACKY WAY TO SHOW GIVE RESIDENCE WITHOUT A PHOTO AN UNAVAILBLE PHOTO
    }
    const gallery = Array.from(Array(res.length).keys())
            .map(x => {
            console.log(res[x].id);
                            
            return (<Col key={res[x].id} >
                      <img width="150px" height="150px" src={res[x].path} />
                    </Col>)
      });
    setResidenceGallery(gallery);
  }

  return (
    <Container>
      <Row>
        <Col>
          <Container><Row>{residencePhotos}</Row></Container>
          <h2 className="mt-4"> {residence.street_name}, {residence.city} </h2>
          <h4 className="mt-2 text-muted"> {residence.region}, {residence.country} </h4>
          <Link to="/create-booking">
          <Button color="primary" size="lg" block>Boka</Button>
          </Link>
          {/*ANVÄNDARE HÄR */}
          <h3 className="mt-3 mb-2"><b>{residence.price} kr</b> natt</h3>
          <h2>Information om boendet</h2>
          <AmenityList />

        </Col>
      </Row>
    </Container>
  )
}

export default ResidencePage;