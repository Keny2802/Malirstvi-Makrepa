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
                        Služby, které poskytujeme našim klientům
                    </Heading>
                    <SubHeading>
                        Podívejte se na všechny naše malířské služby, které poskytujeme
                    </SubHeading>
                </FlexCol>
                <FlexRow className="flex-wrap">
                    {
                        [
                            {
                                image: "/Fotky/Services/Fotka-1.webp",
                                heading: "Malířské práce",
                                desc: "Poskytujeme malířské práce.",
                                href: "/sluzby/malirske-prace"
                            },
                            {
                                image: "/Fotky/Services/Fotka-2.webp",
                                heading: "Nástřiky umakartů a stěn",
                                desc: "Poskytujeme nástřiky umakartů a stěn.",
                                href: "/sluzby/nastriky-umakartu-a-sten"
                            },
                            {
                                image: "/Fotky/Services/Fotka-2.webp",
                                heading: "Dekorativní malby",
                                desc: "Poskytujeme dekorativní malby.",
                                href: "/sluzby/dekorativni-malby"
                            },
                            {
                                image: "/Fotky/Services/Fotka-15.webp",
                                heading: "Španělská technologie Gotele",
                                desc: "Poskytujeme Španělskou technologii gotele.",
                                href: "/sluzby/spanelska-technologie-gotele"
                            },
                            {
                                image: "/Fotky/Services/Fotka-2.webp",
                                heading: "Hladké nástřiky",
                                desc: "Poskytujeme hladké nástřiky.",
                                href: "/sluzby/hladke-nastriky"
                            },
                            {
                                image: "/Fotky/Services/Fotka-3.webp",
                                heading: "Natěry dveří, zárubní topení",
                                desc: "Poskytujeme natěry dveří a dalších podobných služeb.",
                                href: "/sluzby/natery-dveri-zarubni-topeni"
                            },
                            {
                                image: "/Fotky/Hero/Hero.webp",
                                heading: "Malování na klíč",
                                desc: "Poskytujeme malování na klíč, vymalování jakéhokoliv prostoru do detailu, podle Vašeho přání.",
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
                                        className="rounded-2xl object-cover cursor-pointer"
                                        />
                                        <FlexCol className="p-2 md:p-3 lg:p-4 absolute inset-0 justify-center md:justify-evenly items-center text-center text-white">
                                            <Wrapper>
                                                <h3 className="text-2xl md:text-[26px] lg:text-[28px] font-bold">
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
                    className="p-3 md:p-4 lg:p-4.5 flex justify-center items-center gap-2 md:gap-3 lg:gap-4 border border-gray-200 bg-white text-black text-center w-full md:w-75 rounded-md">
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