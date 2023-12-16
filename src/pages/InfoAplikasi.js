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
import GambarError from "../assets/icon/pixeltrue-vision-1 1.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Logobadak from "../assets/BadakBerjaya.svg";

const InfoAplikasi = () => {
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
                      Info Aplikasi
                    </h3>
                  </NavLink>
                  <Tabs
                    defaultActiveKey="IsiFormulir"
                    id="uncontrolled-tab-example"
                    className="mt-4"
                  >
                    <Tab eventKey="IsiFormulir" title="Penjelasan">
                      <Row className="Content mt-4">
                        <Col>
                          <strong>Dasar Hukum</strong>
                          <ul>
                            <li>
                              Comander wish program 100 hari kerja kapolri
                              tentang peningkatan kualitas layanan publik polri
                            </li>
                            <li>
                              Surat edaran menteri komunikasi dan informatika
                              republik indonesia nomor 3 tahun 2016 tentang
                              penyediaan layanan aplikasi dan/atau konten
                              melalui internet (over the top)
                            </li>
                            <li>
                              Keputusan kepala kepolisian resor Lampung Timur
                              nomor : Sprin/1192/XI/2020, tanggal 07 desember
                              2020 tentang pembentukan dan pengangkaran pejabat
                              pengadaan barang dan jasa
                            </li>
                            <li>
                              Naskah perjanjin hibah daerah kabupaten Lampung
                              Timur nomor : 900/03/NPHD/27-SK/2021 tanggal 30
                              april 2021
                            </li>
                          </ul>
                          <strong>Anggaran/Sarana dan Prasarana</strong>
                          <ul>
                            <li>
                              Anggaran yang digunakan bersumber dari hibah
                              pemerintah kabupaten lampung timur tahun anggaran
                              2021 sebesar Rp. 80.000.000,- (Delapan puluh juta
                              rupiah)
                            </li>
                            <li>
                              Anggaran pemeliharaan bersumber dari DIPA Polres
                              Lampung Timur T.A 2022
                            </li>
                          </ul>
                          <strong>Sumber Daya Manusia</strong>
                          <ul>
                            <li>
                              Surat perintah kepala kepolisian resor lampung
                              timur nomor : Sprin/VI/2021,tanggal 20 juni 2021
                              tentang petugas pelayanan pada gedung pelayanan
                              terpadu satu atap Polres Lampung Timur
                            </li>
                          </ul>
                        </Col>
                      </Row>
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
                      Info Aplikasi
                    </h3>
                  </NavLink>
                  <h6>Berikut ini informasi mengenai aplikasi badak berjaya</h6>
                  <Tabs
                    defaultActiveKey="IsiFormulir"
                    id="uncontrolled-tab-example"
                    className="mt-4"
                  >
                    <Tab eventKey="IsiFormulir" title="Penjelasan">
                      <Row className="mt-4">
                        <Col>
                          <strong>Dasar Hukum</strong>
                          <ul>
                            <li>
                              Comander wish program 100 hari kerja kapolri
                              tentang peningkatan kualitas layanan publik polri
                            </li>
                            <li>
                              Surat edaran menteri komunikasi dan informatika
                              republik indonesia nomor 3 tahun 2016 tentang
                              penyediaan layanan aplikasi dan/atau konten
                              melalui internet (over the top)
                            </li>
                            <li>
                              Keputusan kepala kepolisian resor Lampung Timur
                              nomor : Sprin/1192/XI/2020, tanggal 07 desember
                              2020 tentang pembentukan dan pengangkaran pejabat
                              pengadaan barang dan jasa
                            </li>
                            <li>
                              Naskah perjanjin hibah daerah kabupaten Lampung
                              Timur nomor : 900/03/NPHD/27-SK/2021 tanggal 30
                              april 2021
                            </li>
                          </ul>
                          <strong>Anggaran/Sarana dan Prasarana</strong>
                          <ul>
                            <li>
                              Anggaran yang digunakan bersumber dari hibah
                              pemerintah kabupaten lampung timur tahun anggaran
                              2021 sebesar Rp. 80.000.000,- (Delapan puluh juta
                              rupiah)
                            </li>
                            <li>
                              Anggaran pemeliharaan bersumber dari DIPA Polres
                              Lampung Timur T.A 2022
                            </li>
                          </ul>
                          <strong>Sumber Daya Manusia</strong>
                          <ul>
                            <li>
                              Surat perintah kepala kepolisian resor lampung
                              timur nomor : Sprin/VI/2021,tanggal 20 juni 2021
                              tentang petugas pelayanan pada gedung pelayanan
                              terpadu satu atap Polres Lampung Timur
                            </li>
                          </ul>
                        </Col>
                      </Row>
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

export default InfoAplikasi;
