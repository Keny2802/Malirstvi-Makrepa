"use client";

import {
    Fragment
} from "react";
import Image from "next/image";
import Link from "next/link";

import Wrapper from "../Components/Wrapper";
import PageLabel from "../Components/PageLabel";
import Heading from "../Components/Heading";
import SubHeading from "../Components/Subheading";
import FlexCol from "../Components/FlexCol";
import FlexRow from "../Components/FlexRow";
import setLinkWithoutHash from "../Functions/setLinkWithoutHash";
import FixedCta from "../Components/FixedCta";

const Services = () => {
    return (
        <Fragment>
            <Wrapper className="px-5 py-8 md:px-8 md:py-12 lg:px-10 lg:py-14 bg-white shadow-md section">
                <PageLabel>
                    Služby
                </PageLabel>
                <FlexCol className="justify-center items-center text-center">
                    <Heading>
                        Naše služby
                    </Heading>
                    <SubHeading>
                        Kompletní malířské a natěračské práce pro byty, domy i komerční prostory.
                    </SubHeading>
                </FlexCol>
                <FlexRow className="flex-wrap">
                    {
                        [
                            {
                                image: "/Fotky/Services/Fotka-1.webp",
                                heading: "Malířské práce",
                                desc: "Pečlivé malování interiérů s důrazem na kvalitu, čistotu a dlouhou životnost.",
                                href: "/sluzby/malirske-prace"
                            },
                            {
                                image: "/Fotky/Services/nastriky-umakartu/Fotka-1.webp",
                                heading: "Nástřiky umakartu a stěn",
                                desc: "Renovace umakartových jader bez bourání - rychle, čistě a precizně.",
                                href: "/sluzby/nastriky-umakartu-a-sten"
                            },
                            {
                                image: "/Fotky/Services/dekorativni-malby/Fotka-9.webp",
                                heading: "Dekorativní malby",
                                desc: "Originální a stylové malby, které dodají vašim stěnám osobitý vzhled.",
                                href: "/sluzby/dekorativni-malby"
                            },
                            {
                                image: "/Fotky/Services/Fotka-15.webp",
                                heading: "Hrubozrné technologie Gotele",
                                desc: "Moderní technika s elegantní strukturou.",
                                href: "/sluzby/spanelska-technologie-gotele"
                            },
                            // {
                            //     image: "/Fotky/Services/hladke-nastriky/Fotka-4.webp",
                            //     // heading: "Hladké nástřiky",
                            //     heading: "Moderní nástřiky",
                            //     desc: "Precizní hladké nástřiky pro rovnoměrné a elegantní stěny.",
                            //     href: "/sluzby/hladke-nastriky"
                            // },
                            {
                                // image: "/Fotky/Services/Fotka-3.webp",
                                image: "/Fotky/Services/natery-dveri/Fotka-11.webp",
                                heading: "Natěry dveří, zárubní, topení",
                                desc: "Precizní nátěry pro krásný vzhled a dlouhou životnost dveří, zárubní i topení.",
                                href: "/sluzby/natery-dveri-zarubni-topeni"
                            },
                            {
                                image: "/Fotky/Hero/Hero.webp",
                                heading: "Malování na klíč",
                                desc: "Kompletní malířské práce od přípravy až po finální úklid - bez starostí..",
                                href: "/sluzby/malovani-na-klic"
                            },
                        ].map((cardItem, cardItemIndex) => {
                            return (
                                <Fragment key={cardItemIndex}>
                                    <Wrapper className="group relative w-full max-h-75 md:w-100 md:h-75">
                                        <Image
                                        width={350}
                                        height={350}
                                        src={cardItem.image}
                                        alt={`Fotka - ${cardItem.heading}`}
                                        loading="lazy"
                                        decoding="async"
                                        draggable={false}
                                        className="w-full max-h-75 md:w-100 md:h-75 rounded-2xl object-cover bg-black/40 cursor-pointer"
                                        />
                                        <FlexCol className="p-2 md:p-3 lg:p-4 absolute inset-0 justify-center md:justify-evenly items-center text-center text-white">
                                            <Wrapper>
                                                <h3 className="text-2xl md:text-[26px] lg:text-[28px] font-semibold">
                                                    {cardItem.heading}
                                                </h3>
                                                <p className="text-base md:text-[17px] lg:text-lg text-center max-w-3xl">
                                                    {cardItem.desc}
                                                </p>
                                            </Wrapper>
                                            <Link
                                            href={cardItem.href}
                                            className="p-3 md:p-4 lg:p-4.5 bg-[#1d4ed8] text-white text-center w-75 md:w-40 rounded-md">
                                                Detail služby
                                            </Link>
                                        </FlexCol>
                                    </Wrapper>
                                </Fragment>
                            );
                        })
                    }
                </FlexRow>
                <FlexRow>
                    <Link
                    href="/sluzby"
                    className="p-3 md:p-4 lg:p-4.5 border border-gray-200 bg-white text-black text-center w-full md:w-75 rounded-md">
                        Všechny služby
                    </Link>
                    <Link
                    href="#kontakt"
                    className="p-3 md:p-4 lg:p-4.5 bg-[#1d4ed8] text-white text-center w-full md:w-75 rounded-md"
                    onClick={(e) => {
                        setLinkWithoutHash(e, "kontakt");
                    }}>
                        Kontaktujte nás
                    </Link>
                </FlexRow>
            </Wrapper>
            <FixedCta />
        </Fragment>
    );
};

export default Services;