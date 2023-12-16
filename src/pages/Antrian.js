import React from "react";
import {
  Col,
  Tabs,
  Tab,
  Row,
  Container,
  Form,
  Button,
  Table,
} from "react-bootstrap";
import iconBack from "../assets/icon/fi-rr-arrow-small-left.svg";
import Coba from "./Coba";
import Logobadak from "../assets/BadakBerjaya.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Antrian = () => {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/Login");
    }
  });

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 500); // Sesuaikan dengan lebar layar yang sesuai
    }

    handleResize(); // Panggil sekali saat komponen dimuat untuk menentukan mode awal
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {isMobile ? (
        <div className="bodyMainPageV2">
          <div className="Header-Wrapper-Mobile">
            <img src={Logobadak} className="Header-Mobile" />
            <div className="Header-Text-Mobile">Badak Berjaya</div>
          </div>
          <Container fluid>
            <div className="MainWrapper">
              <Row className="Row1">
                <Col className="backgroundAppV2">
                  <NavLink className="text-decoration-none" to="/Beranda">
                    <h3 className="TittleSection mt-4">
                      <img src={iconBack} className="me-2" />
                      Antrian
                    </h3>
                  </NavLink>
                  <h6>Berikut ini nomor antrian yang sedang berjalan</h6>
                  <Tabs
                    defaultActiveKey="IsiFormulir"
                    id="uncontrolled-tab-example"
                    className="mt-4"
                    justify
                  >
                    <Tab eventKey="IsiFormulir" title="SIM">
                      <Row className="Content mt-4">
                        <Col lg="6" xs="12">
                          <div className="Antrian">
                            <img src={Logobadak} className="Logo-Antrian"></img>
                            <div className="No-urut-antrian">00</div>
                          </div>
                        </Col>
                      </Row>
                    </Tab>

                    <Tab eventKey="Riwayat" title="SKCKC">
                      <Row className="Content mt-4">
                        <Col lg="6" xs="12">
                          <div className="Antrian">
                            <img src={Logobadak} className="Logo-Antrian"></img>
                            <div className="No-urut-antrian">01</div>
                          </div>
                        </Col>
                      </Row>
                    </Tab>
                  </Tabs>
                </Col>
              </Row>
            </div>
          </Container>
          <div className="NavigasiBottom">
            <Container>
              <Coba />
            </Container>
          </div>
        </div>
      ) : (
        <div className="bodyMainPageV2">
          <Container fluid>
            <div className="MainWrapper">
              <Row className="Row1">
                <Col lg="2">
                  <Coba />
                </Col>
                <Col className="backgroundAppV2">
                  <NavLink className="text-decoration-none" to="/Beranda">
                    <h3 className="TittleSection mt-4">
                      <img src={iconBack} className="me-2" />
                      Kritik & Saran
                    </h3>
                  </NavLink>
                  <h6>
                    Silahkan berikan kritik dan saran untuk polres lampung timur
                  </h6>
                  <Tabs
                    defaultActiveKey="IsiFormulir"
                    id="uncontrolled-tab-example"
                    className="mt-4"
                    justify
                  >
                    <Tab eventKey="IsiFormulir" title="Isi Formulir">
                      <Row className="mt-4">
                        <Col lg="6" xs="12">
                          <Form>
                            <Form.Group
                              className="form"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>Judul</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Masukkan judul "
                              />
                            </Form.Group>

                            <Form.Group
                              className="form"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>Isi Pesan</Form.Label>
                              <Form.Control
                                placeholder="Masukkan pesan anda disini"
                                as="textarea"
                                rows={9}
                              />
                            </Form.Group>

                            <div className="LoginButton">
                              <Button variant="primary" size="m">
                                Kirim
                              </Button>
                            </div>
                          </Form>
                        </Col>
                      </Row>
                    </Tab>

                    <Tab eventKey="Riwayat" title="Riwayat">
                      <Row className="mt-4">
                        <Table striped bordered hover responsive>
                          <thead>
                            <tr>
                              <th>No</th>
                              <th>Judul</th>
                              <th>Tanggal</th>
                              <th>Aksi</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>Pelayan publik</td>
                              <td>11-22-2023</td>
                              <td>11-22-2023</td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>Jacob</td>
                              <td>Thornton</td>
                              <td>@fat</td>
                            </tr>
                          </tbody>
                        </Table>
                      </Row>
                    </Tab>
                  </Tabs>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      )}
    </div>
  );
};

export default Antrian;
