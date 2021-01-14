import React, { Component } from "react";
import "./index.scss";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Container, Row, Col, Form } from "react-bootstrap";
import { InputDate, InputLocation } from "../../components/Form";
import CardMovieSchedule from "../../components/CardMovieSchedule";

import MovieList from "../../dummy/movieNowShow";
import CinemasTimes from "../../dummy/cinamasTimes";

class DetailMovie extends Component {
  state = {
    date: null,
    cinemasTimes: CinemasTimes,
    movieInfo: MovieList.filter(
      (item) => Number(item.id) === Number(this.props.match.params.id)
    ),
  };

  handleChange = (event) => {
    const datePicked = String(event.target.value);
    console.log(datePicked);
    this.setState({ date: datePicked });
  };

  render() {
    const { movieInfo, cinemasTimes } = this.state;
    return (
      <>
        <Header />

        <Container className="mt-5">
          <div className="detail-movie">
            <Row>
              <Col xs={12} md={4} lg={3} className="text-center">
                <img src={movieInfo[0].images} alt={"movie"} />
              </Col>
              <Col xs={12} md={8} lg={9}>
                <Row>
                  <Col
                    xs={12}
                    className="text-center text-md-left my-4 mt-md-0"
                  >
                    <h1>{movieInfo[0].title}</h1>
                    <p>{movieInfo[0].genre}</p>
                  </Col>
                  <Col xs={6}>
                    <p>Release Date</p>
                    <h6>{movieInfo[0].date}</h6>
                  </Col>
                  <Col xs={6}>
                    <p>Directed by</p>
                    <h6>{movieInfo[0].directed}</h6>
                  </Col>
                  <Col xs={6} className="my-4">
                    <p>Duration</p>
                    <h6>{movieInfo[0].duration}</h6>
                  </Col>
                  <Col xs={6} className="my-4">
                    <p>Casts</p>
                    <h6>{movieInfo[0].casts}</h6>
                  </Col>
                  <Col xs={12}>
                    <p>Synopsis</p>
                    <h6>{movieInfo[0].synopsis}</h6>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="showtimes my-5">
              <Col xs={12} className="my-3 text-center">
                <h4>Showtimes and Tickets</h4>
              </Col>
              <Col xs={12} md={6} className="text-md-right text-center mb-4">
                <Form>
                  <InputDate
                    name="date"
                    onChange={(event) => this.handleChange(event)}
                  />
                </Form>
              </Col>
              <Col
                xs={12}
                md={6}
                className="text-md-left text-center mb-4 m-auto"
              >
                <InputLocation />
              </Col>
            </Row>

            <Row className="my-5 movie-schedule">
              {cinemasTimes.map((item) => {
                return (
                  <Col xs={12} md={6} lg={4} key={String(item.id)}>
                    <CardMovieSchedule
                      cinema={item.cinema}
                      image={item.images}
                      address={item.address}
                      price={item.price}
                      times={item.times}
                      id={this.props.match.params.id}
                      idTag={item.id}
                      date={this.state.date}
                    />
                  </Col>
                );
              })}
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
