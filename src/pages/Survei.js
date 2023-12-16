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
  Modal,
} from "react-bootstrap";
import iconBack from "../assets/icon/fi-rr-arrow-small-left.svg";
import Coba from "./Coba";
import GambarError from "../assets/icon/pixeltrue-vision-1 1.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Logobadak from "../assets/BadakBerjaya.svg";
import arrow from "../assets/icon/fi-rr-angle-small-right.svg";
import iconSurveiActive from "../assets/icon/Huge-icon/solid/assignment.svg";

const Survei = () => {
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

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose} animation={false} centered>
        <Modal.Header closeButton>
          <Modal.Title>Survei</Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body>
            Dari skala 1-5, Apakah anda puas dengan pelayanan kami?
            <Row>
              <Col>
                <Form.Check
                  className="Radio"
                  type="radio"
                  id="radio1"
                  label="1 (Sangat Tidak Puas)"
                  value="1"
                  checked={selectedOption === "1"}
                  onChange={handleOptionChange}
                />

                <Form.Check
                  className="Radio"
                  type="radio"
                  id="radio2"
                  label="2 (Tidak Puas)"
                  value="2"
                  checked={selectedOption === "2"}
                  onChange={handleOptionChange}
                />

                <Form.Check
                  className="Radio"
                  type="radio"
                  id="radio3"
                  label="3 (Normal)"
                  value="3"
                  checked={selectedOption === "3"}
                  onChange={handleOptionChange}
                />

                <Form.Check
                  className="Radio"
                  type="radio"
                  id="radio4"
                  label="4 (Memuaskan)"
                  value="4"
                  checked={selectedOption === "4"}
                  onChange={handleOptionChange}
                />

                <Form.Check
                  className="Radio"
                  type="radio"
                  id="radio5"
                  label="5 (Sangat Memuaskan)"
                  value="5"
                  checked={selectedOption === "5"}
                  onChange={handleOptionChange}
                />
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button
              className="btn-survei"
              variant="danger"
              type="submit"
              onClick={storeData}
            >
              Kirim
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
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
                  Survei
                </h3>
              </NavLink>
              <h6>Silahkan isi survey yang ada dibawah ini</h6>
              <Tabs
                defaultActiveKey="IsiFormulir"
                id="uncontrolled-tab-example"
                className="mt-4"
              >
                <Tab eventKey="IsiFormulir" title="Formulir">
                  <Row className="Content mt-4">
                    {/* <div className="GambarErrorWrapper">
                          <img src={GambarError} className="GambarError" />
                          <h4>Opss tidak ada list survey!</h4>
                        </div> */}
                    <Col>
                      <div className="Notifikasi" onClick={handleShow}>
                        <div className="text-notifikasi">
                          <div>
                            <img className="me-2" src={iconSurveiActive}></img>
                          </div>
                          Isi survey
                        </div>
                        <div className="arrow-wrapper">
                          <img src={arrow}></img>
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

export default Survei;
