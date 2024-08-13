import React from "react";
import { Button } from "react-bootstrap";
import styles from "./SubmitButton.module.scss";

type TSubmitButton = {
  text: string;
  type: "button" | "submit" | "reset";
  disabled?: boolean;
  size?: "sm" | "lg";
  onClick?: () => void;
  className?: string;
};

export const SubmitButton: React.FC<TSubmitButton> = (props) => {
  const { text, type, disabled, onClick, size, className } = props;

  console.log("type", type);
  return (
    <div className={`${styles.root}`}>
      <Button
        type={type}
        disabled={disabled}
        className={`${styles.submit_button} ${className} ${disabled ? styles.disabled : ""}`}
        size={size}
        onClick={onClick}
      >
        {text}
      </Button>
    </div>
  );
};
