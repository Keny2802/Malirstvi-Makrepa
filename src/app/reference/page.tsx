"use client";

import {
    Fragment
} from "react";
import {
    usePathname
} from "next/navigation";

import ContactHeader from "../Components/ContactHeader";
import Header from "../Components/Header";
import PathLink from "../Components/PathLink";
import References from "../Sections/References";
import Cta from "../Sections/Cta";
import Contact from "../Sections/Contact";
import Footer from "../Sections/Footer";

const Page = () => {
    const pathName = usePathname();
    
    return (
        <Fragment>
            <ContactHeader />
            <Header />
            <PathLink
            rootHref="/"
            rootLink="Domov"
            siteHref={pathName}
            siteLink="Galerie"
            className="p-3 md:p-3.5 lg:p-4 mb-2 md:mb-2.5 lg:mb-3"
            />
            <References />
            <Cta />
            <Contact />
            <Footer />
        </Fragment>
    );
};

export default Page;