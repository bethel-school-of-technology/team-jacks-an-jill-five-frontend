import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


function SignUp() {
  return (
    <div>
      <Form>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control placeholder="Enter email address" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control placeholder="Enter username" />
        </Form.Group>
        <Form.Group>
          <Form.Label>City</Form.Label>
          <Form.Control placeholder="Enter your city" />
        </Form.Group>
        <Form.Group>
          <Form.Label>State</Form.Label>
          <Form.Control placeholder="Enter your State" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Zip</Form.Label>
          <Form.Control placeholder="Enter your zip code" />
        </Form.Group>  <Form.Group>
          <Form.Label>How did you hear about us?</Form.Label>
          <Form.Select>
            <option>Choose option</option>
            <option value="friend">Friend/Family</option>
            <option value="web">Web Search</option>
            <option value="other">Other</option>
          </Form.Select>
        </Form.Group>
        <br></br>
        <Button type="submit">Sign Up</Button>
      </Form>
    </div>
  );
}

export default SignUp