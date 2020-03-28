import React from 'react';
import { Col, Row, Form, FormGroup, Input, Container } from 'reactstrap';

const FrontPageMenuMobile = () => {
  return (
    <div>
    <Container className="pt-4 rounded d-lg-hide bg-secondary">
        <Form>
          <Row form>
            <Col sd={6}>
              <FormGroup>
                <Input type="text" name="startDate" bsSize="lg" placeholder="startdatum..." />
              </FormGroup>
            </Col>
            <Col sd={6}>
              <FormGroup>
                <Input type="text" name="endDate" bsSize="lg" placeholder="slutdatum..." />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Input type="text" name="address" bsSize="lg" placeholder="Sök adress.."/>
          </FormGroup>
          <span className="btn-lg btn-info d-block mb-4 text-center">Sök</span>
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