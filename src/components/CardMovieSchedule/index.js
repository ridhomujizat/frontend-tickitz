import React, { Component } from 'react'
import './index.scss'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'

import { connect } from 'react-redux'
import { selectTime } from '../../redux/actions/order'

class Index extends Component {
  state = {
    ...this.props
  }

  componentDidMount () {
    console.log(this.state.slug)
  }
  selectedTime = (event) => {
    // if (event.target.className === 'disabled') {
    //   return this.setState({ time: null })
    // }
    const value = event.target.id.split(',')
    return this.props.selectTime({
      idSchedule: value[0],
      time: value[1],
      seta: value[2]
    })
  }

  bookNow = (slug) => {
    const { idMovie, date, image, price, title, name } = this.state

    return this.props.selectTime({
      title: title,
      idMovie: idMovie,
      date: date,
      imageCinema: image,
      price: price,
      cinemaName: name
    })
  }

  goBack = () => {
    history.goBack()
  }
  render () {
    const { idSchedule } = this.props.order
    return (
      <div className='movie-schedule-card'>
        <div className='d-flex flex-row justify-content-start align-items-center'>
          <img src={this.props.image} alt={this.props.cinema} />
          <div>
            <h5>{this.props.name}</h5>
            <p id="address">{this.props.address}</p>
          </div>
        </div>
        <Col xs={12} className=' d-flex flex-row flex-wrap time-available'>
          {this.props.times.map((item, index) => {
            const value = []
            value.push(item.id)
            value.push(item.time)
            value.push(item.seat)
            return (
              <div className='time' key={String(index)}>
                <div
                  // id={item.id}
                  id={value}
                  className={
                    idSchedule === `${item.id}`
                      ? 'selected'
                      : item.status
                  }
                  onClick={this.selectedTime}
                  key={String(index)}
                  time={item.time.slice(0, 5)}

                >
                  {item.time.slice(0, 5)}
                </div>
              </div>
            )
          })}
        </Col>
        <Col xs={12} className=' d-flex justify-content-between my-3'>
          <p>Price</p>
          <h6>Rp. {this.props.price}/seat</h6>
        </Col>
        <Col xs={12} className='col-12 d-flex justify-content-between my-3'>
          <Link
            to={`/cinema-order/${this.state.slug}`}
          >
            <Button
              role='button'
              onClick={() => this.bookNow(this.state.slug)}
            >
              Book Now
          </Button>
          </Link>
          <Link
            className='btn btn-outline-primary'
            to={`/cinema-order/${this.state.slug}`}
            role='button'
            onClick={() => this.bookNow(this.state.slug)}
          >
            Add to cart
          </Link>
        </Col>
      </div >
    )
  }
}

const mapStateToProps = state => ({
  order: state.order
})
const mapDispatchToProps = { selectTime }
export default connect(mapStateToProps, mapDispatchToProps)(Index)
