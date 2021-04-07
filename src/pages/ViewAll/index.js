import React, { Component } from 'react'
import './index.scss'
import { FaSearch } from 'react-icons/fa'
import { Container, Row, Col, Form, Pagination, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { InputText } from '../../components/Form'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { connect } from 'react-redux'
import { getMovie } from '../../redux/actions/movie'
import qs from 'querystring'
import http from '../../helper/http'
const { REACT_APP_API_URL: API_URL } = process.env

class Index extends Component {
  state = {
    active: 5,
    isLoading: false,
    status: null,
    order: 'lastest',
    listGenre: [],
    genre: null,
    search: ''
  }
  async componentDidMount () {
    const { search } = this.props.location
    const query = qs.parse(search.replace('?', ''))
    query.limit = 8
    await this.setState({ isLoading: true })
    await this.props.getMovie(query)
    await this.setState({ isLoading: false })
    await this.setState({ ...this.state, ...query })
    this.fethGenreList()
  }
  async fethGenreList () {
    const respon = await http().get('genre')
    this.setState({ listGenre: respon.data.results })
  }
  async pagination (page) {
    const { search } = this.props.location
    const query = qs.parse(search.replace('?', ''))
    query.limit = 8
    query.page = page
    await this.setState({ isLoading: true })
    await this.props.getMovie(query)
    await this.setState({ isLoading: false })
    delete query.limit
    await this.props.history.push({
      search: qs.stringify(query)
    })
  }

  async status (value) {
    const { search } = this.props.location
    const query = qs.parse(search.replace('?', ''))
    query.limit = 8
    delete query.page
    if (value.target.value === 'All') {
      delete query.status
    } else {
      await this.setState({ status: value.target.value })
      query.status = this.state.status
    }
    await this.setState({ isLoading: true })
    await this.props.getMovie(query)
    await this.setState({ isLoading: false })
    delete query.limit
    await this.props.history.push({
      search: qs.stringify(query)
    })
  }

  async genre (value) {
    const { search } = this.props.location
    const query = qs.parse(search.replace('?', ''))
    query.limit = 8
    delete query.page
    if (value.target.value === 'All') {
      delete query.genre
    } else {
      await this.setState({ genre: value.target.value })
      query.genre = this.state.genre
    }
    await this.setState({ isLoading: true })
    await this.props.getMovie(query)
    await this.setState({ isLoading: false })
    delete query.limit
    await this.props.history.push({
      search: qs.stringify(query)
    })
  }
  async order (value) {
    const { search } = this.props.location
    const query = qs.parse(search.replace('?', ''))
    query.limit = 8
    delete query.page
    if (value.target.value === 'lastest') {
      delete query.sort
      delete query.order
    } else {
      await this.setState({ order: value.target.value })
      query.sort = 'releaseDate'
      query.order = 'ASC'
    }
    await this.setState({ isLoading: true })
    await this.props.getMovie(query)
    await this.setState({ isLoading: false })
    delete query.limit
    await this.props.history.push({
      search: qs.stringify(query)
    })
  }
  async search (value) {
    const { search } = this.props.location
    const query = qs.parse(search.replace('?', ''))
    query.limit = 8
    if (value.target.value) {
      query.search = value.target.value
      this.setState({ search: value.target.value })
    } else {
      this.setState({ search: '' })
      delete query.search
    }
    delete query.page
    await this.setState({ isLoading: true })
    await this.props.getMovie(query)
    await this.setState({ isLoading: false })
    delete query.limit
    await this.props.history.push({
      search: qs.stringify(query)
    })
  }

  render () {
    const { currentPage, totalPage, results, nextLink, prevLink } = this.props.movie.movie
    const items = []
    if (totalPage - currentPage >= 5) {
      for (let number = currentPage; number <= currentPage + 4; number++) {
        items.push(
          <Pagination.Item key={number} active={number === currentPage} onClick={() => this.pagination(number)}>
            {number}
          </Pagination.Item>
        )
      }
    } else if (totalPage - 5 > 0) {
      for (let number = totalPage - 4; number <= totalPage; number++) {
        items.push(
          <Pagination.Item key={number} active={number === currentPage} onClick={() => this.pagination(number)}>
            {number}
          </Pagination.Item>
        )
      }
    } else {
      for (let number = 1; number <= totalPage; number++) {
        items.push(
          <Pagination.Item key={number} active={number === currentPage} onClick={() => this.pagination(number)}>
            {number}
          </Pagination.Item>
        )
      }
    }
    return (
      <>
        <Header />
        <Container className=' py-5'>
          <Row className='fitur'>
            <Col>
              <Row className="align-items-center">
                <Col xs='10' md='11'>
                  <InputText
                    value={this.state.search}
                    placeholder='Search title movie'
                    onChange={(value) => this.search(value)}
                  />
                </Col >
                <Col xs='2' md='1' className='d-flex justify-content-center align-items-center'>
                  <FaSearch size='1.1em' color='#414141' />
                </Col>
              </Row>
              <Row>
                <Col xs='4'>
                  <Form.Group>
                    <Form.Label>Status</Form.Label>
                    <Form.Control
                      as="select" size='sm'
                      onChange={(value) => this.status(value)}
                      value={this.state.status}
                    >
                      <option>All</option>
                      <option value='released'>Now Showing</option>
                      <option value='upcoming'>Up Comming</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col xs='4'>
                  <Form.Group>
                    <Form.Label>Genre</Form.Label>
                    <Form.Control as="select" size='sm'
                      value={this.state.genre}
                      onChange={(value) => this.genre(value)}
                    >
                      <option>All</option>
                      {this.state.listGenre.map(item => {
                        return (
                          <option key={String(item.id)}>{item.name}</option>
                        )
                      })}
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col xs='4'>
                  <Form.Group>
                    <Form.Label>Order by</Form.Label>
                    <Form.Control as="select" size='sm'
                      defaultValu='lastest'
                      onChange={(value) => this.order(value)}
                    >
                      <option value='lastest'>Lastest release</option>
                      <option value='oldest'>Oldest release</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>
              <Row className='movie-list'>
                {this.state.isLoading
                  ? <Col xs='12' className='d-flex justify-content-center align-items-center loading'>
                    <Spinner animation="border" variant="primary" />
                  </Col>
                  : <>{results.map(item => {
                    return (
                      <Col xs='12' md='4' lg='3' className='d-flex justify-content-center' key={item.id}>
                        <div className='card-movie text-center'>
                          <img src={`${API_URL}${item.image}`} alt={this.props.title} />
                          <h3 className='mt-3'>{item.title}</h3>
                          <p>{this.props.genre}</p>
                          <Link
                            className='btn btn-outline-primary btn-block'
                            to={`/movie-detail/${item.slug}`}
                          >
                            Detail
                          </Link>
                        </div>
                      </Col>
                    )
                  })}</>
                }
              </Row>
              <Row>
                <Col xs='12' className='d-flex justify-content-center'>
                  {totalPage !== 0
                    ? <Pagination>
                      <Pagination.Prev onClick={() => this.pagination(currentPage - 1)} disabled={prevLink === null} />
                      {items}
                      <Pagination.Next onClick={() => this.pagination(currentPage + 1)} disabled={nextLink === null} />
                    </Pagination>
                    : null}
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <Footer />
      </>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  movie: state.movie
})
const mapDispatchToProps = { getMovie }
export default connect(mapStateToProps, mapDispatchToProps)(Index)
