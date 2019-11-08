import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import NavBar from "../NavBar";

function Home() {
  return (<div>
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          Required
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
        <Form.Text className="text-muted">
          Required
        </Form.Text>
      </Form.Group>
      <Button variant="secondary" type="submit">
        Submit
      </Button>
      <Button variant="secondary" type="submit">
        Sign Up
      </Button>
    </Form>
    </div>
  );
}

export default Home;
