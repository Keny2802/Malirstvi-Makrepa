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
        heading: "Zelený odstín Gotele",
        desc: "Svěží zelený tón španělské technologie Gotele, který dodá prostoru klid a přírodní charakter.",
        type: "Gotele",
        image: "/Fotky/Services/vzornik-gotele/Fotka-1.webp"
    },
    {
        heading: "Oranžový odstín Gotele",
        desc: "Výrazná oranžová varianta Gotele pro moderní a energický interiér.",
        type: "Gotele",
        image: "/Fotky/Services/vzornik-gotele/Fotka-2.webp"
    },
    {
        heading: "Světle modro-bílý odstín Gotele",
        desc: "Jemná kombinace modré a bílé vytváří čistý a vzdušný vzhled stěn.",
        type: "Gotele",
        image: "/Fotky/Services/vzornik-gotele/Fotka-3.webp"
    },
    {
        heading: "Žluto-bílý odstín Gotele",
        desc: "Teplé tóny žluté v kombinaci s bílou rozjasní každý interiér.",
        type: "Gotele",
        image: "/Fotky/Services/vzornik-gotele/Fotka-4.webp"
    },
    {
        heading: "Šedo-bílý odstín Gotele",
        desc: "Elegantní a nadčasová kombinace vhodná do moderních prostor.",
        type: "Gotele",
        image: "/Fotky/Services/vzornik-gotele/Fotka-5.webp"
    },
    {
        heading: "Světlý žluto-bílý odstín Gotele",
        desc: "Jemnější varianta žluto-bílé struktury pro decentní vzhled stěn.",
        type: "Gotele",
        image: "/Fotky/Services/vzornik-gotele/Fotka-6.webp"
    },
    {
        heading: "Fialovo-bílý odstín Gotele",
        desc: "Stylová kombinace barev pro originální a osobitý interiér.",
        type: "Gotele",
        image: "/Fotky/Services/vzornik-gotele/Fotka-7.webp"
    },
    {
        heading: "Světlý bílý odstín Gotele",
        desc: "Minimalistické a čisté řešení s jemnou strukturou Gotele.",
        type: "Gotele",
        image: "/Fotky/Services/vzornik-gotele/Fotka-8.webp"
    },
    {
        heading: "Hnědo-bílý odstín Gotele",
        desc: "Přírodní hnědé tóny v kombinaci s bílou pro útulný vzhled interiéru.",
        type: "Gotele",
        image: "/Fotky/Services/vzornik-gotele/Fotka-9.webp"
    },
    {
        heading: "Tmavě hnědo-bílý odstín Gotele",
        desc: "Výraznější struktura a barva pro luxusní a reprezentativní prostory.",
        type: "Gotele",
        image: "/Fotky/Services/vzornik-gotele/Fotka-10.webp"
    },
];

const galleryTypes = [
    "Vše",
    "Gotele"
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
            siteLink="Španělská technologie Gotele"
            />
            <Wrapper className="px-5 py-8 md:px-8 md:py-12 lg:px-10 lg:py-14 bg-white shadow-md">
                <PageLabel>
                    Španělská technologie Gotele
                </PageLabel>
                <FlexCol className="justify-center items-center text-center">
                     <Heading>
                        {/* Vzorník Gotele */}
                        Španělská technologie Gotele
                    </Heading>
                    <Subheading>
                        {/* Zde se podívejte na vzorník Španělské technologie Gotele. */}
                        Moderní strukturované stěny s dlouhou životností, vysokou odolností a elegantním vzhledem pro každý interiér.
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