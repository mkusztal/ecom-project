import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import { registerValidation } from "../../../utils/validation";
import { API_URL } from "../../../config/urls";
import styles from "./Registration.module.scss";
import { statuses } from "../../../utils/statuses";
import { CommonButton } from "../../common/CommonButton";

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
          setStatus(statuses.SUCCESS);
        } else if (res.status === 400) {
          setStatus(statuses.CLIENT_ERROR);
        } else if (res.status === 409) {
          setStatus(statuses.INPUT_ERROR);
        } else {
          setStatus(statuses.SERVER_ERROR);
        }

        setEmail("");
        setPassword("");
      })
      .catch((err: string) => {
        setStatus("ServerError: " + err);
      });
  };

  return (
    <div className={`${styles.root}`}>
      <p className={`${styles.title} text-center`}>Sign up</p>

      <br></br>
      <Form onSubmit={handleSubmit}>
        {status === "Success" && (
          <Alert key="success" variant="success">
            Welcome!
          </Alert>
        )}

        {status === "ClientError" && (
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
            autoComplete="email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label className={`${styles.label}`}>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
        </Form.Group>
        <CommonButton
          type={"submit"}
          disabled={!validateUserData}
          text={"Submit"}
        />
      </Form>
    </div>
  );
};
