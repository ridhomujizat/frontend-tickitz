import React, { Component } from "react";
import "./index.scss";

import { AiOutlineCalendar } from "react-icons/ai";
import { Form, InputGroup } from "react-bootstrap";

export default class index extends Component {
  render() {
    return (
      <Form.Group className="input-date">
        <Form.Label>{this.props.label}</Form.Label>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text>
              <AiOutlineCalendar />
            </InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            name={this.props.name}
            type="date"
            placeholder={this.props.placeholder}
            onChange={this.props.onChange}
          />
        </InputGroup>
      </Form.Group>
    );
  }
}
