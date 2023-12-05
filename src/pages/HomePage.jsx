import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="w-100 min-vh-100">
        <Container>
          <Row className="header-box">
            <Col sm="8">
              <h1 className="mb-4">
                Pelajari Pengetahuan Apa Pun <br /> Untuk Memajukan Jalur <br />
                <span>Karier Anda</span>
              </h1>
              <p className="mb-4">
                Bergabunglah dengan kami, dan mari kita berbagi pengetahuan
                serta inspirasi. <br />
                Bersama, kita bisa mencapai hal luar biasa!
              </p>
              <button className="btn btn-info btn-lg rounded-1 me-2 mb-xs-0 mb-2">
                Belajar
              </button>
            </Col>
            <Col sm="4" className="pt-lg-0 pt-5">
              <img
                src="https://i.postimg.cc/3xjYnm20/Owl-1.png"
                alt="hero-img"
              />
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
};

export default HomePage;
