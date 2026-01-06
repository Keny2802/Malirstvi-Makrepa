"use client";

import {
    Fragment
} from "react";
import {
    usePathname
} from "next/navigation";
import Image from "next/image";

import ContactHeader from "@/app/Components/ContactHeader";
import Header from "@/app/Components/Header";
import PathLink from "@/app/Components/PathLink";
import Wrapper from "@/app/Components/Wrapper";
import PageLabel from "@/app/Components/PageLabel";
import FlexCol from "@/app/Components/FlexCol";
import FlexRow from "@/app/Components/FlexRow";
import Heading from "@/app/Components/Heading";
import Subheading from "@/app/Components/Subheading";
import Cta from "@/app/Sections/Cta";
import Contact from "@/app/Sections/Contact";
import Footer from "@/app/Sections/Footer";

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
            siteLink="Malování na klíč"
            />
            <Wrapper className="px-5 py-8 md:px-8 md:py-12 lg:px-10 lg:py-14 bg-white shadow-md">
                <PageLabel>
                    Malování na klíč
                </PageLabel>
                <FlexCol className="justify-center items-center text-center">
                     <Heading>
                        Malování na klíč
                    </Heading>
                    <Subheading>
                        Klient nám předá klíče a o nic se už nemusí starat, jen už stačí přijít a nechat se překvapit.
                    </Subheading>
                </FlexCol>
                <FlexCol className="mt-4 md:mt-5 lg:mt-6 justify-center items-center gap-4 md:gap-5 lg:gap-6">
                    <Image
                    width={1000}
                    height={1000}
                    src="/Fotky/Hero/Hero.webp"
                    alt="Klient nám předá klíče a o nic se už nemusí starat, jen už stačí přijít a nechat se překvapit."
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                    className="rounded-2xl"
                    />
                </FlexCol>
                <FlexCol className="mt-4 md:mt-6 lg:mt-8">
                    <Heading>
                        Jak to probíhá?
                    </Heading>
                    <FlexRow className="flex-wrap">
                        {
                            [
                                {
                                    heading: "Klient nám předá klíče",
                                    subheading: "Klient pokud potřebuje, může odejít a o nic se nemusí starat."
                                },
                                {
                                    heading: "Malíří se připraví na domluvené malování",
                                    subheading: "Malíři přikryjí nábytek a vše, co by se mohlo malováním ušpinit."
                                },
                                {
                                    heading: "Malíři se pouštějí do práce",
                                    subheading: "Nejdříve se opraví a zarovnají stěny, pro možnost začátku realizace malování."
                                },
                                {
                                    heading: "Malíři jdou vymalovat",
                                    subheading: "Po opravě stěn se může vymalování prostoru provést."
                                },
                                {
                                    heading: "Hotovo, klient přijde",
                                    subheading: "Až klient přijde, je hotovo a může se jen kochat krásou výsledku."
                                }
                            ].map((cardItem, cardItemIndex) => {
                                return (
                                    <Fragment key={cardItemIndex}>
                                        <FlexCol className="justify-center items-center">
                                            <Wrapper className="p-3 md:p-4 lg:p-4.5 bg-white shadow-md rounded-3xl w-full">
                                                <FlexRow>
                                                    <span className="inline-flex justify-center items-center text-lg md:text-xl lg:text-2xl font-black bg-[#1d4ed8] text-white w-10 h-10 rounded-full">
                                                        {cardItemIndex + 1}
                                                    </span>
                                                    <h3 className="text-2xl md:text-[26px] lg:text-[28px] font-bold">
                                                        {cardItem.heading}
                                                    </h3>
                                                </FlexRow>
                                            <p className="text-[15px] md:text-base text-center max-w-150">
                                                {cardItem.subheading}
                                            </p>
                                            </Wrapper>
                                        </FlexCol>
                                    </Fragment>
                                )
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