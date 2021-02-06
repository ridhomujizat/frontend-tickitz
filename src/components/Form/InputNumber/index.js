import React, { Component } from 'react'
import './index.scss'
import { Form, InputGroup } from 'react-bootstrap'

class InputNumber extends Component {
  render () {
    return (
      <Form.Group className='input-text'>
        <Form.Label>{this.props.label}</Form.Label>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text>+62</InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            name={this.props.name}
            type={this.props.type}
            placeholder={this.props.placeholder}
            onChange={this.props.onChange}
            defaultValue={this.props.defaultValue}
            required
          />
        </InputGroup>
      </Form.Group>
    )
  }
}

export default InputNumber
