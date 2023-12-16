import React, { useState, useEffect } from "react";
import { Row, Col, Tab, Tabs, Nav, Navbar, Modal } from "react-bootstrap";
import LogoBadak from "../assets/BadakBerjaya.svg";
import iconHomeActive from "../assets/icon/NavIcon/solid/home 04.svg";
import iconNotifikasiActive from "../assets/icon/NavIcon/solid/notification.svg";
import iconUserActive from "../assets/icon/NavIcon/solid/user.svg";
import iconHome from "../assets/icon/NavIcon/outline/home 04.svg";
import iconNotifikasi from "../assets/icon/NavIcon/outline/notification.svg";
import iconUser from "../assets/icon/NavIcon/outline/user.svg";
import iconLogout from "../assets/icon/NavIcon/outline/logout 01.svg";
import Button from "react-bootstrap/Button";
import { NavLink, useNavigate } from "react-router-dom";
import iconHomeDesktop from "../assets/icon/Huge-icon/interface/outline/home 04.svg";
import iconNotifikasiDesktop from "../assets/icon/Huge-icon/interface/outline/notification.svg";
import iconUserDesktop from "../assets/icon/Huge-icon/interface/outline/user.svg";
import iconLogoutDesktop from "../assets/icon/Huge-icon/interface/outline/logout 01.svg";
import axios from "axios";

function Coba() {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [keluar, setKeluar] = useState(false);
  const popupClose = () => setKeluar(false);
  const popupShow = () => setKeluar(true);

  const [activeNav, setActiveNav] = useState("beranda");
  const handleNavClick = (nav) => {
    setActiveNav(nav);
  };

  const [activeMenu, setActiveMenu] = useState("");
  const handleMenuClick = (nav) => {
    setActiveMenu(nav);
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

  const handleLogout = () => {
    // Hapus token JWT dari localStorage atau cookie
    localStorage.removeItem("token");

    // Redirect ke halaman login atau halaman lain yang sesuai
    navigate("/Login");
  };

  return (
    <div className="NewNav">
      <Modal show={keluar} onHide={popupClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Konfirmasi</Modal.Title>
        </Modal.Header>
        <Modal.Body>Apakah anda yakin akan keluar?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={popupClose}>
            Kembali
          </Button>
          <Button variant="danger" onClick={handleLogout}>
            Keluar
          </Button>
        </Modal.Footer>
      </Modal>

      {isMobile ? (
        // Tampilan untuk perangkat mobile (misalnya, tampilkan navigasi offcanvas)
        <div>
          <div className="NavMobile">
            <Row>
              <Col className="NavMenuWrapper">
                <NavLink
                  to="/Beranda"
                  className={`NavMenuWrapper text-decoration-none color-black ${
                    activeMenu === "beranda" ? "active" : ""
                  }`}
                  onClick={() => handleMenuClick("beranda")}
                >
                  <img
                    src={activeMenu === "beranda" ? iconHomeActive : iconHome}
                  ></img>
                  <p>Beranda</p>
                </NavLink>
              </Col>

              <Col className="NavMenuWrapper">
                <NavLink
                  to="/Notifikasi"
                  className={`NavMenuWrapper text-decoration-none color-black ${
                    activeMenu === "notifikasi" ? "active" : ""
                  }`}
                  onClick={() => handleMenuClick("notifikasi")}
                >
                  <img
                    src={
                      activeMenu === "notifikasi"
                        ? iconNotifikasiActive
                        : iconNotifikasi
                    }
                  ></img>
                  <p>Notifikasi</p>
                </NavLink>
              </Col>

              <Col className="NavMenuWrapper">
                <NavLink
                  to="/Profil"
                  className={`NavMenuWrapper text-decoration-none color-black ${
                    activeMenu === "profil" ? "active" : ""
                  }`}
                  onClick={() => handleMenuClick("profil")}
                >
                  <img
                    src={activeMenu === "profil" ? iconUserActive : iconUser}
                  ></img>
                  <p>Profil</p>
                </NavLink>
              </Col>

              <Col className="NavMenuWrapper" onClick={popupShow}>
                <img src={iconLogout}></img>
                <p>Keluar</p>
              </Col>
            </Row>
          </div>
        </div>
      ) : (
        // Tampilan untuk perangkat desktop (misalnya, tampilkan sidebar)
        <div className="MainBG" id="navbar">
          <div className="NavConatiner">
            <div className="NavWrapper">
              <div className="HeaderNavbar">
                <img src={LogoBadak} className="BadakImgNavbar" />
                <div className="HeaderText">BADAK BERJAYA</div>
              </div>
              <div className="Navbar">
                <ul className="list-unstyled">
                  <NavLink to="/Beranda" className="text-decoration-none">
                    <div className="NavIconWrapper">
                      <li className="NavText">
                        <img src={iconHomeDesktop} className="NavIcon" />
                        Beranda
                      </li>
                    </div>
                  </NavLink>
                  <NavLink to="/Notifikasi" className="text-decoration-none">
                    <div className="NavIconWrapper">
                      <li className="NavText">
                        <img src={iconNotifikasiDesktop} className="NavIcon" />
                        Notifikasi
                      </li>
                    </div>
                  </NavLink>
                  <NavLink to="/Profil" className="text-decoration-none">
                    <div className="NavIconWrapper">
                      <li className="NavText">
                        <img src={iconUserDesktop} className="NavIcon" />
                        Profil
                      </li>
                    </div>
                  </NavLink>
                  <NavLink className="text-decoration-none">
                    <div className="NavIconWrapper" onClick={popupShow}>
                      <li className="NavText">
                        <img src={iconLogoutDesktop} className="NavIcon" />
                        Keluar
                      </li>
                    </div>
                  </NavLink>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Coba;
