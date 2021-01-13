import React, { Component } from "react";
import "./index.scss";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import ebuid from "../../assets/images/cinemas/hiflix.png";

export default class index extends Component {
  render() {
    return (
      <div className="movie-schedule-card">
        <div className="d-flex flex-row justify-content-start align-items-center">
          <img src={ebuid} alt="ebu.id" />
          <div>
            <h5>ebv.id</h5>
            <p>Whatever street No.12, South Purwokerto</p>
          </div>
        </div>
        <Col xs={12} className=" d-flex flex-row flex-wrap time-available">
          <div className="time">
            <a href="#" className="availble">
              08:30am
            </a>
          </div>
          <div className="time">
            <a href="#" className="availble">
              10:30pm
            </a>
          </div>
          <div className="time">
            <a href="#" className="disabled">
              12:00pm
            </a>
          </div>
          <div className="time">
            <a href="#" className="now-play">
              02:00pm
            </a>
          </div>
          <div className="time">
            <a href="#" className="availble">
              04:30pm
            </a>
          </div>
          <div className="time">
            <a href="#" className="disabled">
              07:00pm
            </a>
          </div>
          <div className="time">
            <a href="#" className="availble">
              08:30pm
            </a>
          </div>
        </Col>
        <Col xs={12} className=" d-flex justify-content-between my-3">
          <p>Price</p>
          <h6>$10.00/seat</h6>
        </Col>
        <Col xs={12} className="col-12 d-flex justify-content-between my-3">
          <Link
            className="btn btn-primary"
            to={`/cinema-order/${this.props.id}`}
            role="button"
          >
            Book now
          </Link>
          <Link
            className="btn btn-outline-primary"
            to={`/cinema-order/${this.props.id}`}
            role="button"
          >
            Add to cart
          </Link>
        </Col>
      </div>
    );
  }
}
