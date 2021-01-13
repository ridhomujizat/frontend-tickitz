import React, { Component } from "react";
import "./index.scss";

import { LogoWhite } from "../../components/Logo";
import barcode from "../../assets/images/barcode.png";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default class index extends Component {
  render() {
    return (
      <>
        <Header />
        <div id="result-ticket">
          <Container>
            <Row>
              <Col xs={12} className="my-3 my-md-5">
                <div className="ticket-show">
                  <h5 className="text-center mb-5">Proof of Payment</h5>
                  <div className="ticket">
                    <Row className="heading-ticket">
                      <Col
                        xs={7}
                        className="col-7 heading-admit-one d-flex align-items-center justify-content-between"
                      >
                        <LogoWhite size={"40px"} />
                        <h6>Admint One</h6>
                      </Col>
                      <Col xs={5} className="heading-barcode text-center">
                        <img src="./assets/img/tickitz.png" alt="" />
                      </Col>
                    </Row>
                    <Row className="ticket-info">
                      <div className="col-12 col-md-7 ticket-info-text order-1 order-md-0">
                        <div className="row">
                          <div className="col-6 col-md-12 mb-2 order-0 title">
                            <p>title</p>
                            <h6>Spider-Man: Homecoming</h6>
                          </div>
                          <div className="col-6 col-md-4 mb-2 order-2 order-md-1">
                            <p>Date</p>
                            <h6>07 July</h6>
                          </div>
                          <div className="col-6 col-md-4 mb-2 order-3 order-md-2">
                            <p>Time</p>
                            <h6>02:00pm</h6>
                          </div>
                          <div className="col-6 col-md-4 mb-2 order-1 order-md-3">
                            <p>Category</p>
                            <h6>PG-13</h6>
                          </div>
                          <div className="col-6 col-md-4 mb-2 order-4 order-md-4">
                            <p>Count</p>
                            <h6>3 pieces</h6>
                          </div>
                          <div className="col-6 col-md-4 mb-2 order-5 order-md-5">
                            <p>Seats</p>
                            <h6>C4, C5, C6</h6>
                          </div>
                          <div className="col-12 col-md-4 mb-2 order-6 order-md-6 price">
                            <p id="price-tag">Price</p>
                            <p id="total-tag">Total</p>
                            <h6>$30.00</h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-4 ticket-info-barcode order-0 order-md-1">
                        <div className="row text-center">
                          <div className="col my-4">
                            <img src={barcode} alt="" className="img-fluid" />
                          </div>
                        </div>
                      </div>
                    </Row>
                  </div>
                  <div className="btn-print-ticket m-4">
                    <div className="row d-flex justify-content-center">
                      <button
                        type="button"
                        className="btn btn-outline-secondary m-3"
                      >
                        <span
                          className="iconify"
                          data-icon="bx:bx-download"
                          data-inline="false"
                        ></span>
                        Download
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-secondary m-3 px-4"
                      >
                        <span
                          className="iconify"
                          data-icon="teenyicons:print-outline"
                          data-inline="false"
                        ></span>
                        Print
                      </button>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <Footer />
      </>
    );
  }
}
