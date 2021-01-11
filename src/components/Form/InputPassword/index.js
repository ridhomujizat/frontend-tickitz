import React, { Component } from "react";
import "./index.scss";
import { Form } from "react-bootstrap";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

class InputPassword extends Component {
  state = {
    passwordShow: false,
  };

  showPassword = () => {
    if (this.state.passwordShow === false) {
      return this.setState({ passwordShow: true });
    }
    return this.setState({ passwordShow: false });
  };

  render() {
    return (
      <Form.Group className="input-password">
        <Form.Label>{this.props.label}</Form.Label>
        <Form.Control
          name={this.props.name}
          type={this.state.passwordShow ? "text" : "password"}
          placeholder={this.props.placeholder}
          onChange={this.props.onChange}
          required
        />
        <p onClick={this.showPassword}>
          {this.state.passwordShow ? (
            <AiOutlineEye />
          ) : (
            <AiOutlineEyeInvisible />
          )}
        </p>
      </Form.Group>
    );
  }
}

export default InputPassword;
