import React, { Component } from "react";
import "./index.scss";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Container, Row, Col, Form, InputGroup } from "react-bootstrap";
import { InputDate } from "../../components/Form";
import { ImLocation } from "react-icons/im";
import CardMovieSchedule from "../../components/CardMovieSchedule";

class DetailMovie extends Component {
  render() {
    return (
      <>
        <Header />

        <Container className="mt-5">
          <div className="detail-movie">
            <Row>
              <Col xs={12} md={4} lg={3} className="text-center">
                <img src="/images/movie/spider-movie.png" alt={"movie"} />
              </Col>
              <Col xs={12} md={8} lg={9}>
                <Row>
                  <Col
                    xs={12}
                    className="text-center text-md-left my-4 mt-md-0"
                  >
                    <h1>Spider-Man: HomeComing</h1>
                    <p>Adventure, Action, Sci-Fi</p>
                  </Col>
                  <Col xs={6}>
                    <p>Release Date</p>
                    <h6>June 28, 2017</h6>
                  </Col>
                  <Col xs={6}>
                    <p>Directed by</p>
                    <h6>Jon Watss</h6>
                  </Col>
                  <Col xs={6} className="my-4">
                    <p>Duration</p>
                    <h6>2 hours 13 minutes</h6>
                  </Col>
                  <Col xs={6} className="my-4">
                    <p>Casts</p>
                    <h6>Tom Holland, Michael Keaton, Robert Downey Jr., ...</h6>
                  </Col>
                  <Col xs={12}>
                    <p>Synopsis</p>
                    <h6>
                      Thrilled by his experience with the Avengers, Peter
                      returns home, where he lives with his Aunt May, under the
                      watchful eye of his new mentor Tony Stark, Peter tries to
                      fall back into his normal daily routine - distracted by
                      thoughts of proving himself to be more than just your
                      friendly neighborhood Spider-Man - but when the Vulture
                      emerges as a new villain, everything that Peter holds most
                      important will be threatened.
                    </h6>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="showtimes my-5">
              <Col xs={12} className="my-3 text-center">
                <h4>Showtimes and Tickets</h4>
              </Col>
              <Col xs={12} md={6} className="text-md-right text-center mb-4">
                <InputDate />
              </Col>
              <Col
                xs={12}
                md={6}
                className="text-md-left text-center mb-4 m-auto"
              >
                <Form.Group>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text>
                        <ImLocation />
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control as="select">
                      <option>Location</option>
                    </Form.Control>
                  </InputGroup>
                </Form.Group>
              </Col>
            </Row>

            <Row className="my-5 movie-schedule">
              <Col xs={12} md={6} lg={4}>
                <CardMovieSchedule />
              </Col>
              <Col xs={12} md={6} lg={4}>
                <CardMovieSchedule />
              </Col>
              <Col xs={12} md={6} lg={4}>
                <CardMovieSchedule />
              </Col>
              <Col xs={12} md={6} lg={4}>
                <CardMovieSchedule />
              </Col>
              <Col xs={12} md={6} lg={4}>
                <CardMovieSchedule />
              </Col>
              <Col xs={12} md={6} lg={4}>
                <CardMovieSchedule />
              </Col>
            </Row>

            <Row className="justify-content-center">
              <div className="div text-center view-more w-100">
                <a href="#">View More</a>
              </div>
            </Row>
          </div>
        </Container>

        <Footer />
      </>
    );
  }
}

export default DetailMovie;
