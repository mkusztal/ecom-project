import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { registerValidation } from "../../../utils/validation";
import { logIn } from "../../../redux/userReduces";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../../config/urls";
import { initialState } from "../../../redux/initialState";

export const LoginSystem: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(initialState.user);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!email || !password) {
      setStatus("Please fill in all fields");
      return;
    }

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
    fetch(`${API_URL}api/login`, options)
      .then((res) => res.json())
      .then((data) => {
        if (data.token) {
          setStatus("Logged In!");
          localStorage.setItem("token", data.token);
          dispatch(logIn({ email, token: data.token }));
          navigate("/");
        } else {
          setStatus("Login failed!");
        }
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
        <Button variant="primary" type="submit">
          Submit
        </Button>

        {status === "Logged in!" && (
          <Alert key="success" variant="success">
            Welcome!
          </Alert>
        )}

        {status === "Login failed!" && (
          <Alert key="warning" variant="warning">
            Something went wrong!
          </Alert>
        )}

        {status === "ServerError" && (
          <Alert key="danger" variant="danger">
            Technical issue!
          </Alert>
        )}
      </Form>
    </div>
  );
};
