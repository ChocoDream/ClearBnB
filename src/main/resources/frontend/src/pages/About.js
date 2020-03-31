import React from 'react';
import AmenitiesList from '../components/AmenitiesList';
import {
  Container, 
  Row } from 'reactstrap';

const About = () => {
  return (
    <div>
      <p>THIS IS THE ABOUT PAGE</p>
        <div>
          <Container>
            <Row><AmenitiesList /></Row>
          </Container>
          </div>
    </div>
  )
}

export default About;