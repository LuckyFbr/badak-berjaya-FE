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
  InputGroup,
  Accordion,
} from "react-bootstrap";
import iconBack from "../assets/icon/fi-rr-arrow-small-left.svg";
import Coba from "./Coba";
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Logobadak from "../assets/BadakBerjaya.svg";
import axios from "axios";

const Profil = () => {
  const [isMobile, setIsMobile] = useState(false);
  const token = localStorage.getItem("token");
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

  const [userData, setUserData] = useState([]);
  useEffect(() => {
    // Panggil API backend saat komponen dimuat
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Panggil endpoint API backend yang sesuai
      const response = await axios.post("http://localhost:8000/api/me", null, {
        headers: {
          Authorization: `Bearer ${token}`, // Sertakan token JWT di header Authorization
        },
      });

      // Simpan data pengguna ke state komponen
      setUserData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="bodyMainPage">
        <Container fluid>
          <div className="MainWrapper">
            <Row className="Row1">
              {isMobile ? (
                <div className="Header-Wrapper-Mobile">
                  <img src={Logobadak} className="Header-Mobile" />
                  <div className="Header-Text-Mobile">Badak Berjaya</div>
                </div>
              ) : (
                <Col lg={2}>
                  <Coba />
                </Col>
              )}

              <Col className="backgroundAppV2">
                <NavLink className="text-decoration-none" to="/Beranda">
                  <h3 className="TittleSection mt-4">
                    <img src={iconBack} className="me-2" />
                    Profil
                  </h3>
                </NavLink>

                <Tabs
                  defaultActiveKey="Detail"
                  id="uncontrolled-tab-example"
                  className="mt-4"
                >
                  <Tab eventKey="Detail" title="Detail">
                    <Row className="Content mt-4">
                      {isMobile ? (
                        <div>
                          <Accordion defaultActiveKey="">
                            <Accordion.Item eventKey="0">
                              <Accordion.Header>Data Pribadi</Accordion.Header>
                              <Accordion.Body>
                                <strong>Nama Pengguna</strong>
                                <div>luckyfbr_</div>

                                <strong>NIK</strong>
                                <div>1807151102020006</div>

                                <strong>Nama Lengkap</strong>
                                <div>Lucky Febrian</div>

                                <strong>Tempat Lahir</strong>
                                <div>Sadar Sriwijaya</div>

                                <strong>Tanggal Lahir</strong>
                                <div>11-02-2001</div>

                                <strong>Nomor Telepon</strong>
                                <div>085769395726</div>

                                <strong>Email</strong>
                                <div>luckyfebrian119140163@gmail.com</div>

                                <strong>Jenis Kelamin</strong>
                                <div>Laki-Laki</div>

                                <strong>Agama</strong>
                                <div>Islam</div>

                                <strong>Pendidikan Terakhir</strong>
                                <div>SMA Sederajat</div>

                                <strong>Pekerjaan</strong>
                                <div>Mahasiswa</div>
                              </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                              <Accordion.Header>Data Alamat</Accordion.Header>
                              <Accordion.Body>
                                <strong>Alamat</strong>
                                <div>Dusun VI, RT 12, RW 02</div>

                                <strong>Provinsi</strong>
                                <div>Lampung</div>

                                <strong>Kabupaten</strong>
                                <div>Lampung Timur</div>

                                <strong>Kecamatan</strong>
                                <div>Bandar Sribhawono</div>

                                <strong>Desa/kelurahan</strong>
                                <div>Sadar Sriwijaya</div>
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                        </div>
                      ) : (
                        <Col>
                          <div className="Profile-Wrapper">
                            <div className="Data-Pribadi">
                              <Container>
                                <Row>
                                  <div className="Wrapper-Gambar-profile">
                                    <div className="Gambar-profile"></div>
                                    <h4>lucky123</h4>
                                  </div>
                                  <Col lg={6}>
                                    <Row>
                                      <strong>Data Pribadi</strong>
                                      <Col lg={5}>
                                        <div>Nama Pengguna</div>
                                        <div>NIK</div>
                                        <div>Nama Lengkap</div>
                                        <div>Nomor Telepon</div>
                                        <div>Email</div>
                                        <div>Tempat Lahir</div>
                                        <div>Tanggal Lahir</div>
                                        <div>Jenis Kelamin</div>
                                        <div>Agama</div>
                                        <div>Pendidikan Terakhir</div>
                                        <div>Pekerjaan</div>
                                      </Col>
                                      {userData && (
                                        <Col>
                                          <div>: {userData.nickname}</div>
                                          <div>: {userData.nik}</div>
                                          <div>: {userData.fullname}</div>
                                          <div>: {userData.phone_number}</div>
                                          <div>: {userData.email}</div>
                                          <div>: -</div>
                                          <div>: -</div>
                                          <div>: -</div>
                                          <div>: -</div>
                                          <div>: -</div>
                                          <div>: -</div>
                                        </Col>
                                      )}
                                    </Row>
                                  </Col>
                                  <Col>
                                    <Row>
                                      <strong>Data Alamat</strong>
                                      <Col>
                                        <div>Alamat</div>
                                        <div>Provinsi</div>
                                        <div>Kabupaten</div>
                                        <div>Kecamatan</div>
                                        <div>Desa/kelurahan</div>
                                      </Col>
                                      <Col>
                                        <div>: -</div>
                                        <div>: -</div>
                                        <div>: -</div>
                                        <div>: -</div>
                                        <div>: -</div>
                                      </Col>
                                    </Row>
                                  </Col>
                                </Row>
                              </Container>
                            </div>
                          </div>
                        </Col>
                      )}
                    </Row>
                  </Tab>
                  <Tab eventKey="Updatedata" title="Perbarui Data">
                    <Container>
                      <Form>
                        <Row className="Content mt-4">
                          <Col lg="4" xs="12">
                            <Form.Group
                              className="form"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>Nama Pengguna</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Masukkan nama pengguna"
                              />
                            </Form.Group>

                            <Form.Group
                              className="form"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>
                                NIK (Nomor Induk Kependudukan)
                              </Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Masukkan NIK anda"
                              />
                            </Form.Group>

                            <Form.Group
                              className="form"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>Nama Lengkap</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Masukkan nama lengkap anda"
                              />
                            </Form.Group>

                            <Form.Group
                              className="form"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>Nomor Telepon</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Masukkan nama lengkap anda"
                              />
                            </Form.Group>

                            <Form.Group
                              className="form"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>Email</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Masukkan email anda"
                              />
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlInput1">
                              <Form.Label className="form">
                                jenis Kelamin
                              </Form.Label>
                              <Row>
                                <Col>
                                  <Form.Check
                                    className="Radio"
                                    type="Radio"
                                    id="Radio"
                                    label="Laki-Laki"
                                  />
                                </Col>
                                <Col>
                                  <Form.Check
                                    className="Radio"
                                    type="Radio"
                                    id="Radio"
                                    label="Perempuan"
                                  />
                                </Col>
                              </Row>
                            </Form.Group>

                            <Form.Group
                              className="form"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>Agama</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Masukkan agama anda"
                              />
                            </Form.Group>
                          </Col>
                          <Col lg="4">
                            <Form.Group
                              className="form"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>Pendidikan terakhir</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Masukkan pendidikan terakhir anda"
                              />
                            </Form.Group>

                            <Form.Group
                              className="form"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>Tempat Lahir</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Masukkan tempat lahir anda"
                              />
                            </Form.Group>

                            <Form.Group
                              className="form"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>Tanggal Lahir</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Masukkan tanggal lahir anda"
                              />
                            </Form.Group>

                            <Form.Group
                              className="form"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>Pekerjaan</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Masukkan pekerjaan anda"
                              />
                            </Form.Group>

                            <Form.Group
                              className="form"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>Alamat</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Masukkan pekerjaan anda"
                              />
                            </Form.Group>

                            <Form.Group
                              className="form"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>Provinsi</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Masukkan nama provinsi anda"
                              />
                            </Form.Group>

                            <Form.Group
                              className="form"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>Kabupaten</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Masukkan nama kabupaten anda"
                              />
                            </Form.Group>
                          </Col>
                          <Col>
                            <Form.Group
                              className="form"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>Kecamatan</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Masukkan nama kecamatan anda"
                              />
                            </Form.Group>

                            <Form.Group
                              className="form"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>Desa/Kelurahan</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Masukkan nama desa/kelurahan anda"
                              />
                            </Form.Group>

                            <div className="LoginButton">
                              <Button variant="danger" size="m">
                                Perbarui
                              </Button>
                            </div>
                          </Col>
                        </Row>
                      </Form>
                    </Container>
                  </Tab>
                  <Tab eventKey="Updatepassword" title="Ubah Kata Sandi">
                    <Container>
                      <Form>
                        <Row className="Content mt-4">
                          <Col lg="4" xs="12">
                            <Form.Group
                              className="form"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>Kata Sandi Lama</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Masukkan kata sandi lama anda"
                              />
                            </Form.Group>

                            <Form.Group
                              className="form"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>Kata Sandi Baru</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Masukkan kata sandi baru anda"
                              />
                            </Form.Group>

                            <Form.Group
                              className="form"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>
                                Konfirmasi Kata Sandi Baru
                              </Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Masukkan kata sandi baru anda"
                              />
                            </Form.Group>
                            <div className="LoginButton">
                              <Button variant="danger" size="m">
                                Perbarui
                              </Button>
                            </div>
                          </Col>
                        </Row>
                      </Form>
                    </Container>
                  </Tab>
                </Tabs>
              </Col>
            </Row>
          </div>
        </Container>
        {isMobile ? (
          <div className="NavigasiBottom">
            <Container>
              <Coba />
            </Container>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Profil;
