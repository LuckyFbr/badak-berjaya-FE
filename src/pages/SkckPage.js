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
import React, { useState, useEffect } from "react";
import SideNavbar from "../component/SideNavbar";
import AlurSkck from "../assets/Alur_skck.png";
import iconBack from "../assets/icon/fi-rr-arrow-small-left.svg";
import Coba from "./Coba";
import { NavLink, useNavigate } from "react-router-dom";
import Logobadak from "../assets/BadakBerjaya.svg";

const SkckPage = () => {
  const [permohonanBaru, setPermohonanBaru] = useState(true);
  const handleRadioChange = (event) => {
    setPermohonanBaru(event.target.value === "Baru");
  };

  const [showContent, setShowContent] = useState(true);
  const toggleContent = () => {
    setShowContent(!showContent);
  };

  const [isMobile, setIsMobile] = useState(false);

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

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/Login");
    }
  });

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
                      SKCK
                    </h3>
                  </NavLink>
                  <h6>Surat Keterangan Catatan Kepolisian</h6>
                  <Tabs
                    defaultActiveKey="AlurPengajuan"
                    id="uncontrolled-tab-example"
                    className="mt-4"
                    justify
                  >
                    <Tab eventKey="AlurPengajuan" title="Alur">
                      <Row className="Content mt-4">
                        <Col>
                          <strong>Alur pelayanan</strong>
                          <Col>
                            <img src={AlurSkck} className="AlurWrapper mt-2" />
                          </Col>
                        </Col>
                        <Col>
                          <strong>Persyaratan</strong>
                          <ol className="mt-2">
                            <li>
                              Membawa Surat Pengantar dari Kantor Kelurahan
                              tempat domisili pemohon
                            </li>
                            <li>
                              Membawa fotocopy KTP/SIM sesuai dengan domisili
                              yang tertera di surat pengantar dari Kantor
                              Kelurahan
                            </li>
                            <li>Membawa fotocopy Kartu Keluarga.</li>
                            <li>Membawa fotocopy Akta Kelahiran/Kenal Lahir</li>
                            <li>
                              Membawa Pas Foto terbaru dan berwarna ukuran 4×6
                              sebanyak 6 lembar.
                            </li>
                            <li>
                              Mengisi Formulir Daftar Riwayat Hidup yang telah
                              disediakan di kantor Polisi dengan jelas dan bena
                            </li>
                            <li>Pengambilan Sidik Jari oleh petugas</li>
                          </ol>
                        </Col>
                      </Row>
                    </Tab>

                    <Tab eventKey="Pengajuan" title="Pengajuan">
                      <Row className="Content mt-4">
                        <Col lg="6" xs="12">
                          <Form>
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
                                    placeholder="Masukkan NIK Anda"
                                  />
                                </Form.Group>

                                <Form.Group
                                  className="form"
                                  controlId="exampleForm.ControlInput1"
                                >
                                  <Form.Label>Keperluan</Form.Label>
                                  <Form.Select aria-label="Default select example">
                                    <option>Pilih keperluan</option>
                                    <option value="1">
                                      Pencalonan Anggota Legislatif Tingkat
                                      Kabupaten/Kota
                                    </option>
                                    <option value="2">
                                      Melamar Sebagai PNS
                                    </option>
                                    <option value="3">
                                      Melamar Sebagai Anggota TNI/Polri
                                    </option>
                                    <option value="4">
                                      Pencalonan Pejabat Publik
                                    </option>
                                    <option value="5">
                                      Kepemilikan Senjata Api
                                    </option>
                                    <option value="6">Melamar Pekerjaan</option>
                                    <option value="7">
                                      Pencalonan Kepala Daerah Tingkat
                                      Kabupaten/Kota
                                    </option>
                                    <option value="7">keperluan Lainnya</option>
                                  </Form.Select>
                                </Form.Group>

                                <Form.Group
                                  className="form"
                                  controlId="exampleForm.ControlInput1"
                                >
                                  <Form.Label>
                                    Rumus Sidik Jari Kanan
                                  </Form.Label>
                                  <Form.Control
                                    type="text"
                                    placeholder="Masukkan rumus"
                                  />
                                </Form.Group>

                                <Form.Group
                                  className="form"
                                  controlId="exampleForm.ControlInput1"
                                >
                                  <Form.Label>Rumus Sidik Jari Kiri</Form.Label>
                                  <Form.Control
                                    type="text"
                                    placeholder="Masukkan rumus"
                                  />
                                </Form.Group>

                                <Form.Group
                                  controlId="formFile"
                                  className="form"
                                >
                                  <Form.Label>Pas Foto</Form.Label>
                                  <Form.Control type="file" />
                                  <Form.Text id="passwordHelpBlock" muted>
                                    Ukuran 4x6cm, latar belakang berwarna merah
                                    serta maks file 2MB
                                  </Form.Text>
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
                                  />
                                </Form.Group>

                                <Form.Group
                                  controlId="formFile"
                                  className="form"
                                >
                                  <Form.Label>Foto SKCK Lama</Form.Label>
                                  <Form.Control type="file" />
                                  <Form.Text
                                    id="passwordHelpBlock"
                                    muted
                                  ></Form.Text>
                                </Form.Group>

                                <Form.Group
                                  className="form"
                                  controlId="exampleForm.ControlInput1"
                                >
                                  <Form.Label>Keperluan</Form.Label>
                                  <Form.Select aria-label="Default select example">
                                    <option>Pilih keperluan</option>
                                    <option value="1">
                                      Pencalonan Anggota Legislatif Tingkat
                                      Kabupaten/Kota
                                    </option>
                                    <option value="2">
                                      Melamar Sebagai PNS
                                    </option>
                                    <option value="3">
                                      Melamar Sebagai Anggota TNI/Polri
                                    </option>
                                    <option value="4">
                                      Pencalonan Pejabat Publik
                                    </option>
                                    <option value="5">
                                      Kepemilikan Senjata Api
                                    </option>
                                    <option value="6">Melamar Pekerjaan</option>
                                    <option value="7">
                                      Pencalonan Kepala Daerah Tingkat
                                      Kabupaten/Kota
                                    </option>
                                    <option value="7">keperluan Lainnya</option>
                                  </Form.Select>
                                </Form.Group>

                                <Form.Group
                                  className="form"
                                  controlId="exampleForm.ControlInput1"
                                >
                                  <Form.Label>
                                    Rumus Sidik Jari Kanan
                                  </Form.Label>
                                  <Form.Control
                                    type="text"
                                    placeholder="Masukkan rumus"
                                  />
                                </Form.Group>

                                <Form.Group
                                  className="form"
                                  controlId="exampleForm.ControlInput1"
                                >
                                  <Form.Label>Rumus Sidik Jari Kiri</Form.Label>
                                  <Form.Control
                                    type="text"
                                    placeholder="Masukkan rumus"
                                  />
                                </Form.Group>

                                <Form.Group
                                  controlId="formFile"
                                  className="form"
                                >
                                  <Form.Label>Pas Foto</Form.Label>
                                  <Form.Control type="file" />
                                  <Form.Text id="passwordHelpBlock" muted>
                                    Ukuran 4x6cm, latar belakang berwarna merah
                                    serta maks file 2MB
                                  </Form.Text>
                                </Form.Group>
                              </div>
                            )}
                          </Form>
                        </Col>
                        <Col lg="6">
                          {showContent && (
                            <div>
                              <Form>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                  <Form.Label className="form">
                                    Cara Bayar
                                  </Form.Label>
                                  <Row>
                                    <Col>
                                      <Form.Check
                                        className="Radio"
                                        type="Radio"
                                        id="Radio"
                                        label="Loket"
                                      />
                                    </Col>
                                    <Col>
                                      <Form.Check
                                        className="Radio"
                                        type="Radio"
                                        id="Radio"
                                        label="Transfer (Rek BRI Harus a.n Pemohon)"
                                      />
                                    </Col>
                                  </Row>
                                </Form.Group>
                              </Form>

                              <div className="LoginButton">
                                <Button variant="primary" size="m">
                                  Masuk
                                </Button>
                              </div>
                            </div>
                          )}

                          {!showContent && (
                            <div>
                              <Form>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                  <Form.Label className="form">
                                    Cara Bayar
                                  </Form.Label>
                                  <Row>
                                    <Col>
                                      <Form.Check
                                        className="Radio"
                                        type="Radio"
                                        id="Radio"
                                        label="Loket"
                                      />
                                    </Col>
                                    <Col>
                                      <Form.Check
                                        className="Radio"
                                        type="Radio"
                                        id="Radio"
                                        label="Transfer (Rek BRI Harus a.n Pemohon)"
                                      />
                                    </Col>
                                  </Row>
                                </Form.Group>
                              </Form>

                              <div className="LoginButton">
                                <Button variant="primary" size="m">
                                  Masuk
                                </Button>
                              </div>
                            </div>
                          )}
                        </Col>
                      </Row>
                    </Tab>

                    <Tab eventKey="Draft Pengajuan" title="Draft">
                      <Row className="Content mt-4">
                        <Col lg="6" xs="12">
                          <Form>
                            <Form.Group
                              className="form"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>
                                NIK (Nomor Induk Kependudukan)
                              </Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Masukkan NIK Anda"
                              />
                            </Form.Group>

                            <Form.Group
                              className="form"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>Jenis Permohonan</Form.Label>
                              <Row>
                                <Col>
                                  <Form.Check
                                    className="Radio"
                                    type="Radio"
                                    id="Radio"
                                    label="Baru"
                                  />
                                </Col>
                                <Col>
                                  <Form.Check
                                    className="Radio"
                                    type="Radio"
                                    id="Radio"
                                    label="Perpanjangan"
                                  />
                                </Col>
                              </Row>
                            </Form.Group>

                            <Form.Group
                              className="form"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>Golongan SIM</Form.Label>
                              <Form.Select aria-label="Default select example">
                                <option>Pilih Golongan SIM Anda</option>
                                <option value="1">SIM A</option>
                                <option value="2">SIM B</option>
                                <option value="3">SIM C</option>
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
                                  />
                                </Col>
                                <Col>
                                  <Form.Check
                                    className="Radio"
                                    type="Radio"
                                    id="Radio"
                                    label="Tidak"
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
                                  />
                                </Col>
                                <Col>
                                  <Form.Check
                                    className="Radio"
                                    type="Radio"
                                    id="Radio"
                                    label="Tidak"
                                  />
                                </Col>
                              </Row>
                            </Form.Group>
                          </Form>
                        </Col>
                        <Col lg="6">
                          <Form>
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
                                  />
                                </Col>
                                <Col>
                                  <Form.Check
                                    className="Radio"
                                    type="Radio"
                                    id="Radio"
                                    label="Tidak ada"
                                  />
                                </Col>
                              </Row>
                            </Form.Group>

                            <Form.Group controlId="formFile" className="form">
                              <Form.Label>Surat Keterangan Sehat</Form.Label>
                              <Form.Control type="file" />
                              <Form.Text id="passwordHelpBlock" muted>
                                Tipe file : pdf/jpeg/png, max file size : 2MB
                              </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formFile" className="form">
                              <Form.Label>Surat Lulus Tes Psikologi</Form.Label>
                              <Form.Control type="file" />
                              <Form.Text id="passwordHelpBlock" muted>
                                Tipe file : pdf/jpeg/png, max file size : 2MB
                              </Form.Text>
                            </Form.Group>
                          </Form>

                          <div className="LoginButton">
                            <Button variant="primary" size="m">
                              Masuk
                            </Button>
                          </div>
                        </Col>
                      </Row>
                    </Tab>

                    <Tab eventKey="Riwayat" title="Riwayat">
                      Tab content for Contact
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
                      SKCK
                    </h3>
                  </NavLink>
                  <h6>Surat Keterangan Catatan Kepolisian</h6>
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
                            <img src={AlurSkck} className="AlurWrapper mt-2" />
                          </Col>
                        </Col>
                        <Col>
                          <strong>Persyaratan</strong>
                          <ol className="mt-2">
                            <li>
                              Membawa Surat Pengantar dari Kantor Kelurahan
                              tempat domisili pemohon
                            </li>
                            <li>
                              Membawa fotocopy KTP/SIM sesuai dengan domisili
                              yang tertera di surat pengantar dari Kantor
                              Kelurahan
                            </li>
                            <li>Membawa fotocopy Kartu Keluarga.</li>
                            <li>Membawa fotocopy Akta Kelahiran/Kenal Lahir</li>
                            <li>
                              Membawa Pas Foto terbaru dan berwarna ukuran 4×6
                              sebanyak 6 lembar.
                            </li>
                            <li>
                              Mengisi Formulir Daftar Riwayat Hidup yang telah
                              disediakan di kantor Polisi dengan jelas dan bena
                            </li>
                            <li>Pengambilan Sidik Jari oleh petugas</li>
                          </ol>
                        </Col>
                      </Row>
                    </Tab>

                    <Tab eventKey="Pengajuan" title="Pengajuan">
                      <Row className="mt-4">
                        <Col lg="6" xs="12">
                          <Form>
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
                                    placeholder="Masukkan NIK Anda"
                                  />
                                </Form.Group>

                                <Form.Group
                                  className="form"
                                  controlId="exampleForm.ControlInput1"
                                >
                                  <Form.Label>Keperluan</Form.Label>
                                  <Form.Select aria-label="Default select example">
                                    <option>Pilih keperluan</option>
                                    <option value="1">
                                      Pencalonan Anggota Legislatif Tingkat
                                      Kabupaten/Kota
                                    </option>
                                    <option value="2">
                                      Melamar Sebagai PNS
                                    </option>
                                    <option value="3">
                                      Melamar Sebagai Anggota TNI/Polri
                                    </option>
                                    <option value="4">
                                      Pencalonan Pejabat Publik
                                    </option>
                                    <option value="5">
                                      Kepemilikan Senjata Api
                                    </option>
                                    <option value="6">Melamar Pekerjaan</option>
                                    <option value="7">
                                      Pencalonan Kepala Daerah Tingkat
                                      Kabupaten/Kota
                                    </option>
                                    <option value="7">keperluan Lainnya</option>
                                  </Form.Select>
                                </Form.Group>

                                <Form.Group
                                  className="form"
                                  controlId="exampleForm.ControlInput1"
                                >
                                  <Form.Label>
                                    Rumus Sidik Jari Kanan
                                  </Form.Label>
                                  <Form.Control
                                    type="text"
                                    placeholder="Masukkan rumus"
                                  />
                                </Form.Group>

                                <Form.Group
                                  className="form"
                                  controlId="exampleForm.ControlInput1"
                                >
                                  <Form.Label>Rumus Sidik Jari Kiri</Form.Label>
                                  <Form.Control
                                    type="text"
                                    placeholder="Masukkan rumus"
                                  />
                                </Form.Group>

                                <Form.Group
                                  controlId="formFile"
                                  className="form"
                                >
                                  <Form.Label>Pas Foto</Form.Label>
                                  <Form.Control type="file" />
                                  <Form.Text id="passwordHelpBlock" muted>
                                    Ukuran 4x6cm, latar belakang berwarna merah
                                    serta maks file 2MB
                                  </Form.Text>
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
                                  />
                                </Form.Group>

                                <Form.Group
                                  controlId="formFile"
                                  className="form"
                                >
                                  <Form.Label>Foto SKCK Lama</Form.Label>
                                  <Form.Control type="file" />
                                  <Form.Text
                                    id="passwordHelpBlock"
                                    muted
                                  ></Form.Text>
                                </Form.Group>

                                <Form.Group
                                  className="form"
                                  controlId="exampleForm.ControlInput1"
                                >
                                  <Form.Label>Keperluan</Form.Label>
                                  <Form.Select aria-label="Default select example">
                                    <option>Pilih keperluan</option>
                                    <option value="1">
                                      Pencalonan Anggota Legislatif Tingkat
                                      Kabupaten/Kota
                                    </option>
                                    <option value="2">
                                      Melamar Sebagai PNS
                                    </option>
                                    <option value="3">
                                      Melamar Sebagai Anggota TNI/Polri
                                    </option>
                                    <option value="4">
                                      Pencalonan Pejabat Publik
                                    </option>
                                    <option value="5">
                                      Kepemilikan Senjata Api
                                    </option>
                                    <option value="6">Melamar Pekerjaan</option>
                                    <option value="7">
                                      Pencalonan Kepala Daerah Tingkat
                                      Kabupaten/Kota
                                    </option>
                                    <option value="7">keperluan Lainnya</option>
                                  </Form.Select>
                                </Form.Group>

                                <Form.Group
                                  className="form"
                                  controlId="exampleForm.ControlInput1"
                                >
                                  <Form.Label>
                                    Rumus Sidik Jari Kanan
                                  </Form.Label>
                                  <Form.Control
                                    type="text"
                                    placeholder="Masukkan rumus"
                                  />
                                </Form.Group>

                                <Form.Group
                                  className="form"
                                  controlId="exampleForm.ControlInput1"
                                >
                                  <Form.Label>Rumus Sidik Jari Kiri</Form.Label>
                                  <Form.Control
                                    type="text"
                                    placeholder="Masukkan rumus"
                                  />
                                </Form.Group>

                                <Form.Group
                                  controlId="formFile"
                                  className="form"
                                >
                                  <Form.Label>Pas Foto</Form.Label>
                                  <Form.Control type="file" />
                                  <Form.Text id="passwordHelpBlock" muted>
                                    Ukuran 4x6cm, latar belakang berwarna merah
                                    serta maks file 2MB
                                  </Form.Text>
                                </Form.Group>
                              </div>
                            )}
                          </Form>
                        </Col>
                        <Col lg="6">
                          {showContent && (
                            <div>
                              <Form>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                  <Form.Label className="form">
                                    Cara Bayar
                                  </Form.Label>
                                  <Row>
                                    <Col>
                                      <Form.Check
                                        className="Radio"
                                        type="Radio"
                                        id="Radio"
                                        label="Loket"
                                      />
                                    </Col>
                                    <Col>
                                      <Form.Check
                                        className="Radio"
                                        type="Radio"
                                        id="Radio"
                                        label="Transfer (Rek BRI Harus a.n Pemohon)"
                                      />
                                    </Col>
                                  </Row>
                                </Form.Group>
                              </Form>

                              <div className="LoginButton">
                                <Button variant="primary" size="m">
                                  Masuk
                                </Button>
                              </div>
                            </div>
                          )}

                          {!showContent && (
                            <div>
                              <Form>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                  <Form.Label className="form">
                                    Cara Bayar
                                  </Form.Label>
                                  <Row>
                                    <Col>
                                      <Form.Check
                                        className="Radio"
                                        type="Radio"
                                        id="Radio"
                                        label="Loket"
                                      />
                                    </Col>
                                    <Col>
                                      <Form.Check
                                        className="Radio"
                                        type="Radio"
                                        id="Radio"
                                        label="Transfer (Rek BRI Harus a.n Pemohon)"
                                      />
                                    </Col>
                                  </Row>
                                </Form.Group>
                              </Form>

                              <div className="LoginButton">
                                <Button variant="primary" size="m">
                                  Masuk
                                </Button>
                              </div>
                            </div>
                          )}
                        </Col>
                      </Row>
                    </Tab>

                    <Tab eventKey="Draft Pengajuan" title="Draft">
                      <Row className="mt-4">
                        <Col lg="6" xs="12">
                          <Form>
                            <Form.Group
                              className="form"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>
                                NIK (Nomor Induk Kependudukan)
                              </Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Masukkan NIK Anda"
                              />
                            </Form.Group>

                            <Form.Group
                              className="form"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>Jenis Permohonan</Form.Label>
                              <Row>
                                <Col>
                                  <Form.Check
                                    className="Radio"
                                    type="Radio"
                                    id="Radio"
                                    label="Baru"
                                  />
                                </Col>
                                <Col>
                                  <Form.Check
                                    className="Radio"
                                    type="Radio"
                                    id="Radio"
                                    label="Perpanjangan"
                                  />
                                </Col>
                              </Row>
                            </Form.Group>

                            <Form.Group
                              className="form"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>Golongan SIM</Form.Label>
                              <Form.Select aria-label="Default select example">
                                <option>Pilih Golongan SIM Anda</option>
                                <option value="1">SIM A</option>
                                <option value="2">SIM B</option>
                                <option value="3">SIM C</option>
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
                                  />
                                </Col>
                                <Col>
                                  <Form.Check
                                    className="Radio"
                                    type="Radio"
                                    id="Radio"
                                    label="Tidak"
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
                                  />
                                </Col>
                                <Col>
                                  <Form.Check
                                    className="Radio"
                                    type="Radio"
                                    id="Radio"
                                    label="Tidak"
                                  />
                                </Col>
                              </Row>
                            </Form.Group>
                          </Form>
                        </Col>
                        <Col lg="6">
                          <Form>
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
                                  />
                                </Col>
                                <Col>
                                  <Form.Check
                                    className="Radio"
                                    type="Radio"
                                    id="Radio"
                                    label="Tidak ada"
                                  />
                                </Col>
                              </Row>
                            </Form.Group>

                            <Form.Group controlId="formFile" className="form">
                              <Form.Label>Surat Keterangan Sehat</Form.Label>
                              <Form.Control type="file" />
                              <Form.Text id="passwordHelpBlock" muted>
                                Tipe file : pdf/jpeg/png, max file size : 2MB
                              </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formFile" className="form">
                              <Form.Label>Surat Lulus Tes Psikologi</Form.Label>
                              <Form.Control type="file" />
                              <Form.Text id="passwordHelpBlock" muted>
                                Tipe file : pdf/jpeg/png, max file size : 2MB
                              </Form.Text>
                            </Form.Group>
                          </Form>

                          <div className="LoginButton">
                            <Button variant="primary" size="m">
                              Masuk
                            </Button>
                          </div>
                        </Col>
                      </Row>
                    </Tab>

                    <Tab eventKey="Riwayat" title="Riwayat">
                      Tab content for Contact
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

export default SkckPage;
