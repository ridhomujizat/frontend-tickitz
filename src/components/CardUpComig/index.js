import React, { Component } from "react";
import "./index.scss";
import spider from "../../assets/spider-movie.png";
import { Link } from "react-router-dom";

export default class index extends Component {
  render() {
    return (
      <div className="slide upcoming-movie text-center">
        <img src={spider} alt="Movie Upcoming" />
        <h3 className="mt-3">Spider-Man</h3>
        <p>Genre</p>
        <Link
          className="btn btn-outline-primary btn-block"
          to={`/movie-detail/${this.props.id}`}
        >
          Detail
        </Link>
      </div>
    );
  }
}
