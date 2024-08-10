import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { registerValidation } from "../../../utils/validation";
import { logIn } from "../../../redux/userReducer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../../config/urls";
import { initialState } from "../../../redux/initialState";
import styles from "./LoginSystem.module.scss";

export const LoginSystem: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  const validateUserData =
    registerValidation.email.test(email) &&
    registerValidation.password.test(password);

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
    <div className={`${styles.root}`}>
      <p className={`${styles.title} text-center`}>Sign in</p>

      <br></br>
      <Form onSubmit={handleSubmit}>
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

        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label className={`${styles.label}`}>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label className={`${styles.label}`}>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button
          type="submit"
          disabled={!validateUserData}
          className={`${styles.main_button}`}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};
