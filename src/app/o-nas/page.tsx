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
import About from "../Sections/About";
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
            siteLink="O nás"
            />
            <About />
            <Cta />
            <Contact />
            <Footer />
        </Fragment>
    );
};

export default Page;