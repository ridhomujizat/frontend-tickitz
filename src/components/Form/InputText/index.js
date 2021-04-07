import React, { Component } from 'react'
import './index.scss'
import { Form } from 'react-bootstrap'

class InputText extends Component {
  render () {
    return (
      <Form.Group className='input-text'>
        <Form.Label>{this.props.label}</Form.Label>
        <Form.Control
          name={this.props.name}
          type={this.props.type}
          placeholder={this.props.placeholder}
          onChange={this.props.onChange}
          as={this.props.as}
          rows={this.props.rows}
          value={this.props.value}
          onBlur={this.props.onBlur}
          defaultValue={this.props.defaultValue}
          className={this.props.className}
          required
        />
      </Form.Group>
    )
  }
}

export default InputText
