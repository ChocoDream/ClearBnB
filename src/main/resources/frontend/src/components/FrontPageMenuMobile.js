import React from 'react';
import { Link } from "react-router-dom";
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
          <Link to="/user-register" className="btn-lg btn-info d-block mt-3 mb-3 text-center">Ny Medlem?</Link>
          <Link to="/user-login" className="btn-lg btn-info d-block mt-3 mb-3 text-center">Logga in</Link>
        </Form>
      <section className="d-flex 
      justify-content-end
      ">
        <Link to="/about/" className="text-white nav-link text-center">Om oss</Link>
      </section>
      </Container>
    </div>
  )
};

export default FrontPageMenuMobile;