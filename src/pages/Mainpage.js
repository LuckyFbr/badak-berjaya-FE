import { Row, Col, Container, Button } from "react-bootstrap";
import SideNavbar from "../component/SideNavbar";
import simicon from "../assets/icon/Menu-icon-sim.svg";
import skckicon from "../assets/icon/Menu-icon-skck.svg";
import infoicon from "../assets/icon/Menu-icon-info.svg";
import pelmasicon from "../assets/icon/Menu-icon-pelaporan.svg";
import kritiksaranicon from "../assets/icon/Menu-icon-kritik.svg";
import surveiicon from "../assets/icon/Menu-icon-survey.svg";
import dupresicon from "../assets/icon/Menu-icon-dumes.svg";
import antrianicon from "../assets/icon/Menu-icon-antrian.svg";
import { useState, useEffect } from "react";
import Coba from "../pages/Coba";
import { NavLink } from "react-router-dom";
import Banner from "../assets/icon/banner.jpeg";
import Pattern from "../assets/pattern.png";
import Logobadak from "../assets/BadakBerjaya.svg";
import { useNavigate } from "react-router-dom/dist";
import axios from "axios";
import PanicCall from "../assets/icon/Huge-icon/solid/menu-panic-call.svg";

const Mainpage = () => {
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
        <div className="bodyMainPage">
          <Container fluid>
            <div className="MainWrapper">
              <Row className="">
                <Col className="backgroundApp">
                  {/* {userData.map((user) => ( */}
                  <div className="UserTextWrapper">
                    <div className="GreetingText">Selamat datang di</div>
                    <div className="UserText">BADAK BERJAYA</div>
                    <img src={Banner} className="boxMobile"></img>
                  </div>
                  {/* ))} */}
                  <hr id="hr"></hr>
                  <h4 className="MenuSectionText" id="menuutama">
                    Menu utama
                  </h4>
                </Col>
              </Row>
            </div>
          </Container>
          <div className="wrapper-menu" id="wrappermenu">
            <Container>
              <Row className="Upper-Menu">
                <Col className="MenuIconWrapper">
                  <NavLink className="text-decoration-none" to="/Sim">
                    <div>
                      <img src={simicon} className="MenuIcon"></img>
                      <h5 className="TextMenu">SIM</h5>
                    </div>
                  </NavLink>
                </Col>
                <Col className="MenuIconWrapper">
                  <NavLink className="text-decoration-none" to="/Skck">
                    <div>
                      <img src={skckicon} className="MenuIcon" />
                      <h5 className="TextMenu">SKCK</h5>
                    </div>
                  </NavLink>
                </Col>
                <Col className="MenuIconWrapper">
                  <NavLink className="text-decoration-none" to="/Antrian">
                    <div>
                      <img src={antrianicon} className="MenuIcon" />
                      <h5 className="TextMenu">Antrian</h5>
                    </div>
                  </NavLink>
                </Col>
                <Col className="MenuIconWrapper">
                  <a
                    className="text-decoration-none"
                    href="https://dumaspresisi.polri.go.id/"
                  >
                    <div>
                      <img src={dupresicon} className="MenuIcon" />
                      <h5 className="TextMenu">Dupres</h5>
                    </div>
                  </a>
                </Col>
              </Row>
              <Row className="Bottom-Menu">
                <Col className="MenuIconWrapper">
                  <NavLink className="text-decoration-none" to="/KritikSaran">
                    <div>
                      <img src={kritiksaranicon} className="MenuIcon" />
                      <h5 className="TextMenu">Kritik Saran</h5>
                    </div>
                  </NavLink>
                </Col>
                <Col className="MenuIconWrapper">
                  <NavLink className="text-decoration-none" to="/Pengmas">
                    <div>
                      <img src={pelmasicon} className="MenuIcon" />
                      <h5 className="TextMenu">Pelaporan</h5>
                    </div>
                  </NavLink>
                </Col>
                <Col className="MenuIconWrapper">
                  <NavLink className="text-decoration-none" to="/Survei">
                    <div>
                      <img src={surveiicon} className="MenuIcon" />
                      <h5 className="TextMenu">Survei</h5>
                    </div>
                  </NavLink>
                </Col>
                <Col className="MenuIconWrapper">
                  <NavLink className="text-decoration-none" to="/InfoAplikasi">
                    <div>
                      <img src={infoicon} className="MenuIcon" />
                      <h5 className="TextMenu">Info Aplikasi</h5>
                    </div>
                  </NavLink>
                </Col>
              </Row>
            </Container>
            <Container>
              <button className="Pannic-Button">Tombol Darurat</button>
            </Container>
          </div>
          <div className="NavigasiBottom">
            <Container>
              <Coba />
            </Container>
          </div>
        </div>
      ) : (
        <div className="bodyMainPage">
          <Container fluid>
            <div className="MainWrapper">
              <Row className="">
                <Col lg={2}>
                  <Coba />
                </Col>
                <Col className="backgroundApp">
                  <div className="UserTextWrapper">
                    <h5 className="GreetingText">Selamat datang,</h5>
                    <h2 className="UserText">Lucky Febrian!</h2>
                    <Container id="container1">
                      <Row>
                        <Col lg={7} id="box">
                          <img src={Banner} className="boximage"></img>
                        </Col>
                        <Col className="vertical-line mt-3" id="box">
                          <h4>Antrian</h4>
                          <Row className="Row-Antrian">
                            <Col>
                              <h6>SIM</h6>
                              <div className="Antrian">
                                <img
                                  src={Logobadak}
                                  className="Logo-Antrian"
                                ></img>
                                <div className="No-urut-antrian">00</div>
                              </div>
                            </Col>
                            <Col>
                              <h6>SKCK </h6>
                              <div className="Antrian">
                                <img
                                  src={Logobadak}
                                  className="Logo-Antrian"
                                ></img>
                                <div className="No-urut-antrian-Skck">00</div>
                              </div>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Container>
                  </div>

                  <div className="horizontal-line" id="hr"></div>

                  <h4 className="MenuSectionText" id="menuutama">
                    Menu utama
                  </h4>
                  <Row className="wrapper-menu g-4" id="wrappermenu">
                    <Col className="MenuIconWrapper">
                      <NavLink className="text-decoration-none" to="/Sim">
                        <div>
                          <img src={simicon} className="MenuIcon"></img>
                          <h5 className="TextMenu">SIM</h5>
                        </div>
                      </NavLink>
                    </Col>
                    <Col className="MenuIconWrapper">
                      <NavLink className="text-decoration-none" to="/Skck">
                        <div>
                          <img src={skckicon} className="MenuIcon" />
                          <h5 className="TextMenu">SKCK</h5>
                        </div>
                      </NavLink>
                    </Col>

                    <Col className="MenuIconWrapper">
                      <a
                        className="text-decoration-none"
                        href="https://dumaspresisi.polri.go.id/"
                      >
                        <div>
                          <img src={dupresicon} className="MenuIcon" />
                          <h5 className="TextMenu">Dumas Presisi</h5>
                        </div>
                      </a>
                    </Col>
                    <Col className="MenuIconWrapper">
                      <NavLink
                        className="text-decoration-none"
                        to="/KritikSaran"
                      >
                        <div>
                          <img src={kritiksaranicon} className="MenuIcon" />
                          <h5 className="TextMenu">Kritik Saran</h5>
                        </div>
                      </NavLink>
                    </Col>
                    <Col className="MenuIconWrapper">
                      <NavLink className="text-decoration-none" to="/Pengmas">
                        <div>
                          <img src={pelmasicon} className="MenuIcon" />
                          <h5 className="TextMenu">Pelaporan Masyarakat</h5>
                        </div>
                      </NavLink>
                    </Col>
                    <Col className="MenuIconWrapper">
                      <NavLink className="text-decoration-none" to="/Survei">
                        <div>
                          <img src={surveiicon} className="MenuIcon" />
                          <h5 className="TextMenu">Survei</h5>
                        </div>
                      </NavLink>
                    </Col>
                    <Col className="MenuIconWrapper">
                      <NavLink
                        className="text-decoration-none"
                        to="/InfoAplikasi"
                      >
                        <div>
                          <img src={infoicon} className="MenuIcon" />
                          <h5 className="TextMenu">Info Aplikasi</h5>
                        </div>
                      </NavLink>
                    </Col>
                    <Col className="MenuIconWrapper">
                      <a className="text-decoration-none" href="tel:113">
                        <div>
                          <img src={PanicCall} className="MenuIcon" />
                          <h5 className="TextMenu">Panic Call</h5>
                        </div>
                      </a>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      )}
    </div>
  );
};

export default Mainpage;
