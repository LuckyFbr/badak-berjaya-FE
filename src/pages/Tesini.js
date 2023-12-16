import { useState } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import LogoBadak from "../assets/BadakBerjaya.svg";
import iconMenu from "../assets/icon/fi-rr-menu-burger.svg";

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container>
      <Row>
        <Col>
          <div className="bg-HeaderOffcanvas">
            {/* <Button variant="primary" onClick={handleShow}>
            Launch
          </Button> */}

            <div className="HeaderOffcanvas">
              {/* <Row>
                <Col xs={3}> */}
              <img
                src={iconMenu}
                onClick={handleShow}
                className="BurgerMenu-Btn"
              ></img>
              {/* </Col>
                <Col xs={7} className="HeaderWrapper">
                  <img src={LogoBadak} className="BadakImgOffcanvas"></img>
                  <span className="HeaderTextOffCanvas ms-2">
                    BADAK BERJAYA
                  </span>
                </Col>
              </Row> */}
            </div>

            <Offcanvas
              show={show}
              onHide={handleClose}
              className="BodyOffcanvas"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Badak Berjaya</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <ul className=" list-unstyled ">
                  <li className="Nav-Item">
                    <Nav.Link href="#action1">Beranda</Nav.Link>
                  </li>
                  <li className="Nav-Item">
                    <Nav.Link href="#action2">Notifikasi</Nav.Link>
                  </li>
                  <li className="Nav-Item">
                    <Nav.Link href="#action3">Profil</Nav.Link>
                  </li>
                  <li className="Nav-Item">
                    <Nav.Link href="#action4">Keluar</Nav.Link>
                  </li>
                </ul>
              </Offcanvas.Body>
            </Offcanvas>
          </div>
        </Col>
        <Col>hehehe</Col>
      </Row>
    </Container>
  );
}

export default Example;
