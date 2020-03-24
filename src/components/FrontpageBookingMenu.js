import React from 'react';
import { Col, Row, Button, Form, FormGroup, Input } from 'reactstrap';

const FrontPageBookingMenu = () => {
  return (
    <div>
      <Form>
        <Row form>
          <Col sd={6}>
            <FormGroup>
              <Input type="text" name="startdate" placeholder="startdatum..." />
            </FormGroup>
          </Col>
          <Col sd={6}>
            <FormGroup>
              <Input type="text" name="enddate" placeholder="slutdatum..." />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Input type="text" name="address" placeholder="Sök address.."/>
        </FormGroup>
        <Button>Boka nu</Button>
      </Form>
    </div>
  )
};

export default FrontPageBookingMenu;