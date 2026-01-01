import {
  Fragment
} from "react";

import ContactHeader from "./Components/ContactHeader";
import Header from "./Components/Header";
import Hero from "./Sections/Hero";
import About from "./Sections/About";
import Services from "./Sections/Services";
import Cta from "./Sections/Cta";
import Gallery from "./Sections/Gallery";
import References from "./Sections/References";
import Pricing from "./Sections/Pricing";
import Contact from "./Sections/Contact";
import Footer from "./Sections/Footer";

const Home = () => {
  return (
    <Fragment>
      <ContactHeader />
      <Header />
      <Hero />
      <About />
      <Services />
      <Cta />
      <Gallery />
      <References />
      <Pricing />
      <Contact />
      <Footer />
    </Fragment>
  );
};

export default Home;