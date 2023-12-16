import {
  Tabs,
  Tab,
  Row,
  Col,
  Form,
  Button,
  InputGroup,
  Container,
} from "react-bootstrap";
import React, { useState, useEffect, useRef } from "react";
import AlurSim from "../assets/Alur_sim.png";
import Coba from "./Coba";
import iconBack from "../assets/icon/fi-rr-arrow-small-left.svg";
import { NavLink, useNavigate } from "react-router-dom";
import Logobadak from "../assets/BadakBerjaya.svg";
import axios from "axios";
import { Modal, Table } from "react-bootstrap";
const SimPageNew = () => {
  const navigate = useNavigate();
  const formRef = useRef(null);
  const [showModal, setShowModal] = useState();
  const [showContent, setShowContent] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [permohonanBaru, setPermohonanBaru] = useState(true);
  const [jenis_permohonan, setJenis_permohonan] = useState();
  const [tgl_datang, setTgl_datang] = useState();
  const [gol_sim, setGol_sim] = useState();
  const [tinggi, setTinggi] = useState();
  const [berkacamata, setBerkacamata] = useState();
  const [cacat_fisik, setCacat_fisik] = useState();
  const [sim, setSim] = useState();
  const [jenis_sim, setJenis_sim] = useState();
  const [foto_sim_lama, setFoto_sim_lama] = useState();
  const [masa_berlaku_sim, setMasa_berlaku_sim] = useState();
  const [surat_sehat, setSurat_sehat] = useState();
  const [surat_psikologi, setSurat_psikologi] = useState();

  const handleRadioChange = (event) => {
    setPermohonanBaru(event.target.value === "Baru");
  };

  const toggleContent = () => {
    setShowContent(!showContent);
  };

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

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/Login");
    }
  });

  const storeData = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("jenis_permohonan", permohonanBaru);
    formData.append("tgl_datang", tgl_datang);
    formData.append("gol_sim", gol_sim);
    formData.append("tinggi", tinggi);
    formData.append("berkacamata", berkacamata);
    formData.append("cacat_fisik", cacat_fisik);
    formData.append("sim", sim);
    formData.append("jenis_sim", jenis_sim);
    formData.append("foto_sim_lama", foto_sim_lama);
    formData.append("masa_berlaku_sim", masa_berlaku_sim);
    formData.append("surat_sehat", surat_sehat);
    formData.append("surat_psikologi", surat_psikologi);
    console.log(formData);
    try {
      const response = await axios.post(
        "http://localhost:8000/api/simForm",
        formData
      );
      console.log(response);
      console.log(formData);
      setShowModal(true);
      formRef.current.reset();
      setJenis_permohonan("");
      setTgl_datang("");
      setGol_sim("");
      setTinggi("");
      setBerkacamata("");
      setCacat_fisik("");
      setSim("");
      setJenis_sim("");
      setFoto_sim_lama("");
      setMasa_berlaku_sim("");
      setSurat_sehat("");
      setSurat_psikologi("");
      window.scrollTo(0, 0);
    } catch (error) {
      console.log(formData);
      console.log(error.response.data);
    }
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className="bodyMainPageV2">
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
                  <h3 className="TittleSection mt-4 ">
                    <img src={iconBack} className="me-2 " />
                    SIM
                  </h3>
                </NavLink>
                <h6>Surat Izin Mengemudi</h6>
                <Tabs
                  defaultActiveKey="AlurPengajuan"
                  id="uncontrolled-tab-example"
                  className="mt-4"
                  justify
                >
                  <Tab eventKey="AlurPengajuan" title="Alur">
                    <Row className="mt-4">
                      <Col>
                        <strong>Alur pelayanan</strong>
                        <Col>
                          <img src={AlurSim} className="AlurWrapper mt-2" />
                        </Col>
                      </Col>
                      <Col>
                        <strong>Persyatan</strong>
                        <ol className="mt-2">
                          <li>Permohonan tertulis</li>
                          <li>Bisa membaca dan menulis</li>
                          <li>
                            Memiliki pengetahuan peraturan lalu lintas jalan dan
                            teknik dasar kendaraan bermotor.
                          </li>
                          <li>
                            Batas usia
                            <ul>
                              <li>17 Tahun untuk SIM Golongan C</li>
                              <li>17 Tahun untuk SIM Golongan A</li>
                              <li>20 Tahun untuk SIM Golongan BI / BII</li>
                            </ul>
                          </li>
                          <li>Terampil mengemudikan kendaraan bermotor</li>
                          <li>Sehat jasmani dan rohani</li>
                          <li>Lulus ujian teori dan praktek</li>
                        </ol>
                      </Col>
                    </Row>
                  </Tab>

                  <Tab eventKey="Pengajuan" title="Pengajuan">
                    <Form
                      ref={formRef}
                      onSubmit={storeData}
                      onClick={handleShow}
                    >
                      <Row className="Content mt-4">
                        <Col lg="6" xs="12">
                          <Form.Group
                            className="form"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Jenis Permohonan</Form.Label>
                            <Row>
                              <Col>
                                <Form.Check
                                  className="Radio"
                                  type="radio"
                                  id="RadioBaru"
                                  label="Baru"
                                  value="Baru"
                                  checked={permohonanBaru}
                                  onChange={handleRadioChange}
                                  onClick={toggleContent}
                                />
                              </Col>
                              <Col>
                                <Form.Check
                                  // onClick={() => alert("hello word")}
                                  className="Radio"
                                  type="radio"
                                  id="RadioPerpanjangan"
                                  label="Perpanjangan"
                                  value="Perpanjangan"
                                  checked={!permohonanBaru}
                                  onChange={handleRadioChange}
                                  onClick={toggleContent}
                                />
                              </Col>
                            </Row>
                          </Form.Group>

                          {showContent && (
                            <div>
                              <Form.Group
                                className="form"
                                controlId="exampleForm.ControlInput1"
                              >
                                <Form.Label>Tanggal Kedatangan</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="Masukkan tanggal kedatangan"
                                  onChange={(e) =>
                                    setTgl_datang(e.target.value)
                                  }
                                />
                              </Form.Group>

                              <Form.Group
                                className="form"
                                controlId="exampleForm.ControlInput1"
                              >
                                <Form.Label>Golongan SIM</Form.Label>
                                <Form.Select aria-label="Default select example">
                                  <option>Pilih Golongan SIM Anda</option>
                                  <option
                                    onChange={(e) => setGol_sim(e.target.value)}
                                  >
                                    SIM A
                                  </option>
                                  <option
                                    onChange={(e) => setGol_sim(e.target.value)}
                                  >
                                    SIM B
                                  </option>
                                  <option
                                    onChange={(e) => setGol_sim(e.target.value)}
                                  >
                                    SIM C
                                  </option>
                                </Form.Select>
                              </Form.Group>

                              <Form.Group
                                className="form"
                                controlId="exampleForm.ControlInput1"
                              >
                                <Form.Label>Tinggi Badan</Form.Label>
                                <InputGroup className="">
                                  <Form.Control
                                    placeholder="Masukkan Tinggi Badan Anda"
                                    aria-label="Masukkan tinggi badan anda"
                                    aria-describedby="basic-addon2"
                                    onChange={(e) => setTinggi(e.target.value)}
                                  />
                                  <InputGroup.Text id="basic-addon2">
                                    CM
                                  </InputGroup.Text>
                                </InputGroup>
                              </Form.Group>

                              <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label className="form">
                                  Berkacamata
                                </Form.Label>
                                <Row>
                                  <Col>
                                    <Form.Check
                                      className="Radio"
                                      type="Radio"
                                      id="Radio"
                                      label="Iya"
                                      onChange={(e) =>
                                        setBerkacamata(e.target.value)
                                      }
                                    />
                                  </Col>
                                  <Col>
                                    <Form.Check
                                      className="Radio"
                                      type="Radio"
                                      id="Radio"
                                      label="Tidak"
                                      onChange={(e) =>
                                        setBerkacamata(e.target.value)
                                      }
                                    />
                                  </Col>
                                </Row>
                              </Form.Group>

                              <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label className="form">
                                  Cacat Fisik
                                </Form.Label>
                                <Row>
                                  <Col>
                                    <Form.Check
                                      className="Radio"
                                      type="Radio"
                                      id="Radio"
                                      label="Iya"
                                      onChange={(e) =>
                                        setCacat_fisik(e.target.value)
                                      }
                                    />
                                  </Col>
                                  <Col>
                                    <Form.Check
                                      className="Radio"
                                      type="Radio"
                                      id="Radio"
                                      label="Tidak"
                                      onChange={(e) =>
                                        setCacat_fisik(e.target.value)
                                      }
                                    />
                                  </Col>
                                </Row>
                              </Form.Group>

                              <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label className="form">
                                  Surat Izin Mengemudi
                                </Form.Label>
                                <Row>
                                  <Col>
                                    <Form.Check
                                      className="Radio"
                                      type="Radio"
                                      id="Radio"
                                      label="Ada"
                                      onChange={(e) => setSim(e.target.value)}
                                    />
                                  </Col>
                                  <Col>
                                    <Form.Check
                                      className="Radio"
                                      type="Radio"
                                      id="Radio"
                                      label="Tidak ada"
                                      onChange={(e) => setSim(e.target.value)}
                                    />
                                  </Col>
                                </Row>
                              </Form.Group>
                            </div>
                          )}

                          {!showContent && (
                            <div>
                              <Form.Group
                                className="form"
                                controlId="exampleForm.ControlInput1"
                              >
                                <Form.Label>Tanggal Kedatangan</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="Masukkan NIK Anda"
                                  onChange={(e) =>
                                    setTgl_datang(e.target.value)
                                  }
                                />
                              </Form.Group>

                              <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label className="form">
                                  Jenis SIM
                                </Form.Label>
                                <Row>
                                  <Col>
                                    <Form.Check
                                      className="Radio"
                                      type="Radio"
                                      id="Radio"
                                      label="A"
                                      onChange={(e) =>
                                        setJenis_sim(e.target.value)
                                      }
                                    />
                                  </Col>
                                  <Col>
                                    <Form.Check
                                      className="Radio"
                                      type="Radio"
                                      id="Radio"
                                      label="C"
                                      onChange={(e) =>
                                        setJenis_sim(e.target.value)
                                      }
                                    />
                                  </Col>
                                </Row>
                              </Form.Group>

                              <Form.Group controlId="formFile" className="form">
                                <Form.Label>Foto SIM Lama</Form.Label>
                                <Form.Control
                                  type="file"
                                  onChange={(e) =>
                                    setFoto_sim_lama(e.target.value)
                                  }
                                />
                                <Form.Text id="passwordHelpBlock" muted>
                                  Tipe file : pdf/jpeg/png, max file size : 2MB
                                </Form.Text>
                              </Form.Group>

                              <Form.Group
                                className="form"
                                controlId="exampleForm.ControlInput1"
                              >
                                <Form.Label>Masa Berlaku SIM Lama</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="Masukkan masa berlaku sim anda"
                                  onChange={(e) =>
                                    setMasa_berlaku_sim(e.target.value)
                                  }
                                />
                              </Form.Group>

                              <Form.Group
                                className="form"
                                controlId="exampleForm.ControlInput1"
                              >
                                <Form.Label>Tinggi Badan</Form.Label>
                                <InputGroup className="">
                                  <Form.Control
                                    placeholder="Masukkan Tinggi Badan Anda"
                                    aria-label="Masukkan tinggi badan anda"
                                    aria-describedby="basic-addon2"
                                    onChange={(e) => setTinggi(e.target.value)}
                                  />
                                  <InputGroup.Text id="basic-addon2">
                                    CM
                                  </InputGroup.Text>
                                </InputGroup>
                              </Form.Group>

                              <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label className="form">
                                  Berkacamata
                                </Form.Label>
                                <Row>
                                  <Col>
                                    <Form.Check
                                      className="Radio"
                                      type="Radio"
                                      id="Radio"
                                      label="Iya"
                                      onChange={(e) =>
                                        setBerkacamata(e.target.value)
                                      }
                                    />
                                  </Col>
                                  <Col>
                                    <Form.Check
                                      className="Radio"
                                      type="Radio"
                                      id="Radio"
                                      label="Tidak"
                                      onChange={(e) =>
                                        setBerkacamata(e.target.value)
                                      }
                                    />
                                  </Col>
                                </Row>
                              </Form.Group>
                            </div>
                          )}
                        </Col>
                        <Col lg="6">
                          {showContent && (
                            <div>
                              <Form.Group controlId="formFile" className="form">
                                <Form.Label>Surat Keterangan Sehat</Form.Label>
                                <Form.Control
                                  type="file"
                                  onChange={(e) =>
                                    setSurat_sehat(e.target.value)
                                  }
                                />
                                <Form.Text id="passwordHelpBlock" muted>
                                  Tipe file : pdf/jpeg/png, max file size : 2MB
                                </Form.Text>
                              </Form.Group>

                              <Form.Group controlId="formFile" className="form">
                                <Form.Label>
                                  Surat Lulus Tes Psikologi
                                </Form.Label>
                                <Form.Control
                                  type="file"
                                  onChange={(e) =>
                                    setSurat_psikologi(e.target.value)
                                  }
                                />
                                <Form.Text id="passwordHelpBlock" muted>
                                  Tipe file : pdf/jpeg/png, max file size : 2MB
                                </Form.Text>
                              </Form.Group>

                              <div className="LoginButton">
                                <Button variant="Danger" size="m">
                                  Kirim
                                </Button>
                              </div>
                            </div>
                          )}

                          {!showContent && (
                            <div>
                              <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label className="form">
                                  Cacat Fisik
                                </Form.Label>
                                <Row>
                                  <Col>
                                    <Form.Check
                                      className="Radio"
                                      type="Radio"
                                      id="Radio"
                                      label="Iya"
                                      onChange={(e) =>
                                        setCacat_fisik(e.target.value)
                                      }
                                    />
                                  </Col>
                                  <Col>
                                    <Form.Check
                                      className="Radio"
                                      type="Radio"
                                      id="Radio"
                                      label="Tidak"
                                      onChange={(e) =>
                                        setCacat_fisik(e.target.value)
                                      }
                                    />
                                  </Col>
                                </Row>
                              </Form.Group>

                              <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label className="form">
                                  Surat Izin Mengemudi
                                </Form.Label>
                                <Row>
                                  <Col>
                                    <Form.Check
                                      className="Radio"
                                      type="Radio"
                                      id="Radio"
                                      label="Ada"
                                      onChange={(e) => setSim(e.target.value)}
                                    />
                                  </Col>
                                  <Col>
                                    <Form.Check
                                      className="Radio"
                                      type="Radio"
                                      id="Radio"
                                      label="Tidak ada"
                                      onChange={(e) => setSim(e.target.value)}
                                    />
                                  </Col>
                                </Row>
                              </Form.Group>

                              <Form.Group controlId="formFile" className="form">
                                <Form.Label>Surat Keterangan Sehat</Form.Label>
                                <Form.Control
                                  type="file"
                                  onChange={(e) =>
                                    setSurat_sehat(e.target.value)
                                  }
                                />
                                <Form.Text id="passwordHelpBlock" muted>
                                  Tipe file : pdf/jpeg/png, max file size : 2MB
                                </Form.Text>
                              </Form.Group>

                              <Form.Group controlId="formFile" className="form">
                                <Form.Label>
                                  Surat Lulus Tes Psikologi
                                </Form.Label>
                                <Form.Control
                                  type="file"
                                  onChange={(e) =>
                                    setSurat_psikologi(e.target.value)
                                  }
                                />
                                <Form.Text id="passwordHelpBlock" muted>
                                  Tipe file : pdf/jpeg/png, max file size : 2MB
                                </Form.Text>
                              </Form.Group>

                              <div className="LoginButton">
                                <Button variant="Danger" size="m">
                                  Kirim
                                </Button>
                              </div>
                            </div>
                          )}
                        </Col>
                      </Row>
                    </Form>
                  </Tab>

                  <Tab eventKey="Riwayat" title="Riwayat">
                    <Row className="Content mt-4">
                      <Col>
                        <Table bordered responsive>
                          <thead>
                            <tr>
                              <th>No</th>
                              <th>Nama</th>
                              <th>Tanggal Pengajuan</th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>Lucky Febrian</td>
                              <td>11-12-2023</td>
                              <td>Berhasil diajukan</td>
                            </tr>
                          </tbody>
                        </Table>
                      </Col>
                    </Row>
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
        <Modal show={show} onHide={handleClose} animation={false} centered>
          <Modal.Header closeButton>
            <Modal.Title>Pengajuan Berhasil</Modal.Title>
          </Modal.Header>
          <Modal.Body>Pengajuan SIM berhasil </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default SimPageNew;
