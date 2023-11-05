import React from "react";
import HomeBanner from "../components/HomeBanner/HomeBanner";
import AllCategory from "../components/AllCategory";
import Countdown from "../components/Countdown/Countdown";

const Home = () => {
  return (
    <>
      <HomeBanner />
      <AllCategory />
      <Countdown />
    </>
  );
};

export default Home;
