import React from "react";
import { Container, Row, Col } from "reactstrap";

const Footer = () => {
  return (
    <Container
      className="mt-5"
      
    >
      <Row className="font-small indigo " >
        <Col className="mb-3">
          <h6 className="text-uppercase font-weight-bold">
            <a href="#!">Residences</a>
          </h6>
        </Col>
        <Col className="mb-3">
          <h6 className="text-uppercase font-weight-bold">
            <a href="#!">Om oss</a>
          </h6>
        </Col>
        <Col className="mb-3">
          <h6 className="text-uppercase font-weight-bold">
            <a href="#!">Logga in</a>
          </h6>
        </Col>

        <Col className="mb-3">
          <h6 class="text-uppercase font-weight-bold">
            <a href="#!">Skapa konto</a>
          </h6>
        </Col>
      </Row>

      <hr className="rgba-white-light" />
      <Row>
        <Col
          md="12"
          className="mt-3 d-flex text-center justify-content-center mb-md-0 mb-4"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
          blanditiis velit quod incidunt et non iste animi facilis illo ratione
          porro unde consectetur, repudiandae veniam aut, mollitia, neque rerum
          quae.
        </Col>
      </Row>

      <hr
        className="clearfix d-md-none rgba-white-light"
        style={{ margin: "10% 15% 5%" }}
      />

      <Row className="text-center py-3">
        <Col md="12">© 2020 Clear BnB:</Col>
      </Row>
    </Container>
  );
};

export default Footer;
