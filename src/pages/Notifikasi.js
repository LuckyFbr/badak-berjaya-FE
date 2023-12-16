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
import { useState, useEffect } from "react";
import Logobadak from "../assets/BadakBerjaya.svg";
import arrow from "../assets/icon/fi-rr-angle-small-right.svg";
import iconNotifikasiActive from "../assets/icon/NavIcon/solid/notification.svg";

const Notifikasi = () => {
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
              <NavLink className="text-decoration-none" to="/Beranda">
                <h3 className="TittleSection mt-4">
                  <img src={iconBack} className="me-2" />
                  Notifikasi
                </h3>
              </NavLink>
              <Tabs
                defaultActiveKey="IsiFormulir"
                id="uncontrolled-tab-example"
                className="mt-4"
              >
                <Tab eventKey="IsiFormulir" title="Baru">
                  <Row className="mt-4">
                    <NavLink
                      className="text-decoration-none"
                      to="/Antrian-anda"
                    >
                      <Col>
                        <div className="Notifikasi">
                          <div className="text-notifikasi">
                            <div>
                              <img
                                className="me-2"
                                src={iconNotifikasiActive}
                              ></img>
                            </div>
                            Lihat nomor antrian Anda
                          </div>
                          <div className="arrow-wrapper">
                            <img src={arrow}></img>
                          </div>
                        </div>
                      </Col>
                    </NavLink>
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

export default Notifikasi;
