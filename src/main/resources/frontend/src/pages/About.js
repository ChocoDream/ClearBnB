import React from 'react';
import AmenitiesList from '../components/AmenitiesList';
import {
  Container, 
  Row } from 'reactstrap';

const About = () => {
  return (
    <div>
        <div>
          <Container>
          <Row>
            <p>THIS IS THE ABOUT PAGE</p>
            </Row>
          </Container>
          <AmenitiesList />
          </div>
    </div>
  )
}

export default About;