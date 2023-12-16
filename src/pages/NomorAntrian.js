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

const NomorAntrian = () => {
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
              <NavLink className="text-decoration-none" to="/Notifikasi">
                <h3 className="TittleSection mt-4">
                  <img src={iconBack} className="me-2" />
                  Notifikasi
                </h3>
              </NavLink>
              <h6>Berikut ini nomor antrian anda</h6>
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
                        <div className="text-urut-wrapper">
                          <div className="text-urut1">POLRES LAMPUNG TIMUR</div>
                          <div className="text-urut2">
                            No Urut Pelayanan SIM
                          </div>
                          <div className="text-urut3">04</div>
                          <div className="text-urut2">
                            Kamis, 11 Desember 2023
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Tab>

                <Tab eventKey="Riwayat" title="SKCKC">
                  <Row className="Content mt-4">
                    <Col lg="6" xs="12">
                      <div className="Antrian">
                        <img src={Logobadak} className="Logo-Antrian"></img>
                        <div className="text-urut-wrapper">
                          <div className="text-urut1">POLRES LAMPUNG TIMUR</div>
                          <div className="text-urut2">
                            No Urut Pelayanan SKCK
                          </div>
                          <div className="text-urut3">00</div>
                          <div className="text-urut2">
                            Kamis, 11 Desember 2023
                          </div>
                        </div>
                      </div>
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

export default NomorAntrian;
