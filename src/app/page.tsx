import {
  Fragment
} from "react";

import ContactHeader from "./Components/ContactHeader";
import Header from "./Components/Header";
import Hero from "./Sections/Hero";
import Cta from "./Sections/Cta";

const Home = () => {
  return (
    <Fragment>
      <ContactHeader />
      <Header />
      <Hero />
      <Cta />
    </Fragment>
  );
};

export default Home;