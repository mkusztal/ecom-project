import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import styles from "./contact.module.scss";
import { API_URL } from "../../../config/urls";
import { useNavigate } from "react-router-dom";

export const Contact: React.FC = () => {
  const [message, setMessage] = useState("");
  const [isWordLimitExceeded, setIsWordLimitExceeded] = useState(false);
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [name, setName] = useState("");
  const [isNameValid, setIsNameValid] = useState(true);
  const [subject, setSubject] = useState("");
  const [isSubjectValid, setIsSubjectValid] = useState(true);
  const [statusMessage, setStatusMessage] = useState("");

  const maxWords = 500;
  const navigate = useNavigate();

  console.log("statusMessage: ", statusMessage);

  const handleMessageChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const inputMessage = event.target.value;
    const wordCount = countWords(inputMessage);

    if (wordCount <= maxWords) {
      setMessage(inputMessage);
      setIsWordLimitExceeded(false);
    } else {
      setIsWordLimitExceeded(true);
    }
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputEmail = event.target.value;
    setEmail(inputEmail);
    setIsEmailValid(validateEmail(inputEmail));
  };

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return regex.test(email);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = event.target.value;
    setName(inputName);
    setIsNameValid(inputName.trim().length > 0);
  };

  const handleSubjectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = event.target.value;
    setSubject(inputName);
    setIsSubjectValid(inputName.trim().length > 0);
  };

  const countWords = (text: string) => {
    return text
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0).length;
  };

  const sendEmailHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Validate the inputs
    const isNameValid = name.trim().length > 0;
    const isEmailValid = validateEmail(email);
    const isWordLimitExceeded = countWords(message) > maxWords;

    setIsNameValid(isNameValid);
    setIsEmailValid(isEmailValid);
    setIsWordLimitExceeded(isWordLimitExceeded);

    if (
      !isNameValid ||
      !isEmailValid ||
      isWordLimitExceeded ||
      !isSubjectValid
    ) {
      setStatusMessage("Please fill out the form correctly.");
      return;
    }

    const emailBody = {
      name: name,
      emailFrom: email,
      subject: subject,
      message: message,
    };

    const fetchEmailOption = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailBody),
    };

    try {
      const response = await fetch(`${API_URL}api/sendEmail`, fetchEmailOption);
      if (response.ok) {
        setStatusMessage("Email sent successfully!");
        setName("");
        setEmail("");
        setMessage("");

        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        setStatusMessage("Failed to send email. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatusMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className={`${styles.root}`}>
      <h2 className="text-center">Contact with us</h2>
      <br></br>
      <Form className={`${styles.form}`} onSubmit={sendEmailHandler}>
        {statusMessage && (
          <Alert
            variant={
              statusMessage.includes("successfully") ? "success" : "danger"
            }
          >
            {statusMessage}
          </Alert>
        )}
        <Form.Group className={styles.custom_form_group}>
          <Form.Label className={`${styles.form_label}`}>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            className={`${styles.form_control}`}
            value={name}
            onChange={handleNameChange}
            isInvalid={!isNameValid}
          />
          {!isNameValid && (
            <div>
              <Form.Control.Feedback type="invalid">
                Please enter your name.
              </Form.Control.Feedback>
              <Form.Text className={`${styles.custom_error_info} muted`}>
                Please enter your name.
              </Form.Text>
            </div>
          )}
        </Form.Group>

        <Form.Group className={`mb-3 ${styles.custom_form_group}`}>
          <Form.Label className={`${styles.form_label}`}>Subject</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your subject"
            className={`${styles.form_control}`}
            value={subject}
            onChange={handleSubjectChange}
            isInvalid={!isSubjectValid}
          />
          {!isSubjectValid && (
            <div>
              <Form.Control.Feedback type="invalid">
                Please enter your subject.
              </Form.Control.Feedback>
              <Form.Text className={`${styles.custom_error_info} muted`}>
                Please enter your subject.
              </Form.Text>
            </div>
          )}
        </Form.Group>

        <Form.Group className={`mb-3 ${styles.custom_form_group}`}>
          <Form.Label className={`${styles.form_label}`}>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            className={`${styles.form_control}`}
            value={email}
            onChange={handleEmailChange}
            isInvalid={!isEmailValid}
          />
          {!isEmailValid && (
            <div>
              <Form.Control.Feedback type="valid">
                Please enter a valid email address
              </Form.Control.Feedback>
              <Form.Text className={`${styles.custom_error_info} muted`}>
                Ex. name.company@gmail.com
              </Form.Text>
            </div>
          )}
        </Form.Group>

        <Form.Group className={`mb-3 ${styles.custom_form_group}`}>
          <Form.Label className={`${styles.form_label}`}>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Enter your message"
            className={`${styles.form_control}`}
            value={message}
            onChange={handleMessageChange}
            max={500}
          />
          <div className="d-flex flex-row justify-content-between mt-1">
            {isWordLimitExceeded && (
              <p className={styles.custom_error_info}>
                You have exceeded the maximum word limit of {maxWords} words.
              </p>
            )}
            <p className="text-end ms-auto">
              {countWords(message)}/{maxWords}
            </p>
          </div>
        </Form.Group>
      </Form>
      <Button
        type="submit"
        disabled={statusMessage === "Please fill out the form correctly."}
        className={`${styles.main_button}`}
      >
        Submit
      </Button>
    </div>
  );
};
