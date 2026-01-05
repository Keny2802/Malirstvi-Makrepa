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
        heading: "Elegantně natřené bílé topení",
        desc: "Hladký a odolný nátěr topení, který dodá interiéru čistý a upravený vzhled.",
        type: "Topení",
        image: "/Fotky/Hero/Hero.webp"
    },
    {
        heading: "Žlutě natřené dveře v mateřské školce",
        desc: "Odolný nátěr dveří v jasné žluté barvě pro hravé a bezpečné prostředí dětí.",
        type: "Dveře",
        image: "/Fotky/Services/natery-dveri/Fotka-2.webp"
    },
    {
        heading: "Dveře s živou žlutou barvou",
        desc: "Precizní nátěr dveří dodává prostoru svěží a čistý vzhled.",
        type: "Dveře",
        image: "/Fotky/Services/natery-dveri/Fotka-3.webp"
    },
    {
        heading: "Dveře natřené žlutým nástřikem",
        desc: "Odolný a rovnoměrný nátěr dveří pro dlouhotrvající efekt a krásný vzhled.",
        type: "Dveře",
        image: "/Fotky/Services/natery-dveri/Fotka-4.webp"
    },
    {
        heading: "Natřené zábradlí v bytovém domě",
        desc: "Kvalitní nátěr zábradlí, který chrání kov a dodává interiéru moderní vzhled.",
        type: "Zábradlí",
        image: "/Fotky/Services/natery-dveri/Fotka-5.webp"
    },
    {
        heading: "Žlutě natřené dveře v místnosti s růžovými stěnami",
        desc: "Kombinace barev pro harmonický a stylový interiér s odolným nátěrem dveří.",
        type: "Dveře",
        image: "/Fotky/Services/natery-dveri/Fotka-6.webp"
    },
    {
        heading: "Domeček s hezkou žlutou fasádou",
        desc: "Precizní nátěr fasády, který zajišťuje odolnost vůči počasí a atraktivní vzhled.",
        type: "Fasáda",
        image: "/Fotky/Services/natery-dveri/Fotka-7.webp"
    },
    {
        heading: "Čerstvě natřené zábradlí v bytovém domě",
        desc: "Kvalitní nátěr zábradlí s dlouhou životností a moderním vzhledem.",
        type: "Zábradlí",
        image: "/Fotky/Services/natery-dveri/Fotka-8.webp"
    },
    {
        heading: "Bílo hladký nátěr ústředního topení",
        desc: "Rovnoměrný a odolný nátěr topení pro elegantní a čistý vzhled interiéru.",
        type: "Topení",
        image: "/Fotky/Services/natery-dveri/Fotka-9.webp"
    },
    {
        heading: "Čerstvě natřené bílé topení",
        desc: "Hladký nátěr topení, který dodává prostoru upravený a moderní vzhled.",
        type: "Topení",
        image: "/Fotky/Services/natery-dveri/Fotka-10.webp"
    },
];

const galleryTypes = [
    "Vše",
    "Topení",
    "Dveře",
    "Zábradlí",
    "Fasáda",
] as const;

type galleryType = typeof galleryTypes[number];

const Content = () => {
    const pathName = usePathname();
    const [activeGalleryTab, setActiveGalleryTab] = useState<galleryType>(galleryTypes[0]);
    const filteredGallery = activeGalleryTab === "Vše"
    ? galleryItems
    : galleryItems.filter(
        (galleryItem) => galleryItem.type === activeGalleryTab
    );

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
                        Profesionální nátěry dveří, zárubní a topení
                    </Heading>
                    <Subheading>
                        {/* Zde se podívejte realizované práce nátěrů dveří a zárubního topení. */}
                        Obnovte vzhled svého interiéru s hladkými a odolnými nátěry, které vydrží a dodají prostoru elegantní vzhled.
                    </Subheading>
                </FlexCol>
                <FlexCol className="mt-4 md:mt-5 lg:mt-6 justify-center items-center gap-4 md:gap-5 lg:gap-6">
                    <Wrapper className="flex justify-center items-center flex-wrap gap-4 md:gap-5 lg:gap-6">
                        {
                            galleryTypes.map((galleryType, galleryTypeIndex) => {
                                return (
                                    <Fragment key={galleryTypeIndex}>
                                        <button
                                        className={clsx(`${activeGalleryTab === galleryType ? "border border-[#1d4ed8] bg-[#1d4ed8] text-white" : "border border-gray-200 bg-white text-black hover:bg-[#1d4ed8] hover:text-white"} p-2 md:p-2.5 lg:p-3 rounded-md cursor-pointer transition-colors duration-300 ease-in-out`)}
                                        onClick={(e) => {
                                            setActiveGalleryTab(galleryType);
                                        }}>
                                            {galleryType}
                                        </button>
                                    </Fragment>
                                );
                            })
                        }
                    </Wrapper>
                    <FlexRow className="flex-wrap">
                        {
                            filteredGallery.map((cardItem, cardItemIndex) => {
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