import {
    Fragment
} from "react";

import Header from "../Components/Header";
import ContactHeader from "../Components/ContactHeader";
import Gallery from "../Sections/Gallery";
import Cta from "../Sections/Cta";
import Contact from "../Sections/Contact";
import Footer from "../Sections/Footer";

const Page = () => {
    return (
        <Fragment>
            <ContactHeader />
            <Header />
            <Gallery />
            <Cta />
            <Contact />
            <Footer />
        </Fragment>
    );
};

export default Page;