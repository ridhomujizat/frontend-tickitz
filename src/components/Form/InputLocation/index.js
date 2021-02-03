import React, { Component } from 'react'
import './index.scss'
import { ImLocation } from 'react-icons/im'

import { Form, InputGroup } from 'react-bootstrap'
import http from '../../../helper/http'

export default class index extends Component {
  state = {
    locations: []
  }
  async componentDidMount () {
    const response = await http().get('location')
    this.setState({
      locations: response.data.results
    })
  }
  render () {
    const { locations } = this.state
    return (
      <Form.Group className="input-location">
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text>
              <ImLocation />
            </InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control as="select" defaultValue="selected"
            name={this.props.name}
            onChange={this.props.onChange}
          >
            <option value="selected" disabled hidden>location</option>
            {locations.map(item => {
              return (
                <option value={item.id} key={String(item.id)}>{item.name}</option>
              )
            })}
          </Form.Control>
        </InputGroup>
      </Form.Group>
    )
  }
}
