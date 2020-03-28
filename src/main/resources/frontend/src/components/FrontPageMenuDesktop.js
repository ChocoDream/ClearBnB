import React from 'react';
import {
  Button,
  Form,
  FormGroup,
  Input
} from 'reactstrap';

const FrontPageMenuDesktop = () => {
  return (
    <div className="d-flex justify-content-center">
        <Form inline className="bg-secondary rounded p-2" style={{marginTop: '5%'}}>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Input type="text" bsSize="lg" placeholder="Vart vill du åka?" />
        </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Input type="text" bsSize="lg" placeholder="Startdatum" />
        </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Input type="text" bsSize="lg" placeholder="slutdatum" />
        </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Input type="text" bsSize="lg" placeholder="Hur många gäster?" />
        </FormGroup>
      <Button color="info" size="lg">Sök</Button>
      </Form>
    </div>
  )
}

export default FrontPageMenuDesktop;