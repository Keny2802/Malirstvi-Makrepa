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
        heading: "Koupelna se zdí s červeným umakartovým nástřikem",
        type: "Koupelna",
        image: "/Fotky/Services/nastriky-umakartu/Fotka-1.webp"
    },
    {
        heading: "Koupelna s umakartovými dlaždičkami",
        type: "Koupelna",
        image: "/Fotky/Services/nastriky-umakartu/Fotka-2.webp"
    },
    {
        heading: "Chodba s umakartovou zdí",
        type: "Chodba",
        image: "/Fotky/Services/nastriky-umakartu/Fotka-3.webp"
    },
    {
        heading: "Obývací pokoj s elegantním umakartovým nástřikem",
        type: "Obývací pokoj",
        image: "/Fotky/Services/nastriky-umakartu/Fotka-4.webp"
    },
    {
        heading: "Stěna se Španělskou technologií Gotele",
        type: "Stěna",
        image: "/Fotky/Services/nastriky-umakartu/Fotka-5.webp"
    },
    {
        heading: "Koupelna se žlutým umakartovým nástřikem",
        type: "Koupelna",
        image: "/Fotky/Services/nastriky-umakartu/Fotka-6.webp"
    },
    {
        heading: "Stěna s umakartovým nástřikem",
        type: "Koupelna",
        image: "/Fotky/Services/nastriky-umakartu/Fotka-7.webp"
    },
    {
        heading: "Červená stěna s umakartovým nástřikem se Špenělskou technologií Gotele",
        type: "Koupelna",
        image: "/Fotky/Services/nastriky-umakartu/Fotka-8.webp"
    },
    {
        heading: "Toaleta s umakartovým nástřikem",
        type: "Toaleta",
        image: "/Fotky/Services/nastriky-umakartu/Fotka-9.webp"
    },
    {
        heading: "Stěna s poličkou pro šampóny s červeným nástřikem a se Španělskou technologií Gotele",
        type: "Koupelna",
        image: "/Fotky/Services/nastriky-umakartu/Fotka-10.webp"
    },
];

const galleryTypes = [
    "Vše",
    "Koupelna",
    "Chodba",
    "Obývací pokoj",
    "Stěna",
    "Toaleta",
] as const;

type galleryType = typeof galleryTypes[number];

const Page = () => {
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
            siteLink="Nástřiky umakartů a stěn"
            />
            <Wrapper className="px-5 py-8 md:px-8 md:py-12 lg:px-10 lg:py-14 bg-white shadow-md">
                <PageLabel>
                    Nástřiky umakartů a stěn
                </PageLabel>
                <FlexCol className="justify-center items-center text-center">
                     <Heading>
                        Nástřiky umakartů a stěn podle Vašich představ
                    </Heading>
                    <Subheading>
                        Představte si kdyby malíř pokojů dělal práci jakou si Vy představujete.
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
                                                <h3 className="text-lg md:text-xl lg:text-[22px] text-center font-bold">
                                                    {cardItem.heading}
                                                </h3>
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

export default Page;