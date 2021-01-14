import React, { Component } from "react";
import "./index.scss";
import { ImLocation } from "react-icons/im";

import { Form, InputGroup } from "react-bootstrap";

export default class index extends Component {
  render() {
    return (
      <Form.Group className="input-location">
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text>
              <ImLocation />
            </InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control as="select">
            <option>Jakarta</option>
            <option>Karawang</option>
            <option>Bandung</option>
          </Form.Control>
        </InputGroup>
      </Form.Group>
    );
  }
}
