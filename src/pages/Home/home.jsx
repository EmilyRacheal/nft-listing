import React from "react";
import { GeneralContainer, Navbar, Footer } from "../../components/components";
import Hero from "./Hero/hero";
import Explore from "./Explore/explore";
import Newest from "./Newest/newest";

const Home = () => {
  return (
    <GeneralContainer>
      <Navbar />
      <Hero />
      <Newest />
      <Explore />
      <Footer />
    </GeneralContainer>
  );
};

export default Home;
