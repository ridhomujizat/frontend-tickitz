import React, { Component } from 'react'

import Header from '../../components/Header'
import Hero from '../../layout/Hero'
import NowShowing from '../../layout/NowShowing'
import UpComing from '../../layout/UpComing'
import JoinSubcribe from '../../layout/JoinSubcribe'
import Footer from '../../components/Footer'

class Home extends Component {
  render () {
    return (
      <>
        <Header />
        <Hero />
        <NowShowing />
        <UpComing />
        <JoinSubcribe />
        <Footer />
      </>
    )
  }
}

export default Home
