import React from "react";
import { Row, Col, Tab, Tabs } from "react-bootstrap";
import LogoBadak from "../assets/BadakBerjaya.svg";
import iconBeranda from "../assets/icon/fi-rr-home.svg";
import iconNotif from "../assets/icon/fi-rr-bell.svg";
import iconAkun from "../assets/icon/fi-rr-user.svg";
import iconKeluar from "../assets/icon/fi-rr-sign-out-alt.svg";

const SideNavbar = () => {
  return (
    <div className="MainBG">
      <div className="NavConatiner">
        <div className="NavWrapper">
          <div className="HeaderNavbar">
            <img src={LogoBadak} className="BadakImgNavbar" />
            <div className="">BADAK BERJAYA</div>
          </div>
          <div className="Navbar">
            <ul className="list-unstyled">
              <li className="NavText">
                <img src={iconBeranda} className="NavIcon" />
                Beranda
              </li>
              <li className="NavText">
                <img src={iconNotif} className="NavIcon" />
                Notifikasi
              </li>
              <li className="NavText">
                <img src={iconAkun} className="NavIcon" />
                Profil
              </li>
              <li className="NavText">
                <img src={iconKeluar} className="NavIcon" />
                Keluar
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
