import React, { Component } from "react";
import "./index.scss";

import { Container, Col, Row } from "react-bootstrap";
import { LogoPurple } from "../../components/Logo";
import cineOne21 from "../../assets/images/cinemas/cineOne21.png";
import ebvid from "../../assets/images/cinemas/ebv.id.png";
import hiflix from "../../assets/images/cinemas/hiflix.png";
import { FiFacebook, FiInstagram, FiYoutube, FiTwitter } from "react-icons/fi";

export default class index extends Component {
  render() {
    return (
      <footer id="footer">
        <Container>
          <Row>
            <Col xs={12} md={4} className="footer-tickitz mb-3">
              <LogoPurple size={"45px"} />
              <p>
                Stop waiting in line. Buy tickets conveniently, watch movies
                quietly.
              </p>
            </Col>
            <Col xs={12} md={2} className="footer-explore mb-3">
              <h5>Explore</h5>
              <div className="d-flex flex-md-column flex-row footer-explore-link flex-wrap">
                <p>
                  <a href="#">Cinemas</a>
                </p>
                <p>
                  <a href="">Movie List</a>
                </p>
                <p>
                  <a href="">My Ticket</a>
                </p>
                <p>
                  <a href="">Notivication</a>
                </p>
              </div>
            </Col>
            <Col xs={12} md={3} className="footer-sponsor mb-3">
              <h5>Our Sponsor</h5>
              <div className="d-flex flex-md-column flex-row footer-sposnsor-img flex-wrap mt-3 mb-3">
                <a href="#">
                  <img src={cineOne21} alt="ebv.id" />
                </a>
                <a href="#">
                  <img src={ebvid} alt="CineOne21" />
                </a>
                <a href="#">
                  <img src={hiflix} alt="hiflix" />
                </a>
              </div>
            </Col>
            <Col xs={12} md={3} className="col-12 col-md-3 footer-social mb-3">
              <h5>Follow us</h5>
              <div className="social-media d-flex flex-md-column flex-row flex-wrap">
                <p>
                  <a href="#">
                    <FiFacebook />
                    <span className="social-name"> Tickitz Cinema id</span>
                  </a>
                </p>
                <p>
                  <a href="#">
                    <FiInstagram />
                    <span className="social-name"> tickitz.id</span>
                  </a>
                </p>
                <p>
                  <a href="#">
                    <FiTwitter />
                    <span className="social-name"> tickitz.id</span>
                  </a>
                </p>
                <p>
                  <a href="#">
                    <FiYoutube />
                    <span className="social-name"> Tickitz Cinema id</span>
                  </a>
                </p>
              </div>
            </Col>
          </Row>
          <Row className="mt-3 mb-2 text-center licence">
            <div className="col-12">
              <p>© 2020 Tickitz. All Rights Reserved.</p>
            </div>
          </Row>
        </Container>
      </footer>
    );
  }
}
