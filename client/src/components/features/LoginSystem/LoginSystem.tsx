import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { registerValidation } from "../../../utils/validation";
import { logIn } from "../../../redux/userReduces";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../../config/urls";

export const LoginSystem: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.info("Status: ", status);

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
    fetch(`${API_URL}api/login`, options)
      .then((res) => {
        if (res.status === 200) {
          setStatus("Logged in!");
          console.log("Status: ", status);

          dispatch(logIn({ email }));
          setTimeout(() => {
            navigate("/");
          }, 2000);
        } else if (res.status === 400) {
          setStatus("ClientError");
          console.log("Status: ", status);
        } else {
          setStatus("ServerError");
          console.log("Status: ", status);
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
      </Form>
    </div>
  );
};