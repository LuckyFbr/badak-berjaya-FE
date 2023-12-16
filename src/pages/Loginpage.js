import React, { useEffect } from "react";
import { Container, Form, Row, Button, Col, Alert } from "react-bootstrap";
import LogoBadak from "../assets/BadakBerjaya.svg";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const Loginpage = () => {
  const [validation, setValidation] = useState(false);
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [successAlertVisible, setSuccessAlertVisible] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/Beranda");
    }
  });

  const handleLogin = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("nickname", nickname);
    formData.append("password", password);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/login",
        formData
      );
      console.log(response.data.token);
      localStorage.setItem("token", response.data.token);
      setSuccessMessage(response.data.message);
      setSuccessAlertVisible(true);
      setIsLoggedIn(true);
      setValidation(false);
      setNickname("");
      setPassword("");
      window.scrollTo(0, 0);
    } catch (error) {
      setValidation(error.response.data);
      console.log(error.response.data);
      setSuccessAlertVisible(false);
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <div className="BackrgoundLogin">
      <div className="BackrgoundOverlay">
        <div className="FormWrapper">
          <div className="FormHeader">
            {isLoggedIn && <navigate to="/Main" />}
            <img src={LogoBadak} className="LogoBadak" />
            <h1>BADAK BERJAYA</h1>
            <h6>
              Sistem Informasi dan Pelayanan Administratif Kepolisian Polres
              Lampung Timur
            </h6>
          </div>
          {successAlertVisible && (
            <Alert variant="success">{successMessage}</Alert>
          )}
          {validation && !successAlertVisible && (
            <Alert variant="danger">{errorMessage}</Alert>
          )}
          <Form onSubmit={handleLogin}>
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
            <Form.Group className="CheckSan">
              <Row>
                <Col>
                  <Form.Check
                    className="checkbox"
                    type="checkbox"
                    id="checkbox"
                    label="Simpan kata sandi"
                  />
                </Col>
                <Col className="LupaKataSandi">
                  <NavLink className="BuatSekarang" to="/Reset-sandi">
                    <a>Lupa kata sandi?</a>
                  </NavLink>
                </Col>
              </Row>
            </Form.Group>

            <div className="LoginButton">
              <Button variant="danger" type="submit" size="m">
                Masuk
              </Button>
            </div>
          </Form>
          <p className="BuatAkun">
            Belum punya akun?{" "}
            <NavLink className="BuatSekarang" to="/Buat-akun">
              <a>Buat Sekarang</a>
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
