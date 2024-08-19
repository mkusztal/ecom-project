import React, { useEffect, useState } from "react";
import { Form, Alert } from "react-bootstrap";
import styles from "./Contact.module.scss";
import { API_URL } from "../../../config/urls";
import { useNavigate } from "react-router-dom";
import { SubmitButton } from "../../common/SubmitButton";
import { registerValidation } from "../../../utils/validation";

export const Contact: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  const [isWordLimitExceeded, setIsWordLimitExceeded] = useState<boolean>(true);
  const [email, setEmail] = useState<string>("");
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [isNameValid, setIsNameValid] = useState<boolean>(false);
  const [subject, setSubject] = useState<string>("");
  const [isSubjectValid, setIsSubjectValid] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<string>("");
  const [letterCount, setLetterCount] = useState<number>(0);

  const checkValidInputData =
    isNameValid && isEmailValid && !isWordLimitExceeded && isSubjectValid;

  const maxWords = 500;
  const navigate = useNavigate();

  const handleEmailChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputEmail = event.target.value;
    setEmail(inputEmail);
    setIsEmailValid(registerValidation.email.test(inputEmail));
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

  const countLetters = (text: string) => {
    return text.replace(/\s+/g, "").length;
  };

  const handleMessageChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const inputMessage = event.target.value;
    setLetterCount(() => countLetters(inputMessage));

    if (letterCount <= maxWords) {
      setMessage(inputMessage);
      setIsWordLimitExceeded(false);
    } else {
      setIsWordLimitExceeded(true);
    }
  };

  useEffect(() => {
    if (!checkValidInputData) {
      setStatusMessage("Please fill out the form correctly.");
    } else {
      setStatusMessage("");
    }
  }, [
    isNameValid,
    isEmailValid,
    isWordLimitExceeded,
    isSubjectValid,
    message,
    checkValidInputData,
  ]);

  const sendEmailHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsNameValid(isNameValid);
    setIsEmailValid(isEmailValid);
    setIsWordLimitExceeded(isWordLimitExceeded);

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
      <p className={`${styles.title} text-center`}>Contact with us</p>
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
            {letterCount === maxWords && (
              <p className={styles.custom_error_info}>
                You have exceeded the maximum word limit of {maxWords} words.
              </p>
            )}
            <p className="text-end ms-auto">
              {countLetters(message)}/{maxWords}
            </p>
          </div>
        </Form.Group>
        <SubmitButton
          type="submit"
          disabled={!checkValidInputData}
          text="Submit"
        />
      </Form>
    </div>
  );
};
