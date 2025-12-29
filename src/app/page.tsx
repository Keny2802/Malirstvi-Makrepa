import {
  Fragment
} from "react";

import ContactHeader from "./Components/ContactHeader";
import Header from "./Components/Header";
import Hero from "./Sections/Hero";
import Cta from "./Sections/Cta";
import Contact from "./Sections/Contact";
import Footer from "./Sections/Footer";

const Home = () => {
  return (
    <Fragment>
      <ContactHeader />
      <Header />
      <Hero />
      <Cta />
      <Contact />
      <Footer />
    </Fragment>
  );
};

export default Home;