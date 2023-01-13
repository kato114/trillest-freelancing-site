import React from "react";

import Hero from "./components/Hero/Hero";
import Statstic from "./components/Statistic/Statistic";
import Steps from "./components/Steps/Steps";
import Service from "./components/Service/Service";
import Sellers from "./components/Sellers/Sellers";
import Projects from "./components/Projects/Projects";

import "./Home.css";

function Home() {
  return (
    <>
      <Hero />
      <Statstic />
      <Steps />
      <Service />
      <Sellers />
      <Projects />
    </>
  );
}

export default Home;
