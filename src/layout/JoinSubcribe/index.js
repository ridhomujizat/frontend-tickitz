import React, { Component } from "react";
import "./index.scss";

import { Container, Row, Col, Form } from "react-bootstrap";
import { InputText } from "../../components/Form";
import Button from "../../components/Button";

export default class index extends Component {
  render() {
    return (
      <>
        <Container id="join-subcribe">
          <Row>
            <Col xs={12} className="text-center">
              <h2 className="h5 my-5">
                Be the vanguard of the
                <br />
                <span className="h1">Moviegoers</span>
              </h2>
            </Col>
            <Col xs={12} className="d-flex justify-content-center">
              <Form className="form-inline">
                <InputText
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <Button
                  className="btn btn-primary my-2 my-sm-0 ml-md-2"
                  type="submit"
                >
                  Join Now
                </Button>
              </Form>
            </Col>
            <Col xs={12} className="text-center my-5">
              <p>
                By joining you as a Tickitz member,
                <br />
                we will always send you the latest updates via email .
              </p>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
