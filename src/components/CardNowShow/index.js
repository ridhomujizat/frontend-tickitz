import React, { Component } from "react";
import "./index.scss";
import Spider from "../../assets/spider-movie.png";

import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

class CardNowShow extends Component {
  render() {
    return (
      <div className="slide text-center movie-now-showing">
        <div className="movie-now-showing-img">
          <img src={this.props.image} />
        </div>
        <div className="movie-now-showing-detail">
          <h3>{this.props.title}</h3>
          <p>{this.props.genre}</p>
          <Link
            className="btn btn-primary btn-block"
            to={`/order/${this.props.id}`}
          >
            Detail
          </Link>
          <Link
            className="btn btn-outline-primary btn-block"
            to={`/cinema/${this.props.id}`}
          >
            Detail
          </Link>
        </div>
      </div>
    );
  }
}

export default CardNowShow;
