import React, { useState, useContext } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { UserContext } from '../contexts/UserContextProvider'

const Register = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { setUser } = useContext(UserContext)

  const userRegister = async() => {
    const credentials = {
      username,
      password
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
      console.log('Bad credentials');
    }
  }

  return (
    <div className="container">
      <Form className="col-lg-6 col-sm-12 mx-auto">
        <h3 className="my-3 pb-3 text-info">Skapa konto</h3>
        <FormGroup>
          <Label for="username">Username</Label>
          <Input 
            value={username} 
            onChange={e=>setUsername(e.target.value)} 
            type="username" 
            name="username" 
            id="username" 
            placeholder="Username" />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input 
            value={password} 
            onChange={e=>setPassword(e.target.value)} 
            type="password" name="password" 
            id="password" 
            placeholder="Password" />
        </FormGroup>
         <Button color="info" onClick={userRegister}>Submit</Button>
      </Form>
    </div>
  )
}

export default Register

