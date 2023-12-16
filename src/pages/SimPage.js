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
import SideNavbar from "../component/SideNavbar";
import AlurSim from "../assets/Alur_sim.png";
import Coba from "./Coba";

const SimPage = () => {
  return (
    <div className="bodyMainPageV2">
      <Container fluid>
        <div className="MainWrapper">
          <Row className="Row1">
            <Col className="backgroundAppV2">
              <h3 className="mt-4">SIM</h3>
              <h6>Surat Izin Mengemudi</h6>

              <Tabs
                defaultActiveKey="AlurPengajuan"
                id="uncontrolled-tab-example"
                className="mt-4"
              >
                <Tab eventKey="AlurPengajuan" title="Alur Pengajuan">
                  <Row className="mt-4">
                    <Col>
                      <strong>Alur pelayanan</strong>
                      <Col>
                        <img src={AlurSim} className="AlurWrapper" />
                      </Col>
                    </Col>
                    <Col>
                      <strong>Alur pelayanan</strong>
                      <ol>
                        Pembuatan SIM Baru
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
                  <Container>
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
                                  onClick={() => alert("hello word")}
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
                  </Container>
                </Tab>

                <Tab eventKey="Draft Pengajuan" title="Draft Pengajuan">
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
                          <Form.Label className="form">Berkacamata</Form.Label>
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
                          <Form.Label className="form">Cacat Fisik</Form.Label>
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
  );
};

export default SimPage;
