import React, { Component } from "react";
import "./index.scss";
import { Container, Row, Col, Form } from "react-bootstrap";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Button from "../../components/Button";

export default class index extends Component {
  render() {
    return (
      <>
        <Header />
        <div id="order-page">
          <Container className="py-5">
            <Row>
              <Col xs={12} md={8}>
                <div className="movie-title mb-5">
                  <h5>Movie Selected</h5>
                  <div className="d-flex flex-row justify-content-between title my-4 align-items-center">
                    <h5>Spider-Man: Homecoming</h5>
                    <Button
                      type="button"
                      className="btn change-movie btn-secondary"
                    >
                      Change movie
                    </Button>
                  </div>
                </div>

                <div className="seat-cinemas">
                  <h5>Choose Your Seat</h5>
                  <div className="your-seat">
                    <Row className="d-flex justify-content-center">
                      <div className="cinema-studio">
                        <Row className="justify-content-center screen">
                          <p>Screen</p>
                        </Row>
                        <div className="row-seat">
                          <div className="col-seat d-flex flex-row">
                            <div className="seating-key-col">
                              <p>A</p>
                            </div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat sold"></div>
                            <div className="space"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat sold"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                          </div>
                        </div>
                        <div className="row-seat">
                          <div className="col-seat d-flex flex-row">
                            <div className="seating-key-col">
                              <p>B</p>
                            </div>
                            <div className="seat"></div>
                            <div className="seat sold"></div>
                            <div className="seat sold"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="space"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                          </div>
                        </div>
                        <div className="row-seat">
                          <div className="col-seat d-flex flex-row">
                            <div className="seating-key-col">
                              <p>C</p>
                            </div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat selected"></div>
                            <div className="seat selected"></div>
                            <div className="seat selected"></div>
                            <div className="seat"></div>
                            <div className="space"></div>
                            <div className="seat"></div>
                            <div className="seat sold"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat sold"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                          </div>
                        </div>
                        <div className="row-seat">
                          <div className="col-seat d-flex flex-row">
                            <div className="seating-key-col">
                              <p>D</p>
                            </div>
                            <div className="seat"></div>
                            <div className="seat sold"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="space"></div>
                            <div className="seat"></div>
                            <div className="seat sold"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat sold"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                          </div>
                        </div>
                        <div className="row-seat">
                          <div className="col-seat d-flex flex-row">
                            <div className="seating-key-col">
                              <p>E</p>
                            </div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat sold"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="space"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                          </div>
                        </div>
                        <div className="row-seat">
                          <div className="col-seat d-flex flex-row">
                            <div className="seating-key-col">
                              <p>F</p>
                            </div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="space"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="love-seat"></div>
                            <div className="seat"></div>
                            <div className="seat sold"></div>
                            <div className="seat"></div>
                          </div>
                        </div>
                        <div className="row-seat">
                          <div className="col-seat d-flex flex-row">
                            <div className="seating-key-col">
                              <p>G</p>
                            </div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat sold"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="space"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                          </div>
                        </div>
                        <div className="row-seat">
                          <div className="col-seat d-flex flex-row">
                            <div className="seating-key-col"></div>
                            <div className="seat-key-row">
                              <p>1</p>
                            </div>
                            <div className="seat-key-row">
                              <p>2</p>
                            </div>
                            <div className="seat-key-row">
                              <p>3</p>
                            </div>
                            <div className="seat-key-row">
                              <p>4</p>
                            </div>
                            <div className="seat-key-row">
                              <p>5</p>
                            </div>
                            <div className="seat-key-row">
                              <p>6</p>
                            </div>
                            <div className="seat-key-row">
                              <p>7</p>
                            </div>
                            <div className="space"></div>
                            <div className="seat-key-row">
                              <p>8</p>
                            </div>
                            <div className="seat-key-row">
                              <p>9</p>
                            </div>
                            <div className="seat-key-row">
                              <p>10</p>
                            </div>
                            <div className="seat-key-row">
                              <p>11</p>
                            </div>
                            <div className="seat-key-row">
                              <p>12</p>
                            </div>
                            <div className="seat-key-row">
                              <p>13</p>
                            </div>
                            <div className="seat-key-row">
                              <p>14</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="your-seat-info my-5">
                        <Row>
                          <Col>
                            <h6>Seating key</h6>
                          </Col>
                        </Row>
                        <Row className="info-mobile">
                          <Col xs={12} className="d-flex flex-row flex-wrap">
                            <div className="info seat-mobile d-flex flex-row align-items-center m-1 mr-5">
                              <AiOutlineArrowDown />
                              <p>A-G</p>
                            </div>
                            <div className="info seat-mobile d-flex flex-row align-items-center">
                              <AiOutlineArrowUp />
                              <p>1-14</p>
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col xs={12} className="d-flex flex-row flex-wrap">
                            <div className="info d-flex flex-row align-items-center m-1">
                              <div className="seat availble"></div>
                              <p>Availabele</p>
                            </div>
                            <div className="info d-flex flex-row align-items-center">
                              <div className="seat selected"></div>
                              <p>Selected</p>
                            </div>
                            <div className="info d-flex flex-row align-items-center">
                              <div className="seat love-nest"></div>
                              <p>Love nest</p>
                            </div>
                            <div className="info d-flex flex-row align-items-center">
                              <div className="seat sold"></div>
                              <p>sold</p>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </Row>
                  </div>
                </div>
                <div className="seat-choose-mobile my-4">
                  <Form action="">
                    <Row className="form-group ">
                      <Col xs={6}>
                        <Form.Control as="select">
                          <option>A</option>
                          <option>B</option>
                          <option>C</option>
                          <option>D</option>
                          <option>E</option>
                        </Form.Control>
                      </Col>
                      <Col xs={6}>
                        <Form.Control as="select">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </Form.Control>
                      </Col>
                    </Row>
                  </Form>
                  <Button
                    variant="outline-primary"
                    block={true}
                    role="button"
                    type="submit"
                  >
                    Add new seat
                  </Button>
                </div>

                <div className="btn-checkout d-flex justify-content-between flex-wrap my-4">
                  <Button
                    variant={"outline-primary"}
                    className="btn-change-movie"
                    role="button"
                  >
                    Change your movie
                  </Button>
                  <Button variant="primary">
                    <Link to={`/payment/${this.props.id}`}>Checkout now</Link>
                  </Button>
                </div>
              </Col>

              <Col xs={12} md={4} className="mobile-orderpage">
                <h5>Order Info</h5>
                <div className="order-info">
                  <div className="text-center">
                    <img src="./assets/img/CineOne21.png" alt="" />
                    <h5>CineOne21 Cinema</h5>
                  </div>
                  <Row className="d-flex justify-content-between mt-4">
                    <p>Movie selected</p>
                    <h6>Spider-Man: Homecoming</h6>
                  </Row>
                  <Row className="d-flex justify-content-between">
                    <p>Tuesday, 07 July 2020</p>
                    <h6>02:00pm</h6>
                  </Row>
                  <Row className="d-flex justify-content-between">
                    <p>One ticket price</p>
                    <h6>$10</h6>
                  </Row>
                  <Row className="r-flex justify-content-between">
                    <p>Seat choosed</p>
                    <h6>$C4, C5, C6</h6>
                  </Row>
                  <hr />
                  <Row className="d-flex justify-content-between total align-items-center">
                    <h6>Total Payment</h6>
                    <p>$30</p>
                  </Row>
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
