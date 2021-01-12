import React, { Component } from "react";
import "../SignUp/sign.scss";
import { Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

import InfoLogin from "../../layout/InfoSign/infoLogin";
import { LogoPurple } from "../../components/Logo";
import { InputText, InputPassword } from "../../components/Form";
import Button from "../../components/Button";
import fb from "../../assets/images/logo/Facebook.jpg";
import google from "../../assets/images/logo/google.png";

export default class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  submitData = (event) => {
    event.preventDefault();
    if (this.state.email && this.state.password) {
      this.props.history.push("/?success=true", { data: this.state });
    } else {
      this.props.history.push("/login?success=false");
    }
    console.log(this.state);
  };

  changeText = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <>
        <div>
          <div id="sign">
            <Row className="h-100">
              <InfoLogin />
              <Col sm={5} className="form-sign py-sm-5 py-lg-auto">
                <Row className="justify-content-center logo-mobile my-5">
                  <Col xs={9}>
                    <LogoPurple size={"25px"} />
                  </Col>
                </Row>
                <Row className="justify-content-center mb-3">
                  <Col xs={9}>
                    <h2 className="h1">Sign In</h2>
                    <p class="sign-p">
                      Sign in with your data that you entered during your
                      registration
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
                      <InputPassword
                        name="password"
                        label={"Password"}
                        placeholder={"Write Your Password"}
                        onChange={(event) => this.changeText(event)}
                      />
                      <Button
                        className="btn-primary w-100 py-3 mb-4"
                        type="submit"
                      >
                        Sign In
                      </Button>
                    </Form>
                  </Col>
                </Row>
                <Row className="justify-content-center text-center">
                  <Col className="mt-1">
                    <p>
                      Forgot your password?
                      <Link to="/forget-password">Reset now</Link>
                    </p>
                  </Col>
                </Row>
                <Row className="mt-3">
                  <div class="col text-center">
                    <a class="btn btn-login" href="#" role="button">
                      <img src={google} />
                      <span>Google</span>
                    </a>
                    <a class="btn btn-login" href="#" role="button">
                      <img src={fb} alt="" />
                      <span> Facebook</span>
                    </a>
                  </div>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </>
    );
  }
}
