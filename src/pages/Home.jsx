import React from "react";
import HomeBanner from "../components/HomeBanner/HomeBanner";
import AllCategory from "../components/AllCategory";
import Countdown from "../components/Countdown/Countdown";
import About from "../components/About";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>ELib</title>
      </Helmet>
      <HomeBanner />
      <About />
      <AllCategory />
      <Countdown />
    </>
  );
};

export default Home;
