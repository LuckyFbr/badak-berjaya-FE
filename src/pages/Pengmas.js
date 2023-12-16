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
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Logobadak from "../assets/BadakBerjaya.svg";
import axios from "axios";

const Pengmas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [judul, setJudul] = useState();
  const [isi_pesan, setIsi_pesan] = useState();
  const [dataRiwayat, setDataRiwayat] = useState([]);
  const token = localStorage.getItem("token");
  const formRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/Login");
    }
  });

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 500);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const storeData = async (e) => {
    e.preventDefault();

    const data = {
      judul: judul,
      isi_pesan: isi_pesan,
    };

    try {
      const response = await axios.post(
        "http://localhost:8000/api/pengaduan",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Sertakan token JWT di header Authorization
          },
        }
      );
      console.log(response);
      formRef.current.reset();
      setJudul("");
      setIsi_pesan("");
      window.scrollTo(0, 0);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const lihatRiwayat = async (e) => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/Riwayat-Pengaduan",
        {
          headers: {
            Authorization: `Bearer ${token}`, // Sertakan token JWT di header Authorization
          },
        }
      );
      const riwayat = response.data;
      console.log(riwayat);
      setDataRiwayat(riwayat);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div>
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
                  Pengaduan Masyarakat
                </h3>
              </NavLink>
              <h6>Silahkan sampaiakan pengaduan anda</h6>
              <Tabs
                defaultActiveKey="IsiFormulir"
                id="uncontrolled-tab-example"
                className="mt-4"
                justify
                onSelect={(eventKey) => {
                  if (eventKey === "Riwayat") {
                    lihatRiwayat();
                  }
                }}
              >
                <Tab eventKey="IsiFormulir" title="Isi Formulir">
                  <Row className="Content mt-4">
                    <Col lg="6" xs="12">
                      <Form ref={formRef} onSubmit={storeData}>
                        <Form.Group
                          className="form"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>Judul</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Masukkan judul"
                            onChange={(e) => setJudul(e.target.value)}
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
                            onChange={(e) => setIsi_pesan(e.target.value)}
                          />
                        </Form.Group>

                        <div className="LoginButton">
                          <Button variant="danger" size="m" type="submit">
                            Kirim
                          </Button>
                        </div>
                      </Form>
                    </Col>
                  </Row>
                </Tab>

                <Tab eventKey="Riwayat" title="Riwayat">
                  <Row className="Content mt-4">
                    <Col>
                      <Table bordered responsive>
                        <thead>
                          <tr>
                            <th>No</th>
                            <th>Judul</th>
                            <th>Tanggal</th>
                          </tr>
                        </thead>
                        {dataRiwayat.map((item, index) => (
                          <tbody key={index}>
                            <tr>
                              <td>{index + 1}</td>
                              <td>{item.judul}</td>
                              <td>{item.created_at}</td>
                            </tr>
                          </tbody>
                        ))}
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
    </div>
  );
};

export default Pengmas;
