import React from 'react';
import AmenitiesList from '../components/AmenitiesList';
import {
  Container } from 'reactstrap';

const About = () => {
  return (
    <div>
      <p>THIS IS THE ABOUT PAGE</p>
        <div>
          <Container>
            <AmenitiesList/>
          </Container>
          </div>
    </div>
  )
}

export default About;