import React, { Component } from 'react'
import './index.scss'
import { Row, Col } from 'react-bootstrap'
import moment from 'moment'
import http from '../../helper/http'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
const { REACT_APP_API_URL: API_URL } = process.env

class OrderHistory extends Component {
  state = {
    history: [],
    message: null
  }
  async componentDidMount () {
    const { token } = this.props.auth
    try {
      const response = await http(token).get('/transaction/order-history/')
      console.log(response)
      this.setState({ history: response.data.results })
    } catch (err) {
      if (err.response) {
        const { message } = err.response
        this.setState({ message })
      }
    }
  }
  transaction (value, id) {
    if (value === 'pending') {
      this.props.history.push(`/payment/${id}`)
    } else {
      this.props.history.push(`/result-ticket/${id}`)
    }
  }
  render () {
    return (
      <>
        {this.state.history.length !== 0
          ? this.state.history.map((item, index) => {
            return (
              <div className='order-history-ticket mb-4' key={String(index)}>
                <Row class='flex-md-row-reverse justify-content-between'>
                  <Col
                    xs={12}
                    className='d-flex flex-row flex-wrap flex-md-row-reverse justify-content-between'
                  >
                    <img src={`${API_URL}${item.image}`} alt='' />

                    <div className='history-text'>
                      <p>{moment(item.date).format('LLLL')}</p>
                      <h5>{item.title}</h5>
                    </div>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col
                    xs={12}
                    className=' d-flex flex-row justify-content-between align-items-center'
                  >
                    <button
                      type='button'
                      className={`btn btn-${item.status === 'pending' ? 'warning' : 'success'}`}
                      onClick={() => this.transaction(item.status, item.id)}>
                      {item.status === 'pending' ? 'Compalete your payment' : 'Ticket in active'}
                    </button>
                  </Col>
                </Row>
              </div>
            )
          })
          : <div>{this.state.message || 'Order some ticket'}</div>

        }
      </>
    )
  }
}
const mapStateToProps = (state) => ({
  auth: state.auth
})
export default connect(mapStateToProps)(withRouter(OrderHistory))
