import React, { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import UserContext from "../contexts/UserContext";
import { Form, Button } from "react-bootstrap";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let { signInUser } = useContext(UserContext);
  let navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    signInUser(username, password).then(() => {
      navigate('/fairlist');
    }).catch(error => {
      console.log(error);
      window.alert('Failed login');
    });
  }

  return(
    <><div>
      <h1>Welcome Back</h1>
    </div>
    <div> 
    <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control input placeholder="Enter username" type="text" 
            name="username" onChange={e => setUsername(e.target.value)} />
        </Form.Group>
        <br></br>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control input placeholder="Enter password" type="text" 
            name="password" onChange={e => setPassword(e.target.value)}/>
        </Form.Group>
        <br></br>
        <Form.Group>
        <Button type="submit">Login</Button>
        </Form.Group>
      </Form>
      </div>
      </>
  );
}

export default SignIn;