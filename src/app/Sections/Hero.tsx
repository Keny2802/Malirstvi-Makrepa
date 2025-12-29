"use client";

import {
    useEffect,
    useState,
    Fragment
} from "react";
import {
    CalculatorIcon,
    ChevronDoubleUpIcon,
    DevicePhoneMobileIcon
} from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

import Wrapper from "../Components/Wrapper";
import setLinkWithoutHash from "../Functions/setLinkWithoutHash";

const Hero = () => {
    const [isWindowScrolled, setWindowScrolled] = useState<boolean>(false);

    useEffect(() => {
        const setWindowToScrolled = () => {
            if (window.scrollY > 10) {
                setWindowScrolled(true);
            } else {
                setWindowScrolled(false);
            };
        };

        window.addEventListener("scroll", setWindowToScrolled);

        return () => {
            window.removeEventListener("scroll", setWindowToScrolled);
        };
    }, []);

    return (
        <Fragment>
            <Wrapper
            className="relative section"
            id="domu">
                <Image
                width={1000}
                height={1000}
                src="/Fotky/Hero/Hero.jpg"
                alt="Profesionální malířské práce bez starostí"
                loading="eager"
                decoding="async"
                draggable={false}
                className="w-full h-screen object-cover"
                />
                <Wrapper className="p-2 md:p-3 lg:p-4 absolute inset-0 flex justify-center items-center flex-col gap-2 md:gap-2.5 lg:gap-3 text-white text-center">
                    <h1 className="text-[32px] md:text-6xl lg:text-8xl font-extrabold md:max-w-7xl">
                        Profesionální malířské práce bez starostí
                    </h1>
                    <p className="text-base md:text-[17px] lg:text-lg md:max-w-4xl">
                        Pečlivé malování bytů, domů i komerčních prostor s důrazem na čistotu, kvalitu a dlouhou životnost nátěrů.
                    </p>
                    <p className="text-base md:text-[17px] lg:text-lg md:max-w-4xl">
                        Malujeme rychle, spolehlivě a vždy s individuálním přístupem. Postaráme se o vše - od přípravy prostoru až po úklid po dokončení, abyste se mohli těšit z nového interiéru bez stresu.
                    </p>
                    <Wrapper className="flex justify-center items-center flex-col md:flex-row gap-3 w-full max-w-xl">
                        <Link
                        href="#kalkulace"
                        className="px-4 py-3 md:px-6 md:py-4 flex justify-center items-center gap-2 md:gap-3 lg:gap-4 bg-white text-black text-center w-full md:w-75 rounded-md"
                        onClick={(e) => {
                            setLinkWithoutHash(e, "kalkulace");
                        }}>
                            <CalculatorIcon className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 cursor-pointer" />
                            Nezávazná kalkulace
                        </Link>
                        <Link
                        href="#realizace"
                        className="px-4 py-3 md:px-6 md:py-4 bg-[#1d4ed8] text-white text-center w-full md:w-75 rounded-md"
                        onClick={(e) => {
                            setLinkWithoutHash(e, "realizace");
                        }}>
                            Prohlédnout realizace
                        </Link>
                    </Wrapper>
                </Wrapper>
            </Wrapper>
            <Wrapper className="z-100 fixed right-5 bottom-6 flex items-center flex-col gap-2 md:gap-3 lg:gap-4">
                {
                    isWindowScrolled && (
                        <Fragment>
                            <Link
                            href="#hero"
                            className="p-2 md:p-3 lg:p-4 bg-[#1e1e1e] text-white rounded-full"
                            onClick={(e) => {
                                setLinkWithoutHash(e, "contact-header");
                            }}>
                                <ChevronDoubleUpIcon className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                            </Link>
                        </Fragment>
                    )
                }
                <Link
                href="tel:+420608751721"
                className="p-2 md:p-3 lg:p-4 bg-white text-black rounded-full transition-colors ease-in-out duration-300 hover:bg-[#1d4ed8] hover:text-white">
                    <DevicePhoneMobileIcon className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                </Link>
            </Wrapper>
        </Fragment>
    );
};

export default Hero;