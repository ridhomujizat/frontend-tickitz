import React, { useEffect, useState } from 'react'
import './index.scss'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import CardNowShow from '../../components/CardNowShow'
import http from '../../helper/http'
const { REACT_APP_API_URL: API_URL } = process.env

const NowShowing = () => {
  const [movieList, setMovieList] = useState([])

  useEffect(async () => {
    const response = await http().get('movies?limit=10')

    setMovieList(response.data.pageInfo.results)
  }, [movieList])

  // async componentDidMount () {
  //   const response = await http().get('movies?limit=10')
  //   this.setState({
  //     movieList: response.data.pageInfo.results
  //   })
  // }

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
            {movieList
              .filter((data) => data.status === 'released')
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
              })}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default NowShowing
