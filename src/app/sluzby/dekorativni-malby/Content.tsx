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
import FlexRow from "@/app/Components/FlexRow";
import Img from "@/app/Components/Img";
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
                <FlexCol className="mt-4 md:mt-5 lg:mt-6 justify-center items-center gap-4 md:gap-5 lg:gap-6">
                    <FlexRow className="flex-wrap">
                        {
                            galleryItems.map((cardItem, cardItemIndex) => {
                                return (
                                    <Fragment key={cardItemIndex}>
                                        <Wrapper className="relative group overflow-hidden rounded-2xl cursor-pointer min-w-80 min-h-80 max-w-100 max-h-100 md:w-62.5 md:max-w-75 md:h-62.5 md:max-h-75">
                                            <Img
                                            width={250}
                                            height={250}
                                            src={cardItem.image}
                                            alt={cardItem.heading}
                                            effect={true}
                                            className="min-w-80 min-h-80 max-w-100 max-h-100 md:w-62.5 md:max-w-75 md:h-62.5 md:max-h-75 rounded-2xl object-cover"
                                            />
                                            <FlexCol className="justify-center items-center opacity-100 md:opacity-0 p-2 md:p-3 lg:p-4 absolute inset-0 bg-black/50 text-white md:transition-opacity md:duration-300 md:ease-in-out md:group-hover:opacity-100">
                                                <h3 className="text-2xl md:text-[26px] lg:text-[28px] font-semibold">
                                                    {cardItem.heading}
                                                </h3>
                                                <p className="text-sm md:text-[15px] lg:text-base text-center max-w-3xl">
                                                    {cardItem.desc}
                                                </p>
                                            </FlexCol>
                                        </Wrapper>
                                    </Fragment>
                                );
                            })
                        }
                    </FlexRow>
                </FlexCol>
            </Wrapper>
            <Cta />
            <Contact />
            <Footer />
        </Fragment>
    );
};

export default Content;