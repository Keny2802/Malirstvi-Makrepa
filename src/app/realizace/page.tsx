import {
    Fragment
} from "react";

import Header from "../Components/Header";
import ContactHeader from "../Components/ContactHeader";
import Cta from "../Sections/Cta";
import Contact from "../Sections/Contact";
import Footer from "../Sections/Footer";

const Page = () => {
    return (
        <Fragment>
            <ContactHeader />
            <Header />
            <h2>
                Realizace
            </h2>
            <Cta />
            <Contact />
            <Footer />
        </Fragment>
    );
};

export default Page;