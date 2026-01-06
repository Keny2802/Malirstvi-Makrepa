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
        // heading: "Pokoj v tmavě modrých tónech",
        desc: "Elegantní malba v teplé tmavě modré barvě, která dodává místnosti klid a moderní vzhled.",
        type: "Pokoj",
        image: "/Fotky/Services/malirske-prace/Fotka-1.webp"
    },
    {
        // heading: "Pokoj v přírodní zelené barvě",
        desc: "Jemná zelená malba vytváří harmonické a uklidňující prostředí pro každodenní bydlení.",
        type: "Pokoj",
        image: "/Fotky/Services/malirske-prace/Fotka-2.webp"
    },
    {
        heading: "Útulný obývací pokoj po malování",
        desc: "Precizně vymalovaný obývací pokoj s důrazem na čisté linie a rovnoměrné krytí.",
        type: "Obývací pokoj",
        image: "/Fotky/Services/malirske-prace/Fotka-3.webp"
    },
    {
        heading: "Chodba v bytovém domě",
        desc: "Čisté a poctivě provedené malířské práce v chodbě bytového domu bez zbytečného nepořádku.",
        type: "Chodba",
        image: "/Fotky/Services/malirske-prace/Fotka-4.webp"
    },
    {
        // heading: "Moderní obývací pokoj v červené barvě",
        desc: "Výrazná červená malba dodává prostoru energii a moderní charakter.",
        type: "Obývací pokoj",
        image: "/Fotky/Services/malirske-prace/Fotka-5.webp"
    },
    {
        heading: "Mateřská škola po kompletním vymalování",
        desc: "Bezpečné a svěží barvy vhodné pro dětské prostory s důrazem na kvalitu a hygienu.",
        type: "Prostor",
        image: "/Fotky/Services/malirske-prace/Fotka-6.webp"
    },
    {
        heading: "Obývací pokoj v červených tónech",
        // desc: "Precizní malířské práce s rovnoměrným nátěrem a sytým odstínem barvy.",
        type: "Obývací pokoj",
        image: "/Fotky/Services/malirske-prace/Fotka-7.webp"
    },
    {
        // heading: "Obývací pokoj v jemné růžové barvě",
        desc: "Útulné a světlé řešení obývacího pokoje s jemným barevným laděním.",
        type: "Obývací pokoj",
        image: "/Fotky/Services/malirske-prace/Fotka-8.webp"
    },
    {
        heading: "Chodba po vymalování",
        desc: "Důkladně připravené stěny a kvalitní malba s dlouhou životností.",
        type: "Chodba",
        image: "/Fotky/Services/malirske-prace/Fotka-9.webp"
    },
    {
        // heading: "Obývací pokoj s krbem",
        desc: "Vymalovaný obývací pokoj s dominantním krbem a čistým, elegantním provedením.",
        type: "Obývací pokoj",
        image: "/Fotky/Services/malirske-prace/Fotka-10.webp"
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
                                            alt={cardItem.heading || "Ukázka realizace malířský prací Malířství Makrepa Josef Krejčiřík"}
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