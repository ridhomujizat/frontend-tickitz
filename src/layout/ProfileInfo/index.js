import React, { Component } from "react";
import "./index.scss";
import { Row, Col } from "react-bootstrap";
import { BsThreeDots } from "react-icons/bs";
import user from "../../assets/images/user.jpeg";
import star from "../../assets/images/star.svg";

export default class index extends Component {
  render() {
    return (
      <>
        <div className="profile-content">
          <Row className="row">
            <Col
              xs={12}
              className=" d-flex flex-row align-items-center justify-content-between info"
            >
              <h6>INFO</h6>
              <p>
                <BsThreeDots />
              </p>
            </Col>
            <Col xs={12} className="text-center photo-profile my-3">
              <img src={user} alt="profile user" />
              <h5 className="my-3">Jonas El Rodriguez</h5>
              <p className="my-1">Moviegoers</p>
              <hr />
            </Col>
            <Col xs={12} className="loyalty-point">
              <h6 className="my-3">Loyalty Points</h6>
              <div className="card-point">
                <div className="d-flex flex-row justify-content-between mb-3 content-card">
                  <div>
                    <h6 className="mb-4">Moviegoers</h6>
                    <h6>
                      350 <span>points</span>
                    </h6>
                  </div>
                  <img src={star} alt="star" />
                </div>
                <div className="circle"></div>
                <div className="bg-1">.</div>
                <div className="bg-2"></div>
              </div>
            </Col>
            <Col className=" my-4 text-center">
              <p>180 points become a master</p>
              <div className="progress" style={{ borderRadius: "20px" }}>
                <div
                  className="progress-bar w-75"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ borderRadius: "20px" }}
                ></div>
              </div>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}
