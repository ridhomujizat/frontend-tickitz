import React, { Component } from "react";
import "./index.scss";

import { Row, Col } from "react-bootstrap";
import { LogoWhite } from "../../components/Logo";

export default class InfoSign extends Component {
  render() {
    let orderList = this.props.order;
    return (
      <Col sm={7} className="info-sign">
        <Row>
          <div className="info-sign-content mt-5 mx-auto">
            <LogoWhite className="mb-5" size={"100px"} />
            <h1 className="mt-3 mb-2">{this.props.heading}</h1>
            <p className="mb-4">{this.props.text}</p>
            <div className="order-status">
              {orderList.map((item, index) => {
                return (
                  <div className="older-list-status" key={String(index)}>
                    <p className={` ${index == 0 ? "active" : ""}`}>{item}</p>
                    {index + 1 == orderList.length ? (
                      ""
                    ) : (
                      <div className="line"></div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </Row>
      </Col>
    );
  }
}
