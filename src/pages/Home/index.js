import React, { Component } from "react";

import Header from "../../components/Header";
import Hero from "../../layout/Hero";
import NowShowing from "../../layout/NowShowing";
import DescriptionMovie from "../../layout/DescriptionMovie";

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <Hero />
        <NowShowing />
        <DescriptionMovie />
      </>
    );
  }
}

export default Home;
