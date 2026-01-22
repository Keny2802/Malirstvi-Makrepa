"use client";

import {
    Fragment
} from "react";
import Image from "next/image";
import Link from "next/link";

import Wrapper from "../Components/Wrapper";
import Img from "../Components/Img";
import HeroHeading from "../Components/HeroHeading";
import SubHeading from "../Components/Subheading";
import OverlayWrapper from "../Components/OverlayWrapper";
import FlexCol from "../Components/FlexCol";
import FlexRow from "../Components/FlexRow";
import setLinkWithoutHash from "../Functions/setLinkWithoutHash";
import FixedCta from "../Components/FixedCta";

const Hero = () => {
    return (
        <Fragment>
            <Wrapper
            className="relative section"
            id="uvod">
                <Image
                width={1000}
                height={1000}
                src="/Fotky/Hero/Hero.webp"
                alt="Profesionální malířské práce bez starostí"
                loading="eager"
                draggable={false}
                className="w-full h-screen object-cover"
                />
                <OverlayWrapper>
                    <FlexCol className="justify-center items-center text-white text-center">
                        <HeroHeading>
                            Profesionální malířské práce bez starostí
                            {/* Čisté stěny za 2 dny */}
                            {/* Malíř, který po sobě uklidí */}
                        </HeroHeading>
                        <Wrapper className="mt-2 md:mt-4 lg:mt-6">
                            <SubHeading>
                                Pečlivé malování bytů, domů i komerčních prostor s důrazem na čistotu, kvalitu a dlouhou životnost nátěrů.
                            </SubHeading>
                            <SubHeading>
                                Malujeme rychle, spolehlivě a vždy s individuálním přístupem. Postaráme se o vše - od přípravy prostoru až po úklid po dokončení, abyste se mohli těšit z nového interiéru bez stresu.
                            </SubHeading>
                        </Wrapper>
                        <FlexRow>
                            <Link
                            href="#reference"
                            className="p-3 md:p-4 lg:p-4.5 bg-[#1d4ed8] text-white text-center w-full md:w-75 rounded-md"
                            onClick={(e) => {
                                setLinkWithoutHash(e, "reference");
                            }}>
                                Prohlédnout reference
                            </Link>
                        </FlexRow>
                    </FlexCol>
                </OverlayWrapper>
            </Wrapper>
            <FixedCta />
        </Fragment>
    );
};

export default Hero;