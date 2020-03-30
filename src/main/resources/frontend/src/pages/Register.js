import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const springRegister = async () => {
  const credentials = 'username=' +
    encodeURIComponent(username)
    + '&password=' +
    encodeURIComponent(password)

  let response = await fetch("/login", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: credentials
  });

  if(response.url.includes('error')) {
    console.log('Wrong username/password');
  }else{
    console.log('Successfully logged in.');    
  }
}

  return (
    <div className="container">
      <h3>Login</h3>
      <Form className="col-lg-6 col-sm-12 mx-auto">
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
         <Button color="info" onClick={springRegister}>Submit</Button>
      </Form>
    </div>
  )
}

export default Register

