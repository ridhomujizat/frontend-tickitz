import React, { Component } from "react";
import "./index.scss";
import { Container, Row, Col } from "react-bootstrap";

import Button from "../../components/Button";
import MonthList from "../../dummy/month";
import CardUpComing from "../../components/CardUpComig";

export default class index extends Component {
  state = {
    monthList: MonthList,
  };
  render() {
    const { monthList } = this.state;
    return (
      <>
        <div id="upcoming">
          <Container>
            <div className="d-flex container justify-content-between upcoming-text mt-4">
              <h4>Upcoming Movies</h4>
              <a href="#">
                <h5>view all</h5>
              </a>
            </div>
            <div className="slider upcoming-button">
              {monthList.map((item, index) => {
                return (
                  <div
                    className="slide upcoming-button-month"
                    key={String(index)}
                  >
                    <Button
                      variant="outline-primary"
                      value={item.month}
                      block={true}
                    >
                      {item.month}
                    </Button>
                  </div>
                );
              })}
            </div>
            <div className="slider mt-3 mb-5">
              <CardUpComing />
              <CardUpComing />
              <CardUpComing />
              <CardUpComing />
              <CardUpComing />
            </div>
          </Container>
        </div>
      </>
    );
  }
}
