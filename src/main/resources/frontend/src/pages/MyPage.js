import React, { useContext } from 'react'
import { Container, Row, Col } from 'reactstrap';
import { UserContext } from '../contexts/UserContextProvider'

const MyPage = () => {
  const { user } = useContext(UserContext)
  return (
    <div className="className">
      <Container>
        <Row>
          <Col className="mt-5">
            <h4>Välkommen</h4>
            {/* <h4><span>{user.first_name}</span> <span>{user.last_name}</span></h4> */}
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="4">
            <h4>Min bokning</h4>
          </Col>
          <Col xs="12" sm="8">Column</Col>
        </Row>
        <Row>
          <Col xs="12" sm="4">Column</Col>
          <Col xs="12" sm="8">Column</Col>
        </Row>
      </Container>
    </div>
  )
}

export default MyPage
