import React, { Component } from "react";
import "../SignUp/sign.scss";
import { Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

import InfoSign from "../../layout/InfoSign/InfoSign";
import { LogoPurple } from "../../components/Logo";
import { InputText, InputPassword } from "../../components/Form";
import Button from "../../components/Button";
import fb from "../../assets/images/logo/Facebook.jpg";
import google from "../../assets/images/logo/google.png";

export default class index extends Component {
  state = {
    email: "",
  };

  submitData = (event) => {
    event.preventDefault();
    if (this.state.email) {
      this.props.history.push("/?success=true", { data: this.state });
    } else {
      this.props.history.push("/sign-up?success=false");
    }
    console.log(this.state);
  };

  changeText = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const order = [
      "Fill your complete email",
      "Activate your email",
      "Enter your new password",
      "Done",
    ];
    return (
      <>
        <div>
          <div id="sign">
            <Row className="h-100">
              <InfoSign
                heading="Lets reset your password"
                text="To be able to use your account again, please complete the following steps."
                order={order}
              />

              <Col sm={5} className="form-sign py-sm-5 py-lg-auto">
                <Row className="justify-content-center logo-mobile my-5">
                  <Col xs={9}>
                    <LogoPurple size={"25px"} />
                  </Col>
                </Row>
                <Row className="justify-content-center mb-3">
                  <Col xs={9}>
                    <h2 className="h4">Fill your complete email</h2>
                    <p className="sign-p">
                      we'll send a link to your email shortly
                    </p>
                  </Col>
                </Row>
                <Row className="justify-content-center align-items-center">
                  <Col xs={9} className="mt-3">
                    <Form onSubmit={this.submitData}>
                      <InputText
                        name="email"
                        label={" Email Address"}
                        type={"email"}
                        placeholder={"Write your email"}
                        onChange={(event) => this.changeText(event)}
                      />
                      <Button
                        className="btn-primary w-100 py-3 mb-4"
                        type="submit"
                      >
                        Activate Now
                      </Button>
                    </Form>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </>
    );
  }
}
