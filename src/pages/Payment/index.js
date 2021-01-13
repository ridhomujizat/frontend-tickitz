import React, { Component } from "react";
import "./index.scss";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiFillWarning } from "react-icons/ai";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { InputText, InputNumbe, InputNumber } from "../../components/Form";
import Button from "../../components/Button";
import gpay from "../../assets/images/peyment-method/g-pay.png";
import dana from "../../assets/images/peyment-method/dana.png";
import bca from "../../assets/images/peyment-method/bca.png";
import bri from "../../assets/images/peyment-method/bri.png";
import gopay from "../../assets/images/peyment-method/gopay.png";
import ovo from "../../assets/images/peyment-method/ovo.png";
import visa from "../../assets/images/peyment-method/visa.png";
import paypal from "../../assets/images/peyment-method/paypal.png";

export default class index extends Component {
  render() {
    return (
      <>
        <Header />
        <div id="payment">
          <div className="total-mobile">
            <Container>
              <Row>
                <Col xs={12}>
                  <Row className="d-flex justify-content-between total align-items-center">
                    <h6>Total Payment</h6>
                    <p>$30.00</p>
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>
          <Container className=" py-5">
            <Row>
              <Col xs={12} md={8}>
                <div className="order mb-5">
                  <h5>Payment Info</h5>
                  <div className="order-info">
                    <Row className="d-flex justify-content-between">
                      <p>Tuesday, 07 July 2020</p>
                      <h6>02:00pm</h6>
                    </Row>
                    <hr />
                    <Row className="d-flex justify-content-between mt-4">
                      <p>Movie selected</p>
                      <h6>Spider-Man: Homecoming</h6>
                    </Row>
                    <hr />
                    <Row className="d-flex justify-content-between">
                      <p>One ticket price</p>
                      <h6>$10</h6>
                    </Row>
                    <hr />
                    <Row className="d-flex justify-content-between">
                      <p>Seat choosed</p>
                      <h6>$C4, C5, C6</h6>
                    </Row>
                    <hr />
                    <Row className="d-flex justify-content-between total align-items-center">
                      <h6>Total Payment</h6>
                      <p>$30.00</p>
                    </Row>
                  </div>
                </div>
                <div className="payment">
                  <h5>Choose a Payment Method</h5>
                  <div className="payment-method">
                    <div className="d-flex flex-row flex-wrap justify-content-center">
                      <a
                        href=""
                        className="d-flex justify-content-center align-items-center text-center"
                      >
                        <div className="payment-image">
                          <img src={gopay} alt="" />
                        </div>
                      </a>
                      <a
                        href=""
                        className="d-flex justify-content-center align-items-center text-center"
                      >
                        <div className="payment-image">
                          <img src={visa} alt="" />
                        </div>
                      </a>
                      <a
                        href=""
                        className="d-flex justify-content-center align-items-center text-center"
                      >
                        <div className="payment-image">
                          <img src={gpay} alt="" />
                        </div>
                      </a>
                      <a
                        href=""
                        className="d-flex justify-content-center align-items-center text-center"
                      >
                        <div className="payment-image">
                          <img src={paypal} alt="" />
                        </div>
                      </a>
                      <a
                        href=""
                        className="d-flex justify-content-center align-items-center text-center"
                      >
                        <div className="payment-image">
                          <img src={dana} alt="" />
                        </div>
                      </a>
                      <a
                        href=""
                        className="d-flex justify-content-center align-items-center text-center"
                      >
                        <div className="payment-image">
                          <img src={bca} alt="" />
                        </div>
                      </a>
                      <a
                        href=""
                        className="d-flex justify-content-center align-items-center text-center"
                      >
                        <div className="payment-image">
                          <img src={bri} alt="" />
                        </div>
                      </a>
                      <a
                        href=""
                        className="d-flex justify-content-center align-items-center text-center"
                      >
                        <div className="payment-image">
                          <img src={ovo} alt="" />
                        </div>
                      </a>
                    </div>
                    <div className="div text-center view-more">
                      <p href="#" id="view-more">
                        or
                      </p>
                    </div>
                    <div className="offline-payment text-center">
                      <p>
                        Pay via cash.{" "}
                        <span>
                          <Link to="#"> See how it work </Link>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </Col>

              <Col xs={12} md={4} className="col-12 col-md-4">
                <h5>Personal Info</h5>
                <div className="personal-info">
                  <Form>
                    <InputText
                      label={"Full Name"}
                      name="name"
                      placeholder={"Your Name"}
                      type={"text"}
                    />
                    <InputText
                      label={"Email"}
                      name="email"
                      placeholder={"Your Email"}
                      type={"email"}
                    />
                    <InputNumber
                      label={"Phone Number"}
                      name="phone"
                      placeholder="Your Number"
                    />
                    <div className="warning-form d-flex flex-row align-items-center">
                      <div className="warning-icon">
                        <AiFillWarning />
                      </div>
                      <div className="warning-text">
                        <p>Fill your data correctly.</p>
                      </div>
                    </div>
                  </Form>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={8}>
                <div className="btn-pay d-flex justify-content-between flex-wrap my-4">
                  <Button
                    className="btn-previous-step"
                    variant="outline-primary"
                  >
                    Previous Step
                  </Button>
                  <Button variant="primary">
                    <Link to={`/result-ticket/${this.props.id}`}>
                      Pay your order
                    </Link>
                  </Button>
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
