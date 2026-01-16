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