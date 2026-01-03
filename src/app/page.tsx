import {
  Fragment
} from "react";
import {
  Metadata
} from "next";

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

export const metadata:Metadata = {
  title: "Malířské práce - Profesionální malování bytů a domů | Malířství Makrepa",
  // description: "Profesionální malířské práce - malování bytů, domů i komerčních prostor. Precizní provedení, čistá práce, férové ceny. Působíme v Ostravě a 50 km okolí",
  description: "Malířské práce v Ostravě a okolí. Malování bytů, domů i firemních prostor. Čistá a precizní práce, férové ceny. Malířství Makrepa.",
  keywords: [
    "malířské práce Ostrava",
    "malíř Ostrava",
    "malování bytů Ostrava",
    "malování domů Ostrava",
    "malování interiérů",
    "výmalba bytu Ostrava",
    "malířství Makrepa"
  ],
  openGraph: {
    title: "Malířské práce Ostrava | Malířství Makrepa",
    description:
      "Profesionální malířské práce v Ostravě. Malování bytů, domů i komerčních prostor. Nezávazná cenová nabídka zdarma.",
    url: "https://malirstvi-ostrava.cz.cz",
    siteName: "Malířství Makrepa",
    images: [
      {
        url: "/Fotky/Gallery/Fotka-22.webp",
        width: 1200,
        height: 630,
        alt: "Malířské práce Ostrava - Malířství Makrepa"
      }
    ],
    locale: "cs_CZ",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

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