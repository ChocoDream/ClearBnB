import React from 'react';
import { Col, Row, Form, FormGroup, Input, Container } from 'reactstrap';

const FrontPageBookingMenuMobile = () => {
  return (
    <Container className="pt-4 rounded" style={{ backgroundColor: 'rgba(110,110,110, 0.8)' }}>
      <h4 className="text-center">ClearBnB</h4>
        <Form>
          <Row form>
            <Col sd={6}>
              <FormGroup>
                <Input type="text" name="startDate" placeholder="startdatum..." />
              </FormGroup>
            </Col>
            <Col sd={6}>
              <FormGroup>
                <Input type="text" name="endDate" placeholder="slutdatum..." />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Input type="text" name="address" placeholder="Sök adress.."/>
          </FormGroup>
          <span className="btn btn-primary d-block ml-3 mr-3 mb-4">Boka nu</span>
          <span className="btn btn-primary d-block mt-3 mb-3 ml-1 mr-1">Ny Medlem?</span>
          <span className="btn btn-primary d-block mt-3 mb-3 ml-1 mr-1">Logga in</span>
        </Form>
      <section className="d-flex 
      justify-content-between
      ">
        <p className="text-white">Glömt lösenord?</p>
        <p className="text-white">Om oss</p>
      </section>
      </Container>
  )
};

export default FrontPageBookingMenuMobile;