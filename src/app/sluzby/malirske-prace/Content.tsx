"use client";

import {
    Fragment
} from "react";
import {
    usePathname
} from "next/navigation";
import {
    GalleryItems
} from "./GalleryItems";

import ContactHeader from "@/app/Components/ContactHeader";
import Header from "@/app/Components/Header";
import PathLink from "@/app/Components/PathLink";
import Wrapper from "@/app/Components/Wrapper";
import PageLabel from "@/app/Components/PageLabel";
import FlexCol from "@/app/Components/FlexCol";
import Carousel from "@/app/Components/Carousel";
import Heading from "@/app/Components/Heading";
import Subheading from "@/app/Components/Subheading";
import Cta from "@/app/Sections/Cta";
import Contact from "@/app/Sections/Contact";
import Footer from "@/app/Sections/Footer";



const Content = () => {
    const pathName = usePathname();
    return (
        <Fragment>
            <ContactHeader />
            <Header />
            <PathLink
            rootHref="/"
            rootLink="Domov"
            folderHref="/sluzby"
            folderLink="Služby"
            siteHref={pathName}
            siteLink="Malířské práce"
            />
            <Wrapper className="px-5 py-8 md:px-8 md:py-12 lg:px-10 lg:py-14 bg-white shadow-md">
                <PageLabel>
                    Malířské práce
                </PageLabel>
                <FlexCol className="justify-center items-center text-center">
                     <Heading>
                        {/* Kvalitní malířské práce */}
                        Malířské práce na klíč
                    </Heading>
                    <Subheading>
                        {/* Podívejte se na naše již realizované kvalitní a zodpovědné malířské práce. */}
                        Kvalitní malování bytů, domů i komerčních prostor s důrazem na čistotu, detail a dlouhou životnost.
                    </Subheading>
                </FlexCol>
                <Carousel
                carouselSet={GalleryItems}
                />
            </Wrapper>
            <Cta />
            <Contact />
            <Footer />
        </Fragment>
    );
};

export default Content;