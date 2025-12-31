"use client";

import {
    Fragment
} from "react";
import Image from "next/image";
import Link from "next/link";

import Wrapper from "../Components/Wrapper";
import setLinkWithoutHash from "../Functions/setLinkWithoutHash";

const Services = () => {
    return (
        <Fragment>
            <Wrapper className="px-5 py-8 md:px-8 md:py-12 lg:px-10 lg:py-14 border-t border-gray-200 bg-white shadow-md section">
                <Wrapper className="flex justify-center items-center flex-col gap-1.5 md:gap-2 lg:gap-2.5 text-center">
                    <h2 className="text-3xl md:text-[42px] lg:text-5xl font-extrabold">
                        Služby, které poskytujeme našim klientům
                    </h2>
                    <p className="text-base md:text-[17px] lg:text-lg text-center max-w-3xl">
                        Podívejte se na všechny naše malířské služby, které poskytujeme
                    </p>
                </Wrapper>
                <Wrapper className="mt-4 md:mt-5 lg:mt-6 flex justify-center items-center flex-col md:flex-row gap-4 md:gap-5 lg:gap-6">
                    {
                        [
                            {
                                image: "/Fotky/Services/Fotka-1.jpg",
                                heading: "Malířské práce",
                                desc: "Poskytujeme malířské práce.",
                                href: "/sluzby/malirske-prace"
                            },
                            {
                                image: "/Fotky/Services/Fotka-2.jpg",
                                heading: "Nástřiky umakartů a stěn",
                                desc: "Poskytujeme nástřiky umakartů a stěn.",
                                href: "/sluzby/nastriky-umakartu-a-sten"
                            },
                            {
                                image: "/Fotky/Services/Fotka-3.jpg",
                                heading: "Natěry dveří, zárubní topení",
                                desc: "Poskytujeme natěry dveří a dalších podobných služeb.",
                                href: "/sluzby/natery-dveri-zarubni-topeni"
                            },
                            {
                                image: "/Fotky/Hero/Hero.jpg",
                                heading: "Malování na klíč",
                                desc: "Poskytujeme malování na klíč, vymalování jakéhokoliv prostoru do detailu, podle Vašeho přání.",
                                href: "/sluzby/malovani-na-klic"
                            },
                        ].map((cardItem, cardItemIndex) => {
                            return (
                                <Fragment key={cardItemIndex}>
                                    <Wrapper className="relative w-full max-h-75 md:w-100 md:h-75">
                                        <Image
                                        width={350}
                                        height={350}
                                        src={cardItem.image}
                                        alt={`Fotka - ${cardItem.heading}`}
                                        loading="lazy"
                                        decoding="async"
                                        draggable={false}
                                        className="w-full max-h-75 md:w-100 md:h-75 rounded-2xl object-cover"
                                        />
                                        <Wrapper className="p-2 md:p-3 lg:p-4 absolute inset-0 flex justify-center md:justify-evenly items-center flex-col gap-2 md:gap-4 lg:gap-6 text-center text-white">
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
                                        </Wrapper>
                                    </Wrapper>
                                </Fragment>
                            );
                        })
                    }
                </Wrapper>
                <Wrapper className="mt-4 md:mt-6 lg:mt-8 flex justify-center items-center flex-col md:flex-row gap-3">
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
                </Wrapper>
            </Wrapper>
        </Fragment>
    );
};

export default Services;