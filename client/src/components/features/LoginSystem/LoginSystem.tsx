import React, { useEffect, useState } from "react";
import { Form, Alert } from "react-bootstrap";
import { registerValidation } from "../../../utils/validation";
import { logIn } from "../../../redux/userReducer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../../config/urls";
import styles from "./LoginSystem.module.scss";
import { CommonButton } from "../../common/CommonButton";

export const LoginSystem: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [countFailLogin, setCountFailLogin] = useState<number>(0);
  const [isLockedOut, setIsLockedOut] = useState<boolean>(false);

  const failsLoginStatus = "You type 3 times wrong credentials wait 30s";

  const validateUserData =
    registerValidation.email.test(email) &&
    registerValidation.password.test(password);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (countFailLogin >= 3) {
      setIsLockedOut(true);
      setStatus(failsLoginStatus);

      const lockoutTimer = setTimeout(() => {
        setIsLockedOut(false);
        setCountFailLogin(0);
        setStatus("");
      }, 30000);

      return () => clearTimeout(lockoutTimer);
    }
  }, [countFailLogin]);

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
      .then((res) => res.json())
      .then((data) => {
        if (data.token) {
          setStatus("Logged In!");
          localStorage.setItem("token", data.token);
          dispatch(logIn({ email, token: data.token }));
          navigate("/");
        } else {
          setStatus("Login failed!");
          setCountFailLogin((prev) => prev + 1);
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
            Wrong login or password
          </Alert>
        )}

        {status === "ServerError" && (
          <Alert key="danger" variant="danger">
            Technical issue!
          </Alert>
        )}

        {status === failsLoginStatus && (
          <Alert key="danger" variant="danger">
            {failsLoginStatus}
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
          disabled={!validateUserData || isLockedOut}
          text={"Submit"}
        />
      </Form>
    </div>
  );
};
