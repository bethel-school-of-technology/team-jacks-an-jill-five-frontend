import React, { useContext, useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContext";

const SignUp = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userCity, setUserCity] = useState("");
    const [userState, setUserState] = useState("");
    const [userZip, setUserZip] = useState("");
    const [userReferral, setUserReferral] = useState("");

    let { createUser } = useContext(UserContext);
    let navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        createUser(username, password, userEmail, userCity, 
                  userState, userZip, userReferral).then(() => {
            navigate('/signin');
        }).catch(error => {
            console.log(error);
            window.alert('Failed registration: error creating user');
        });
    }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
      <h1>SignUp</h1>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control placeholder="Enter username" type="text" 
          name="username" value={username} onChange={e => setUsername(e.target.value)}/>
        </Form.Group>        
        
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control placeholder="Enter password" type="text" 
          name="password" value={password} onChange={e => setPassword(e.target.value)}/>
        </Form.Group>         

        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control placeholder="Enter email address" type="text" 
          name="userEmail" value={userEmail} onChange={e => setUserEmail(e.target.value)}/>
        </Form.Group>      

        <Form.Group>
          <Form.Label>City</Form.Label>
          <Form.Control placeholder="Enter your city" type="text" 
          name="userCity" value={userCity} onChange={e => setUserCity(e.target.value)}/>
        </Form.Group>        

        <Form.Group>
          <Form.Label>State</Form.Label>
          <Form.Control placeholder="Enter your State" type="text" 
          name="userState" value={userState} onChange={e => setUserState(e.target.value)}/>
        </Form.Group>        

        <Form.Group>
          <Form.Label>Zip</Form.Label>
          <Form.Control placeholder="Enter your zip code" type="text" 
          name="userZip" value={userZip} onChange={e => setUserZip(e.target.value)}/>
        </Form.Group>   
        
        <Form.Group>
          <Form.Label>How did you hear about us?</Form.Label>
          <Form.Control placeholder="Enter referral" type="text" 
          name="userReferral" value={userReferral} onChange={e => setUserReferral(e.target.value)}/>
    
          {/* <Form.Select>
            <option>Select one</option>
            <option value="friend">Friend/Family</option>
            <option value="web">Web Search</option>
            <option value="other">Other</option>
          </Form.Select> */}
        </Form.Group>    
        
        <br></br>
        <Button type="submit">Sign Up</Button>
      </Form>
    </div>
  );
}

export default SignUp