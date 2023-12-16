import React from "react";
import { Container, Form, Row, Button, Col, InputGroup } from "react-bootstrap";
import Animasi from "../assets/Animasi.svg";
import LogoBadak from "../assets/BadakBerjaya.svg";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom/dist";

const MakeAccountV2 = () => {
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/Login");
    }
  });

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className="bg">
      <Container>
        <Row className="RowLogin">
          <Col className="GambarContainer">
            <img src={Animasi} className="GambarAnimasi" />
          </Col>
          <Col className="FormContainer">
            <div className="FormWrapper2">
              <div className="FormHeader">
                {/* <h1>BUAT AKUN</h1> */}
                <h6>Silahkan isi formulir dibawah sesuai data diri anda</h6>
              </div>

              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="form" controlId="validationCustom01">
                  <Form.Label>NIK (Nomor Induk Kependudukan)</Form.Label>
                  <Form.Control
                    size="md"
                    type="text"
                    placeholder="180715XXXXXXXX"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Masukkan maksimal 16 karakter
                  </Form.Control.Feedback>
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
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Masukkan nama lengkap anda
                  </Form.Control.Feedback>
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
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Masukkan nama pengguna anda
                  </Form.Control.Feedback>
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
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Masukkan kata sandi anda
                  </Form.Control.Feedback>
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
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Masukkan nomor HP anda
                  </Form.Control.Feedback>
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
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Masukkan email anda
                  </Form.Control.Feedback>
                </Form.Group>

                <div className="LoginButton">
                  <Button variant="primary" type="submit" size="m">
                    Masuk
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MakeAccountV2;
