import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { registerValidation } from "../../../utils/validation";
import { API_URL } from "../../../config/urls";

export const Registration: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  const validateUserData =
    registerValidation.email.test(email) &&
    registerValidation.password.test(password);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };

    const options: RequestInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    };

    setStatus("Loading");
    fetch(`${API_URL}api/registration`, options)
      .then((res) => {
        if (res.status === 200) {
          setStatus("Success");
        } else if (res.status === 400) {
          setStatus("ClientError");
        } else if (res.status === 409) {
          setStatus("LoginEmailError");
        } else {
          setStatus("ServerError");
        }

        setEmail("");
        setPassword("");
      })
      .catch((err: string) => {
        setStatus("ServerError: " + err);
      });
  };

  return (
    <div>
      <Form className="w-25" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          disabled={!validateUserData}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};
