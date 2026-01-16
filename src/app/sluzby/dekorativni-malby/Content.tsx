"use client";

import {
    Fragment
} from "react";
import {
    usePathname
} from "next/navigation";

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

const galleryItems = [
    {
        heading: "Dekorativní malba obývacího pokoje",
        desc: "Stylová dekorativní malba, která dodala obývacímu pokoji jedinečný charakter a moderní vzhled.",
        image: "/Fotky/Services/dekorativni-malby/Fotka-1.webp"
    },
    {
        heading: "Dekorativní stěrka interiéru",
        desc: "Elegantní dekorativní úprava stěn s jemnou strukturou pro nadčasový interiér.",
        image: "/Fotky/Services/dekorativni-malby/Fotka-2.webp"
    },
    {
        heading: "Dekorativní malba s metalickým efektem",
        desc: "Luxusní dekorativní malba s metalickým efektem, která vytváří zajímavou hru světla a stínu.",
        image: "/Fotky/Services/dekorativni-malby/Fotka-3.webp"
    },
    {
        heading: "Moderní dekorativní malba",
        desc: "Moderní dekorativní technika vhodná do současných interiérů s důrazem na detail.",
        image: "/Fotky/Services/dekorativni-malby/Fotka-4.webp"
    },
    {
        heading: "Dekorativní malba stěn",
        desc: "Vkusná dekorativní malba stěn, která oživí prostor a dodá mu osobitý styl.",
        image: "/Fotky/Services/dekorativni-malby/Fotka-6.webp"
    },
    {
        heading: "Dekorativní úprava interiéru",
        desc: "Precizní dekorativní úprava stěn s dlouhou životností a snadnou údržbou.",
        image: "/Fotky/Services/dekorativni-malby/Fotka-7.webp"
    },
    {
        heading: "Designová dekorativní malba",
        desc: "Designová dekorativní malba přizpůsobená požadavkům interiéru i vkusu klienta.",
        image: "/Fotky/Services/dekorativni-malby/Fotka-8.webp"
    },
    {
        heading: "Dekorativní malba interiéru",
        desc: "Dekorativní malba interiéru, která dodává prostoru hloubku a originální vzhled.",
        image: "/Fotky/Services/dekorativni-malby/Fotka-9.webp"
    },
    {
        heading: "Elegantní dekorativní malba",
        desc: "Elegantní dekorativní řešení vhodné do bytů, domů i komerčních prostor.",
        image: "/Fotky/Services/dekorativni-malby/Fotka-10.webp"
    },
    {
        heading: "Dekorativní technika stěn",
        desc: "Dekorativní technika aplikovaná s důrazem na kvalitu, detail a dlouhou životnost.",
        image: "/Fotky/Services/dekorativni-malby/Fotka-11.webp"
    },
    {
        heading: "Luxusní dekorativní malba",
        desc: "Luxusní dekorativní malba pro náročné klienty, kteří hledají originální řešení.",
        image: "/Fotky/Services/dekorativni-malby/Fotka-12.webp"
    }
];

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
            siteLink="Dekorativní malby"
            />
            <Wrapper className="px-5 py-8 md:px-8 md:py-12 lg:px-10 lg:py-14 bg-white shadow-md">
                <PageLabel>
                    Dekorativní malby
                </PageLabel>
                <FlexCol className="justify-center items-center text-center">
                     <Heading>
                        {/* Dekorativní malby */}
                        Dekorativní malby s osobitým stylem
                    </Heading>
                    <Subheading>
                        {/* Zde se podívejte realizované práce dekorativních maleb. */}
                        Originální povrchové úpravy stěn, které dodají vašemu interiéru jedinečný vzhled a atmosféru.
                    </Subheading>
                </FlexCol>
                <Carousel
                carouselSet={galleryItems}
                />
            </Wrapper>
            <Cta />
            <Contact />
            <Footer />
        </Fragment>
    );
};

export default Content;