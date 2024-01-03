import React from "react";
import { Modal } from "react-bootstrap";
import SignUp from "./signUp";

const SignUpModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Sign Up</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <SignUp onClose={handleClose} />
      </Modal.Body>
    </Modal>
  );
};

export default SignUpModal;
