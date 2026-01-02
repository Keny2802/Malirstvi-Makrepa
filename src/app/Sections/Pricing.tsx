import {
    Fragment
} from "react";
import {
    DevicePhoneMobileIcon
} from "@heroicons/react/24/solid";
import Image from "next/image";

import Wrapper from "../Components/Wrapper";
import Heading from "../Components/Heading";
import SubHeading from "../Components/Subheading";
import FlexRow from "../Components/FlexRow";
import PhoneLink from "../Components/PhoneLink";
import Icon from "../Components/Icon";

const Pricing = () => {
    return (
        <Fragment>
            <Wrapper className="px-5 py-8 md:px-8 md:py-12 lg:px-10 lg:py-14 bg-white shadow-md section">
                <Wrapper className="flex justify-center items-center flex-col gap-1.5 md:gap-2 lg:gap-2.5">
                    <Heading>
                        Férové ceny za ještě férovější malířské služby
                    </Heading>
                    <SubHeading>
                        {/* Malujeme s barvami značek PRIMALEX, HET, JUPOL, DULUX */}
                        {/* Naše ceny jsou férové a výhodné. */}
                        Prohlédněte si náš ceník.
                    </SubHeading>
                </Wrapper>
                <FlexRow>
                    <Wrapper>
                        <Image
                        width={800}
                        height={800}
                        src="/Fotky/Gallery/Fotka-10.webp"
                        alt="Prohlédněte si náš ceník našich malířských služeb"
                        loading="lazy"
                        decoding="async"
                        draggable={false}
                        className="rounded-2xl"
                        />
                        <PhoneLink
                        className="mt-4 md:mt-5 lg:mt-6 p-3 md:p-4 lg:p-4.5 bg-[#1d4ed8] text-white text-center w-full rounded-md "
                        yes={false}>
                            <Icon>
                                <DevicePhoneMobileIcon />
                            </Icon>
                            Zjistit detaily ceníku
                        </PhoneLink>
                    </Wrapper>
                    <Wrapper className="p-4 md:p-5 lg:p-6 rounded-xl bg-white shadow-lg w-full md:max-w-150">
                        <Wrapper className="flex justify-between items-center gap-2 md:gap-2 5 lg:gap-3 w-full md:max-w-150">
                            <Wrapper className="flex flex-col gap-2 md:gap-2 5 lg:gap-3">
                            {
                                [
                                    "Bílá barva",
                                    "Tónovaná barva",
                                    "Latexová barva",
                                    "Omyvatelná, akrylová barva",
                                    "Dekorační barvy",
                                    // "Izolační nátěry - izolace skvrn od nikotinu a vody",
                                    "Izolační nátěry",
                                    "Penetrační nátěry",
                                    "Protiplísňové nátěry",
                                    "Škrábání starých maleb",
                                    "Odstranění tapet",
                                    "Mydlení",
                                ].map((priceHeading, priceHeadingIndex) => {
                                    return (
                                        <Fragment key={priceHeadingIndex}>
                                            <p className="p-0.5 md:p-1 lg:p-1.5 text-[15px] md:text-base lg:text-[17px] border-b border-gray-200">
                                                {priceHeading}
                                            </p>
                                        </Fragment>
                                    );
                                })
                            }
                        </Wrapper>
                        <Wrapper className="flex flex-col gap-2 md:gap-2 5 lg:gap-3">
                            {
                                [
                                    "od 27 Kč / m²",
                                    "od 39 Kč / m²",
                                    "od 45 Kč / m²",
                                    "od 55 Kč / m²",
                                    "od 80 Kč / m²",
                                    "od 25 Kč / m²",
                                    "od 15 Kč / m²",
                                    "od 25 Kč / m²",
                                    "od 20 Kč / m²",
                                    "od 20 Kč / m²",
                                    "od 19 Kč / m²"
                                ].map((price, priceIndex) => {
                                    return (
                                        <Fragment key={priceIndex}>
                                            <p className="p-0.5 md:p-1 lg:p-1.5 text-[15px] md:text-base lg:text-[17px] border-b border-gray-200">
                                                {price}
                                            </p>
                                        </Fragment>
                                    );
                                })
                            }
                        </Wrapper>
                        </Wrapper>
                        <p className="mt-2 md:mt-3 lg:mt-4 text-sm md:text-[14.5px] lg:text-[15px] text-start md:text-center w-full md:max-w-75">
                            Ceník je pouze orientační, po podrobnější konzultaci sdělíme konkrétní ceny.
                        </p>
                    </Wrapper>
                </FlexRow>
            </Wrapper>
        </Fragment>
    );
};

export default Pricing;