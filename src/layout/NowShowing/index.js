import React, { Component } from "react";
import "./index.scss";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import CardNowShow from "../../components/CardNowShow";
import MovieList from "../../dummy/movieNowShow";

class NowShowing extends Component {
  state = {
    movieList: MovieList,
  };

  componentDidMount() {
    let testData = this.state.movieList
      .filter((item) => item.status === "show")
      .map((data, index) => data.id);
    console.log(testData);
  }
  render() {
    return (
      <div id="now-showing">
        <Container>
          <Row className=" pt-5 pb-3 now-showing-text">
            <Col>
              <h4>Now Showing</h4>
            </Col>
            <Col className="text-right">
              <Link to={"/"}>view all</Link>
            </Col>
          </Row>
          <Row className="pb-5">
            <Col className="slider">
              {this.state.movieList
                .filter((data) => data.status === "show")
                .map((item) => {
                  return (
                    <CardNowShow
                      image={item.images}
                      title={item.title}
                      genre={item.genre}
                      key={String(item.id)}
                      id={item.id}
                    />
                  );
                })}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default NowShowing;
