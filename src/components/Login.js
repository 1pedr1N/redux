import React, { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
function Login() {
  const [name, setName] = useState("");

  const handleLogin = () => {
    console.log("Login");
  };
  return (
    <Form>
      <h1>Login</h1>
      <Row>
        <Col sm={6}>
          <Form.Control
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Col>
        <Col sm={6}>
          <Button onClick={handleLogin}>Login</Button>
        </Col>
      </Row>
      <br />
    </Form>
  );
}

export default Login;
