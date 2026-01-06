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
        heading: "Hladký nástřik koupelnové stěny v červeném odstínu",
        desc: "Moderní a odolný hladký povrch vhodný do koupelen s vysokou vlhkostí.",
        type: "Koupelna",
        image: "/Fotky/Services/hladke-nastriky/Fotka-1.webp"
    },
    {
        heading: "Bílý hladký nástřik koupelnových dlaždiček",
        desc: "Elegantní sjednocení obkladů bez nutnosti bourání.",
        type: "Koupelna",
        image: "/Fotky/Services/hladke-nastriky/Fotka-2.webp"
    },
    {
        heading: "Hladký nástřik stěny v chodbě",
        desc: "Odolný povrch vhodný do namáhaných průchozích prostor.",
        type: "Chodba",
        image: "/Fotky/Services/hladke-nastriky/Fotka-3.webp"
    },
    {
        heading: "Hladký nástřik stěny v obývacím pokoji",
        desc: "Čistý a moderní vzhled stěn pro příjemnou atmosféru domova.",
        type: "Obývací pokoj",
        image: "/Fotky/Services/hladke-nastriky/Fotka-4.webp"
    },
    {
        heading: "Hladký nástřik koupelnové stěny",
        desc: "Snadno udržovatelný povrch s dlouhou životností.",
        type: "Koupelna",
        image: "/Fotky/Services/hladke-nastriky/Fotka-5.webp"
    },
    {
        heading: "Hladký nástřik koupelnové stěny v červené barvě",
        desc: "Výrazné barevné řešení pro moderní koupelny.",
        type: "Koupelna",
        image: "/Fotky/Services/hladke-nastriky/Fotka-6.webp"
    },
    {
        heading: "Hladký nástřik koupelnové stěny v oranžovo-bílém tónu",
        desc: "Svěží kombinace barev pro světlý a vzdušný prostor.",
        type: "Koupelna",
        image: "/Fotky/Services/hladke-nastriky/Fotka-7.webp"
    },
    {
        heading: "Bílý hladký nástřik koupelnových dlaždiček",
        desc: "Minimalistický vzhled s důrazem na čistotu a jednoduchost.",
        type: "Koupelna",
        image: "/Fotky/Services/hladke-nastriky/Fotka-8.webp"
    },
    {
        heading: "Hladký nástřik koupelnové stěny v červeném odstínu",
        desc: "Odolná povrchová úprava vhodná do vlhkého prostředí.",
        type: "Koupelna",
        image: "/Fotky/Services/hladke-nastriky/Fotka-9.webp"
    },
    {
        heading: "Bílý hladký nástřik koupelnové stěny",
        desc: "Nadčasové řešení, které opticky zvětší prostor.",
        type: "Koupelna",
        image: "/Fotky/Services/hladke-nastriky/Fotka-10.webp"
    },
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
            siteLink="Hladké nástřiky"
            />
            <Wrapper className="px-5 py-8 md:px-8 md:py-12 lg:px-10 lg:py-14 bg-white shadow-md">
                <PageLabel>
                    Hladké nástřiky
                </PageLabel>
                <FlexCol className="justify-center items-center text-center">
                     <Heading>
                        {/* Hladké nástřiky */}
                        Hladké nástřiky stěn a stropů
                    </Heading>
                    <Subheading>
                        {/* Zde se podívejte realizované práce hladkých nástřiků. */}
                        Dokonale rovné a elegantní povrchy bez šmouh, s vysokou odolností a dlouhou životností.
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