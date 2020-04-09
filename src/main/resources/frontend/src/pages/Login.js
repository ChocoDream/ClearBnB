import React, { useState, useContext } from 'react'
import { Button, FormGroup, Label } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { UserContext } from "../contexts/UserContextProvider";

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState();
  const { fetchUser } = useContext(UserContext);

  const userLogin = async () => {
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
    setMessage('Fel användarnamn eller lösenord!')
  }else{
    fetchUser();
    props.history.push("/");    
  }
}

  return (
    <div className="container">
      <AvForm className="col-lg-6 col-sm-12 mx-auto" 
        onSubmit={userLogin}>
        <h3 className="my-3 pb-3 text-info">Logga in</h3>
        <FormGroup>
          <Label for="username">Username</Label>
          <AvField 
            value={username} 
            onChange={e=>setUsername(e.target.value)} 
            type="username" 
            name="username" 
            id="username" 
            required
            />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <AvField 
            value={password} 
            onChange={e=>setPassword(e.target.value)} 
            type="password" name="password" 
            id="password" 
            required
            />
        </FormGroup>
        <div className="d-flex flex-row">
          <Button color="info">Submit</Button>
          <div className="ml-4 pt-2 text-danger">{message}</div>
        </div>
      </AvForm>
    </div>
  )
}

export default Login
