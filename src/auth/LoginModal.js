import React from "react";
import { Modal } from "react-bootstrap";
import Login from "./login";

const LoginModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Login onClose={handleClose} />
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
