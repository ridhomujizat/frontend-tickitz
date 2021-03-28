import React, { Component } from 'react'
import './index.scss'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CardNowShow from '../../components/CardNowShow'
import { connect } from 'react-redux'
import { getMovie } from '../../redux/actions/movie'
const { REACT_APP_API_URL: API_URL } = process.env

class NowShowing extends Component {
  state = {
    movie: []
  }
  async componentDidMount () {
    await this.props.getMovie({ status: 'released' })

    const { results } = this.props.movie.movieNowShowing
    await this.setState({ movie: results })
  }
  render () {
    const { errorMessage } = this.props.movie
    const { movie } = this.state
    return (
      <div id='now-showing'>
        <Container>
          <Row className=' pt-5 pb-3 now-showing-text'>
            <Col>
              <h4>Now Showing</h4>
            </Col>
            <Col className='text-right'>
              <Link to={'/'}>view all</Link>
            </Col>
          </Row>
          <Row className='pb-5'>
            <Col className='slider'>
              {errorMessage === null
                ? movie
                  .map((item) => {
                    return (
                      <CardNowShow
                        image={`${API_URL}${item.image}`}
                        title={item.title}
                        genre={item.genre}
                        key={String(item.id)}
                        id={item.id}
                        slug={item.slug}
                      />
                    )
                  })
                : (<>test</>)
              }
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  movie: state.movie
})

const mapDispatchToProps = { getMovie }

export default connect(mapStateToProps, mapDispatchToProps)(NowShowing)
