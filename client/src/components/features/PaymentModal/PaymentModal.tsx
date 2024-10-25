import React from "react";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./PaymentModal.module.scss";

type TPayment = {
  show: boolean;
  setShow: (show: boolean) => void;
};

console.log(styles.donate_link);

export const PaymentModal: React.FC<TPayment> = (props) => {
  const { show, setShow } = props;

  const handleClose = () => setShow(!show);
  return (
    <div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Unfortunately the stores are empty. However, you can donate.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Link
            to={"https://donate.stripe.com/test_bIYg0fcM31XegHC000"}
            target="_blank"
            rel="noreferrer"
            className={`${styles.donate_link}`}
          >
            Donate
          </Link>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
