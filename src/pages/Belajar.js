import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Coba from "./Coba";
import { BrowserRouter } from "react-dom";

const Belajar = () => {
  return (
    <Container fluid className="belajarcontainer">
      <Row>
        <Col lg={2} className="belajar">
          <Coba />
        </Col>
        <Col>
          <Coba />
        </Col>
      </Row>
    </Container>
  );
};

export default Belajar;
