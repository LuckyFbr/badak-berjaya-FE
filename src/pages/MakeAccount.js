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

const MakeAccount = ({ history }) => {
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

    formData.append("nik", nik);
    formData.append("fullname", fullname);
    formData.append("nickname", nickname);
    formData.append("password", password);
    formData.append("phone_number", phone_number);
    formData.append("email", email);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/register",
        formData
      );
      console.log(response);
      setSuccessMessage(response.data.message);
      setSuccessAlertVisible(true);
      setShowModal(true);
      formRef.current.reset();
      setValidation(false);
      setNik("");
      setFullname("");
      setNickname("");
      setPassword("");
      setPhone_number("");
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
            <h5>Silahkan isi formulir dibawah sesuai data diri anda</h5>
          </div>
          {successAlertVisible && (
            <Alert variant="success">{successMessage}</Alert>
          )}
          <Form ref={formRef} onSubmit={storeData}>
            <Form.Group className="form" controlId="validationCustom01">
              <Form.Label>NIK (Nomor Induk Kependudukan)</Form.Label>
              <Form.Control
                size="md"
                type="text"
                placeholder="180715XXXXXXXX"
                name="nik"
                onChange={(e) => setNik(e.target.value)}
              />
              {validation.nik && (
                <small className="text-danger">
                  Silahkan masukkan NIK anda
                </small>
              )}
            </Form.Group>
            <Form.Group
              className="form"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Nama Lengkap</Form.Label>
              <Form.Control
                size="md"
                type="text"
                placeholder="John Dalton"
                name="fullname"
                onChange={(e) => setFullname(e.target.value)}
              />
              {validation.fullname && (
                <small className="text-danger">
                  Silahkan masukkan nama nama anda
                </small>
              )}
            </Form.Group>
            <Form.Group
              className="form"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Nama Pengguna</Form.Label>
              <Form.Control
                size="md"
                type="text"
                placeholder="JohnDalton11"
                name="nickname"
                onChange={(e) => setNickname(e.target.value)}
              />
              {validation.nickname && (
                <small className="text-danger">
                  Silahkan masukkan nama pengguna anda
                </small>
              )}
            </Form.Group>
            <Form.Group
              className="form"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Kata Sandi</Form.Label>
              <Form.Control
                size="md"
                type="text"
                placeholder="*************"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {validation.password && (
                <small className="text-danger">
                  kata sandi harus 8 karakter
                </small>
              )}
            </Form.Group>
            <Form.Group
              className="form"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Nomor HP</Form.Label>
              <Form.Control
                size="md"
                type="text"
                placeholder="0857XXXXXXXX"
                name="phone_number"
                onChange={(e) => setPhone_number(e.target.value)}
              />
              {validation.phone_number && (
                <small className="text-danger">
                  Silahkan masukkan nomor hp anda
                </small>
              )}
            </Form.Group>
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
          <Modal.Title>Akun Berhasil Dibuat</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Silahkan kembali kehalaman login untuk melanjutkan</p>
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

export default MakeAccount;
