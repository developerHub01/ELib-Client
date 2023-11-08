import React, { useEffect } from "react";
import HomeBanner from "../components/HomeBanner/HomeBanner";
import AllCategory from "../components/AllCategory";
import Countdown from "../components/Countdown/Countdown";
import About from "../components/About";

const Home = () => {
  return (
    <>
      <HomeBanner />
      <About />
      <AllCategory />
      <Countdown />
    </>
  );
};

export default Home;
