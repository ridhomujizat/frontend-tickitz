import React, { Component } from 'react'
import './index.scss'
import { Container } from 'react-bootstrap'

import Button from '../../components/Button'
import MonthList from '../../dummy/month'
import CardUpComing from '../../components/CardUpComig'
import MovieList from '../../dummy/movieNowShow'

export default class index extends Component {
  state = {
    monthList: MonthList,
    movieList: MovieList
  }

  monthUpcoming = (value) => {
    this.setState({
      movieList: MovieList.filter((item) => item.date.indexOf(value) !== -1)
    })
  }

  fullMovie = () => {
    this.setState({ movieList: MovieList })
  }

  render () {
    const { monthList, movieList } = this.state
    return (
      <>
        <div id='upcoming'>
          <Container>
            <div className='d-flex container justify-content-between upcoming-text mt-4'>
              <h4>Upcoming Movies</h4>
              <h5 onClick={this.fullMovie}>view all</h5>
            </div>
            <div className='slider upcoming-button'>
              {monthList.map((item, index) => {
                return (
                  <div
                    className='slide upcoming-button-month'
                    key={String(index)}
                  >
                    <Button
                      variant='outline-primary'
                      value={item.month}
                      block={true}
                      onClick={() => this.monthUpcoming(item.month)}
                    >
                      {item.month}
                    </Button>
                  </div>
                )
              })}
            </div>
            <div className='slider mt-3 mb-5'>
              {movieList
                .filter((data) => data.status === 'upcoming')
                .map((item) => {
                  return (
                    <CardUpComing
                      image={item.images}
                      title={item.title}
                      genre={item.genre}
                      key={String(item.id)}
                      id={item.id}
                    />
                  )
                })}
            </div>
          </Container>
        </div>
      </>
    )
  }
}
