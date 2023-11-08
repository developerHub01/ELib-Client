import React, { useEffect } from "react";
import HomeBanner from "../components/HomeBanner/HomeBanner";
import AllCategory from "../components/AllCategory";
import Countdown from "../components/Countdown/Countdown";
import About from "../components/About";
import axios from "axios";
import { serverApi } from "../constant/constant";

const Home = () => {
  useEffect(() => {
    axios
      .get(`${serverApi}/`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, []);
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
