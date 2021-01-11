import React, { Component } from "react";

import Header from "../../components/Header";
import Hero from "../../layout/Hero";
import CardNowShow from "../../components/CardNowShow";
import NowShowing from "../../layout/NowShowing";

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <Hero />
        <NowShowing />
        <Hero />
      </>
    );
  }
}

export default Home;
