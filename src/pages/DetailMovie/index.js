import React, { Component } from 'react'
import './index.scss'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Container, Row, Col, Form } from 'react-bootstrap'
import { InputDate, InputLocation } from '../../components/Form'
import Moment from 'react-moment'
import CardMovieSchedule from '../../components/CardMovieSchedule'

import http from '../../helper/http'
import qs from 'querystring'
const { REACT_APP_API_URL: API_URL } = process.env

class DetailMovie extends Component {
  state = {
    id: null,
    movie: {},
    cinemas: [],
    date: null,
    idLocation: null,
    errorMessage: 'Choose date and location first',
    slug: ''
  }

  async componentDidMount () {
    window.scrollTo(0, 0)
    const { slug } = this.props.match.params
    const { search } = this.props.location
    try {
      const resultMovie = await http().get(`/movies/${slug}`)
      await this.setState({
        id: resultMovie.data.results.id,
        movie: resultMovie.data.results
      })
      if (search) {
        const query = qs.parse(search.replace('?', ''))
        await this.setState({
          slug: slug,
          ...query
        })
        await this.updateSchedule()
      }
    } catch (err) {
      this.setState({ errorMessage: err.response.data.message })
    }
  }

  async handleChange (event) {
    const typeOfInput = event.target.name
    const value = String(event.target.value)
    const { search } = this.props.location
    const query = qs.parse(search.replace('?', ''))
    switch (typeOfInput) {
      case 'date': {
        await this.setState({ date: value })
        await this.props.history.push({
          date: qs.stringify(value)
        })
        query.date = value
        // this.setState({ date: value })
        break
      }
      case 'location': {
        await this.setState({ idLocation: value })
        query.idLocation = value
        break
      }
      default: {
        break
      }
    }
    await this.props.history.push({
      search: qs.stringify(query)
    })
    if (this.state.date && this.state.idLocation) {
      await this.updateSchedule()
    }
  }

  async updateSchedule () {
    const { slug } = this.props.match.params
    const { date, idLocation } = this.state
    const query = qs.stringify({ date, idLocation })

    try {
      const response = await http().get(`/schedule/?slug=${slug}&${query}`)
      await this.setState({
        cinemas: response.data.results.cinema,
        errorMessage: null
      })
    } catch (err) {
      await this.setState({
        errorMessage: err.response.data.message,
        cinemas: []
      })
    }
  }

  render () {
    const { movie, cinemas, errorMessage, slug } = this.state
    return (
      <>
        <Header />
        <Container className='mt-5'>
          <div className='detail-movie'>
            <Row>
              <Col xs={12} md={4} lg={3} className='text-center'>
                <img src={`${API_URL}${movie.image}`} alt={movie.title} />
              </Col>
              <Col xs={12} md={8} lg={9}>
                <Row>
                  <Col
                    xs={12}
                    className='text-center text-md-left my-4 mt-md-0'
                  >
                    <h1>{movie.title}</h1>
                    <p>{movie.genre}</p>
                  </Col>
                  <Col xs={6}>
                    <p>Release Date</p>
                    <h6><Moment format='MMMM, D YYYY'>{movie.releaseDate}</Moment></h6>
                  </Col>
                  <Col xs={6}>
                    <p>Directed by</p>
                    <h6>{movie.directed}</h6>
                  </Col>
                  <Col xs={6} className='my-4'>
                    <p>Duration</p>
                    <h6>{movie.hour} hours {movie.minute} minutes</h6>
                  </Col>
                  <Col xs={6} className='my-4'>
                    <p>Casts</p>
                    <h6>{movie.casts}</h6>
                  </Col>
                  <Col xs={12}>
                    <p>Synopsis</p>
                    <h6>{movie.description}</h6>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className='showtimes my-5'>
              <Col xs={12} className='my-3 text-center'>
                <h4>Showtimes and Tickets</h4>
              </Col>
              <Col xs={12} md={6} className='text-md-right text-center mb-4'>
                <Form>
                  <InputDate
                    name='date'
                    onChange={(event) => this.handleChange(event)}
                  />
                </Form>
              </Col>
              <Col
                xs={12}
                md={6}
                className='text-md-left text-center mb-4 m-auto'
              >
                <InputLocation
                  name='location'
                  onChange={(event) => this.handleChange(event)}
                />
              </Col>
            </Row>

            <Row className='my-5 movie-schedule'>
              {errorMessage ? <p id="error">{errorMessage}</p> : ''}
              {cinemas.map((item) => {
                return (
                  <Col xs={12} md={6} lg={4} key={String(item.idCinema)}>
                    <CardMovieSchedule
                      slug={slug}
                      title={this.state.movie.title}
                      idMovie={this.state.movie.id}
                      name={item.name}
                      image={`${API_URL}${item.image}`}
                      address={item.address}
                      price={item.price}
                      times={item.showTime}
                      id={item.idCinema}
                      date={item.date}
                    />
                  </Col>
                )
              })}
            </Row>

            <Row className='justify-content-center'>
              <div className='div text-center view-more w-100'>
                <a href='#'>View More</a>
              </div>
            </Row>
          </div>
        </Container>

        <Footer />
      </>
    )
  }
}

export default DetailMovie
