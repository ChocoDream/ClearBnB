import React, { useState, useContext } from 'react'
import { Button, FormGroup, Label, Row, Col } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { UserContext } from '../contexts/UserContextProvider'

const Register = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [first_name, setFirstName] = useState('')
  const [last_name, setLastName] = useState('')
  const [message, setMessage] = useState();

  const { setUser } = useContext(UserContext)

  const userRegister = async() => {
    const credentials = {
      username,
      password,
      email,
      first_name,
      last_name
    }
  
    let res = await fetch("/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials)
    });
    try {
      res = await res.json()
      setUser(res)
      props.history.push('/')
    } catch {
      setMessage('Alla fält är obligatoriska!')
    }
  }

  return (
    <div className="container">
      <AvForm className="col-lg-6 col-sm-12 mx-auto">
        <h3 className="my-3 pb-3 text-info">Skapa konto</h3>
        <Row className="row d-flex flex-row">
          <Col className="col-lg-6">       
          <FormGroup>
            <Label for="firstName">Förnamn</Label>
            <AvField 
              value={first_name} 
              onChange={e=>setFirstName(e.target.value)} 
              type="text" name="firstName" 
              id="firstName" 
              required/>
          </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="lastName">Efternamn</Label>
              <AvField 
                value={last_name} 
                onChange={e=>setLastName(e.target.value)} 
                type="text" name="lastName" 
                id="lastName" 
                required/>
            </FormGroup>
          </Col>
         </Row>

        <FormGroup>
          <Label for="username">Username</Label>
          <AvField
            value={username} 
            onChange={e=>setUsername(e.target.value)} 
            type="username" 
            name="username" 
            id="username" 
            required />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <AvField
            value={password} 
            onChange={e=>setPassword(e.target.value)} 
            type="password" name="password" 
            id="password" 
            required/>
        </FormGroup>
        <FormGroup>
          <Label for="email">E-post</Label>
          <AvField
            value={email} 
            onChange={e=>setEmail(e.target.value)} 
            type="email" name="email" 
            id="email" 
            required/>
        </FormGroup>
          <div className="d-flex flex-row">
            <Button color="info" onClick={userRegister}>Submit</Button>
            <div className="ml-4 pt-2 text-danger">{message}</div>
          </div>
      </AvForm>
    </div>
  )
}

export default Register

