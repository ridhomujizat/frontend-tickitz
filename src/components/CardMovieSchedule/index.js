import React, { Component } from 'react'
import './index.scss'
import { Col } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'
import Button from '../../components/Button'
import { connect } from 'react-redux'
import { selectTime } from '../../redux/actions/order'

class Index extends Component {
  state = {
    ...this.props
  }

  selectedTime = (event) => {
    const value = event.target.id.split(',')
    return this.props.selectTime({
      idSchedule: value[0],
      time: value[1].slice(0, 5)
    })
  }

  bookNow = async () => {
    const { idMovie, date, image, price, title, name } = this.state
    await this.props.selectTime({
      title: title,
      idMovie: idMovie,
      date: date,
      imageCinema: image,
      price: price,
      cinemaName: name
    })
    const { slug } = this.props.match.params

    return this.props.history.push(`/cinema-order/${slug}`)
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
          <Button
            role='button'
            onClick={() => this.bookNow()}
          >
            Book Now
          </Button>
          <Link
            className='btn btn-outline-primary'
            to={`/cinema-order/${this.props.slug}`}
            role='button'
            onClick={() => this.bookNow(this.props.slug)}
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index))
