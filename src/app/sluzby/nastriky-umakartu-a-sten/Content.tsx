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
        heading: "Umakartová koupelna v červeném odstínu",
        desc: "Výrazný červený nástřik umakartu dodává koupelně moderní a svěží vzhled.",
        type: "Koupelna",
        image: "/Fotky/Services/nastriky-umakartu/Fotka-1.webp"
    },
    {
        heading: "Koupelna s umakartovými obklady",
        desc: "Obnovené umakartové dlaždičky pomocí nástřiku pro čistý a jednotný vzhled.",
        type: "Koupelna",
        image: "/Fotky/Services/nastriky-umakartu/Fotka-2.webp"
    },
    {
        heading: "Chodba s umakartovou stěnou",
        desc: "Praktická a odolná úprava umakartové stěny v chodbě bytového domu.",
        type: "Chodba",
        image: "/Fotky/Services/nastriky-umakartu/Fotka-3.webp"
    },
    // {
    //     heading: "Obývací pokoj s umakartovým nástřikem",
    //     desc: "Elegantní povrchová úprava stěn pro moderní a čistý interiér.",
    //     type: "Obývací pokoj",
    //     image: "/Fotky/Services/nastriky-umakartu/Fotka-4.webp"
    // },
    // {
    //     heading: "Stěna se španělskou technologií Gotele",
    //     desc: "Dekorativní struktura Gotele vytváří zajímavý a odolný povrch stěny.",
    //     type: "Stěna",
    //     image: "/Fotky/Services/nastriky-umakartu/Fotka-5.webp"
    // },
    {
        heading: "Koupelna se žlutým umakartovým nástřikem",
        desc: "Světlý žlutý odstín oživuje koupelnu a dodává jí příjemnou atmosféru.",
        type: "Koupelna",
        image: "/Fotky/Services/nastriky-umakartu/Fotka-6.webp"
    },
    {
        heading: "Umakartová stěna v koupelně",
        desc: "Hladký nástřik umakartu pro snadnou údržbu a moderní vzhled.",
        type: "Koupelna",
        image: "/Fotky/Services/nastriky-umakartu/Fotka-7.webp"
    },
    {
        heading: "Červený umakart se strukturou Gotele",
        desc: "Kombinace výrazné barvy a španělské technologie Gotele pro originální vzhled.",
        type: "Koupelna",
        image: "/Fotky/Services/nastriky-umakartu/Fotka-8.webp"
    },
    {
        heading: "Toaleta s umakartovým nástřikem",
        desc: "Rychlá a čistá obnova toalety bez nutnosti náročné rekonstrukce.",
        type: "Toaleta",
        image: "/Fotky/Services/nastriky-umakartu/Fotka-9.webp"
    },
    {
        heading: "Umakartová stěna s poličkou a Gotele",
        desc: "Praktické řešení stěny s poličkou na šampony a dekorativní strukturou.",
        type: "Koupelna",
        image: "/Fotky/Services/nastriky-umakartu/Fotka-10.webp"
    },
    {
        heading: "Oranžový nástřik umakartového jádra",
        desc: "Moderní nástřik umakartového jádra v oranžovém odstínu pro svěží a čistý vzhled koupelny.",
        type: "Koupelna",
        image: "/Fotky/Services/nastriky-umakartu/Fotka-11.webp"
    },
    {
        heading: "Fialový nástřik umakartového jádra",
        desc: "Elegantní nástřik umakartového jádra ve fialové barvě, který dodá koupelně osobitý styl.",
        type: "Koupelna",
        image: "/Fotky/Services/nastriky-umakartu/Fotka-12.webp"
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
            siteLink="Nástřiky umakartu a stěn"
            />
            <Wrapper className="px-5 py-8 md:px-8 md:py-12 lg:px-10 lg:py-14 bg-white shadow-md">
                <PageLabel>
                    Nástřiky umakartu a stěn
                </PageLabel>
                <FlexCol className="justify-center items-center text-center">
                     <Heading>
                        {/* Nástřiky umakartu a stěn podle Vašich představ */}
                        Nástřiky umakartů a stěn bez bourání
                    </Heading>
                    <Subheading>
                        {/* Představte si kdyby malíř pokojů dělal práci jakou si Vy představujete. */}
                        Rychlá a čistá obnova umakartových jader a stěn pomocí profesionálního nástřiku. Moderní vzhled, dlouhá životnost a minimum nepořádku.
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