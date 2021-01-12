import React, { Component } from "react";
import "./index.scss";
import { Container, Col, Row } from "react-bootstrap";

class DecriptionMovie extends Component {
  render() {
    return (
      <div id="Description-movie">
        <Container className="mt-5">
          <Row>
            <Col xs={12} md={4} lg={3} className="text-center">
              <img src="/images/movie/spider-movie.png" alt={"movie"} />
            </Col>
            <Col xs={12} md={8} lg={9}>
              <Row>
                <Col xs={12} className="text-center text-md-left my-4 mt-md-0">
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
                    Thrilled by his experience with the Avengers, Peter returns
                    home, where he lives with his Aunt May, under the watchful
                    eye of his new mentor Tony Stark, Peter tries to fall back
                    into his normal daily routine - distracted by thoughts of
                    proving himself to be more than just your friendly
                    neighborhood Spider-Man - but when the Vulture emerges as a
                    new villain, everything that Peter holds most important will
                    be threatened.
                  </h6>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default DecriptionMovie;
