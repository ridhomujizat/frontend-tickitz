import React, { Component } from 'react'
import './index.scss'

import { Link } from 'react-router-dom'

class CardNowShow extends Component {
  render () {
    return (
      <div className='slide text-center movie-now-showing'>
        <div className='movie-now-showing-img'>
          <img src={this.props.image} alt={this.props.title} />
        </div>
        <div className='movie-now-showing-detail'>
          <h3>{this.props.title}</h3>
          <p>{this.props.genre}</p>
          <Link
            className='btn btn-primary btn-block'
            to={`/movie-detail/${this.props.slug}`}
          >
            Detail
          </Link>
          <Link
            className='btn btn-outline-primary btn-block'
            to={`/movie-detail/${this.props.slug}`}
          >
            Book Now
          </Link>
        </div>
      </div>
    )
  }
}

export default CardNowShow
