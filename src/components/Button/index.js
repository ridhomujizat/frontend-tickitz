import React, { Component } from "react";
import "./index.scss";
import { Button as ButtonBootstrap } from "react-bootstrap";

class Button extends Component {
  render() {
    return (
      <ButtonBootstrap
        variant={this.props.variant}
        type={this.props.type}
        value={this.props.value}
        block={this.props.block}
        className={this.props.className}
      >
        {this.props.children}
      </ButtonBootstrap>
    );
  }
}

export default Button;
