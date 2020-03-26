import React from 'react';
import { Col, Row, Form, FormGroup, Input, Container } from 'reactstrap';

const FrontPageMenu = () => {
  return (
    <div>
    <Container className="pt-4 rounded d-lg-hide" style={{ backgroundColor: 'rgba(110,110,110, 0.8)' }}>
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
          <span className="btn btn-info d-block mb-4">Boka nu</span>
          <span className="btn btn-info d-block mt-3 mb-3">Ny Medlem?</span>
          <span className="btn btn-info d-block mt-3 mb-3">Logga in</span>
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

export default FrontPageMenu;