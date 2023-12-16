import React from "react";
import {
  Container,
  Form,
  Row,
  Button,
  Col,
  Alert,
  Modal,
} from "react-bootstrap";
import LogoBadak from "../assets/BadakBerjaya.svg";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom/dist";
import axios from "axios";

const ResetPassword = ({}) => {
  const [validation, setValidation] = useState(false);
  const [nik, setNik] = useState("");
  const [fullname, setFullname] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [email, setEmail] = useState("");
  const [successAlertVisible, setSuccessAlertVisible] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const formRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleCloseModal = () => {
    setShowModal(false);
    navigate("/login");
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/Beranda");
    }
  });

  const storeData = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("email", email);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/reset-password",
        formData
      );
      console.log(response);
      setSuccessMessage(response.data.message);
      setSuccessAlertVisible(true);
      setShowModal(true);
      formRef.current.reset();
      setEmail("");
      window.scrollTo(0, 0);
    } catch (error) {
      setValidation(error.response.data);
      console.log(error.response.data);
    }
  };

  return (
    <div className="BackrgoundLogin">
      <div className="BackrgoundOverlay">
        <div className="FormWrapper">
          <div className="FormHeader">
            <h5>Silahkan masukkan email anda untuk memperbarui password</h5>
          </div>
          {successAlertVisible && (
            <Alert variant="success">{successMessage}</Alert>
          )}
          <Form ref={formRef} onSubmit={storeData}>
            <Form.Group
              className="form"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Email</Form.Label>
              <Form.Control
                size="md"
                type="text"
                placeholder="Contoh@gmail.com"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              {validation.email && (
                <small className="text-danger">
                  Silahkan masukkan email anda
                </small>
              )}
            </Form.Group>

            <div className="LoginButton">
              <Button variant="danger" type="submit" size="m">
                Daftar
              </Button>
            </div>
          </Form>
        </div>
      </div>
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Email terkirim</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Silahkan cek kembali email anda</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Kembali ke Login
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ResetPassword;
