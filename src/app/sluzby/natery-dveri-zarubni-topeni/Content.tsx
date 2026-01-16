"use client";

import {
    useState,
    Fragment
} from "react";
import {
    usePathname
} from "next/navigation";
import clsx from "clsx";

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
        heading: "Nátěr zárubní v mateřské školce",
        desc: "Odolný nátěr zárubní.",
        type: "Dveře",
        image: "/Fotky/Services/natery-dveri/Fotka-2.webp"
    },
    {
        heading: "Nátěr zárubní",
        // desc: "Precizní nátěr dveří dodává prostoru svěží a čistý vzhled.",
        type: "Dveře",
        image: "/Fotky/Services/natery-dveri/Fotka-3.webp"
    },
    {
        heading: "Zárubní natřené žlutým nástřikem",
        desc: "Odolný a rovnoměrný nátěr dveří pro dlouhotrvající efekt a krásný vzhled.",
        type: "Dveře",
        image: "/Fotky/Services/natery-dveri/Fotka-4.webp"
    },
    {
        heading: "Příprava zábradlí před nátěrem",
        desc: "Kvalitní nátěr zábradlí, který chrání kov a dodává interiéru moderní vzhled.",
        type: "Zábradlí",
        image: "/Fotky/Services/natery-dveri/Fotka-5.webp"
    },
    {
        heading: "Nátěr zárubní",
        desc: "Kombinace barev pro harmonický a stylový interiér s odolným nátěrem dveří.",
        type: "Dveře",
        image: "/Fotky/Services/natery-dveri/Fotka-6.webp"
    },
    {
        heading: "Domeček s hezkou žlutou fasádou",
        // desc: "Precizní nátěr fasády, který zajišťuje odolnost vůči počasí a atraktivní vzhled.",
        type: "Fasáda",
        image: "/Fotky/Services/natery-dveri/Fotka-7.webp"
    },
    {
        heading: "Příprava dřevěných madel před lakováním",
        // desc: "Kvalitní nátěr zábradlí s dlouhou životností a moderním vzhledem.",
        type: "Zábradlí",
        image: "/Fotky/Services/natery-dveri/Fotka-8.webp"
    },
    {
        heading: "Nátěr ústředního topení",
        // desc: "Rovnoměrný a odolný nátěr topení pro elegantní a čistý vzhled interiéru.",
        type: "Topení",
        image: "/Fotky/Services/natery-dveri/Fotka-9.webp"
    },
    {
        heading: "Renovace radiátoru bílým odstínem",
        // desc: "Hladký nátěr topení, který dodává prostoru upravený a moderní vzhled.",
        type: "Topení",
        image: "/Fotky/Services/natery-dveri/Fotka-10.webp"
    },
    {
        heading: "Nátěr interiérových dveří",
        desc: "Hladký a rovnoměrný nátěr dveří s důrazem na detail, dlouhou životnost a perfektní vzhled.",
        image: "/Fotky/Services/natery-dveri/Fotka-13.webp"
    },
    {
        heading: "Nátěr dveří a barevného soklu",
        desc: "Kompletní nátěr dveří včetně soklu pro sjednocený a čistý vzhled interiéru.",
        image: "/Fotky/Services/natery-dveri/Fotka-14.webp"
    },
    {
        heading: "Obnovovací nátěr zábradlí a dvěřených madel",
        // desc: "Kvalitní nátěr zábradlí zvyšující odolnost povrchu a celkový estetický dojem.",
        desc: "Renovace zábradlí s novým nátěrem a obnova dřevěného zábradlí.",
        image: "/Fotky/Services/natery-dveri/Fotka-11.webp"
    },
    {
        heading: "Detailní nátěr zábradlí",
        desc: "Nátěr zábradlí s důrazem na rovnoměrné krytí a dlouhodobou ochranu materiálu.",
        image: "/Fotky/Services/natery-dveri/Fotka-12.webp"
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
            siteLink="Nátěry dveří, zárubní topení"
            />
            <Wrapper className="px-5 py-8 md:px-8 md:py-12 lg:px-10 lg:py-14 bg-white shadow-md">
                <PageLabel>
                    Nátěry dveří, zárubní topení
                </PageLabel>
                <FlexCol className="justify-center items-center text-center">
                     <Heading>
                        {/* Nátěry dveří, zárubní topení */}
                        {/* Profesionální nátěry dveří, zárubní a topení */}
                        Nové obnovené nátěry
                    </Heading>
                    <Subheading>
                        {/* Zde se podívejte realizované práce nátěrů dveří a zárubního topení. */}
                        Obnovte vzhled svého interiéru s hladkými a odolnými nátěry, které vydrží a dodají prostoru elegantní vzhled.
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