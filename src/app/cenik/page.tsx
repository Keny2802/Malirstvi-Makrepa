import {
    Fragment
} from "react";

import ContactHeader from "../Components/ContactHeader";
import Header from "../Components/Header";
import Pricing from "../Sections/Pricing";
import Cta from "../Sections/Cta";
import Contact from "../Sections/Contact";
import Footer from "../Sections/Footer";

const Page = () => {
    return (
        <Fragment>
            <ContactHeader />
            <Header />
            <Pricing />
            <Cta />
            <Contact />
            <Footer />
        </Fragment>
    );
};

export default Page;