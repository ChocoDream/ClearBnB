import React from "react";
import { Link } from 'react-router-dom'
import { Container, Row, Col } from "reactstrap";

const Footer = () => {
  return (
    <Container fluid className="bg-light border-top border-info mt-5">
      <Container
        className="mt-5 mb-3"      
      >
        <Row className="font-small indigo " >
          <Col sm="12" md="3" className="mb-3">
            <h6 className="text-uppercase font-weight-bold text-center">
              <Link to="/">Bostäder</Link>
            </h6>
          </Col>
          <Col sm="12" md="3" className="mb-3">
            <h6 className="text-uppercase font-weight-bold text-center">
              <Link to="/about">Om oss</Link>
            </h6>
          </Col>
          <Col sm="12" md="3" className="mb-3">
            <h6 className="text-uppercase font-weight-bold text-center">
              <Link to="/user-login">Logga in</Link>
            </h6>
          </Col>
          <Col sm="12" md="3" className="mb-3">
            <h6 className="text-uppercase font-weight-bold text-center text-info">
              <Link to="/user-register">Skapa konto</Link>
            </h6>
          </Col>
        </Row>
        <hr className="rgba-white-light" />
        <Row>
          <Col
            md="12"
            className="my-3 d-flex text-center justify-content-center mb-md-0 mb-4"
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
      </Container>
      <Row className="text-center py-3 bg-info text-white mt-3">
          <Col md="12">© 2020 Clear BnB</Col>
      </Row>
    </Container>
  );
};

export default Footer;
