import React, { Component } from "react";
import "./index.scss";

import { Row, Col, Form } from "react-bootstrap";
import Buttom from "../../components/Button";
import { InputNumber, InputText, InputPassword } from "../../components/Form";

export default class index extends Component {
  render() {
    return (
      <>
        <div className="details-information my-4">
          <Row>
            <h6>Details Information</h6>
          </Row>
          <hr />
          <Row>
            <Col xs={12}>
              <Row>
                <Form className="row g-3">
                  <Col xs={12} md={6}>
                    <InputText
                      label={"First Name"}
                      name="fristName"
                      type={"text"}
                      placeholder={"Your First Name"}
                    />
                  </Col>
                  <Col xs={12} md={6}>
                    <InputText
                      label={"Last Name"}
                      name="lastName"
                      type={"text"}
                      placeholder={"Your Last Name"}
                    />
                  </Col>
                  <Col xs={12} md={6}>
                    <InputText
                      label={"Email"}
                      name="email"
                      type={"email"}
                      placeholder={"Your Email"}
                    />
                  </Col>
                  <Col xs={12} md={6}>
                    <InputNumber
                      label={"Phone Number"}
                      name="phoneNumber"
                      type={"text"}
                      placeholder={"Your Phone Number"}
                    />
                  </Col>
                </Form>
              </Row>
            </Col>
          </Row>
        </div>

        <div className="details-information mb-4">
          <Row className="row">
            <h6>Change Password</h6>
          </Row>
          <hr />
          <Row>
            <Col xs={12}>
              <Form className=" g-3">
                <Row>
                  <Col xs={12} md={6} className="form-group">
                    <label for="exampleFormControlInput1">New Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Write your password"
                    />
                  </Col>
                  <Col xs={12} md={6} className="form-group ">
                    <label for="exampleFormControlInput1">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Confirm your password"
                    />
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </div>

        <div className="btn-update">
          <Row>
            <Col xs={12} md={6} className="col-12 col-md-6">
              <Buttom type="submit" variant="primary" block="true">
                Update changes
              </Buttom>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}
