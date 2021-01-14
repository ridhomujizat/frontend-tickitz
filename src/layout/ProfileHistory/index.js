import React, { Component } from "react";
import "./index.scss";
import { Row, Col } from "react-bootstrap";
import hiflix from "../../assets/images/cinemas/hiflix.png";
import ebvid from "../../assets/images/cinemas/ebv.id.png";
export default class index extends Component {
  render() {
    return (
      <>
        <div class="order-history-ticket mb-4">
          <Row class="flex-md-row-reverse justify-content-between">
            <Col
              xs={12}
              className="d-flex flex-row flex-wrap flex-md-row-reverse justify-content-between"
            >
              <img src={hiflix} alt="" />

              <div class="history-text">
                <p>Tuesday, 07 July 2020 - 04:30pm</p>
                <h5>Spider-Man: Homecoming</h5>
              </div>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col
              xs={12}
              className=" d-flex flex-row justify-content-between align-items-center"
            >
              <button type="button" class="btn btn-success">
                Ticket in active
              </button>
              <div class="show-more">
                <a href="">
                  Show Details
                  <span
                    class="iconify"
                    data-icon="bytesize:chevron-bottom"
                    data-inline="false"
                  ></span>
                </a>
              </div>
            </Col>
          </Row>
        </div>
        <div class="order-history-ticket mb-4">
          <Row class="flex-md-row-reverse justify-content-between">
            <Col
              xs={12}
              className="d-flex flex-row flex-wrap flex-md-row-reverse justify-content-between"
            >
              <img src={ebvid} alt="" />

              <div class="history-text">
                <p>Monday, 14 June 2020 - 02:00pm</p>
                <h5>Avengers: End Game</h5>
              </div>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col
              xs={12}
              className=" d-flex flex-row justify-content-between align-items-center"
            >
              <button type="button" class="btn btn-secondary">
                Secondary
              </button>
              <div class="show-more">
                <a href="">
                  Ticket used
                  <span
                    class="iconify"
                    data-icon="bytesize:chevron-bottom"
                    data-inline="false"
                  ></span>
                </a>
              </div>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}
