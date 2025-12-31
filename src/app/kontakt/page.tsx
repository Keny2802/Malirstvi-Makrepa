import {
    Fragment
} from "react";

import Header from "../Components/Header";
import ContactHeader from "../Components/ContactHeader";
import Contact from "../Sections/Contact";
import Cta from "../Sections/Cta";
import Footer from "../Sections/Footer";

const Page = () => {
    return (
        <Fragment>
            <ContactHeader />
            <Header />
            <Contact />
            <Cta />
            <Footer />
        </Fragment>
    );
};

export default Page;