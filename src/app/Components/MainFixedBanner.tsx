"use client";

import {
    useState,
    useEffect,
    Fragment
} from "react";
import {
    XMarkIcon,
    StarIcon
} from "@heroicons/react/24/solid";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import Wrapper from "./Wrapper";
import FlexCol from "./FlexCol";
import FlexRow from "./FlexRow";
import Icon from "./Icon";

interface MainFixedBannerType {
    className?: string;
};

const MainFixedBanner = ({ ...props }: MainFixedBannerType) => {
    const [isBannerDisplayed, setBannerDisplay] = useState<boolean>(true);

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

    const {
        className
    } = props;

    return (
        <Fragment>
            {
                isWindowScrolled && (
                    <Fragment>
                        <Wrapper className={clsx(
                        "z-100 fixed bottom-6 left-5 p-2 md:p-3 lg:p-4 border border-gray-200 bg-white shadow-md rounded-md",
                        isBannerDisplayed ? "block" : "hidden",
                        className)}>
                        <Wrapper className="flex justify-end">
                            <Icon className="cursor-pointer">
                                <XMarkIcon
                                onClick={(e) => {
                                    setBannerDisplay(false);
                                }}
                                />
                            </Icon>
                        </Wrapper>
                        <Image
                        width={200}
                        height={180}
                        src="/Fotky/nejremeslnici-logo.png"
                        alt="Malířství Makrepa Nejřemeslní logo"
                        loading="lazy"
                        decoding="async"
                        draggable={false}
                        />
                        <FlexRow className="justify-between flex-row">
                            <Wrapper className="flex">
                                <Icon className="text-yellow-400">
                                    <StarIcon />
                                </Icon>
                                <Icon className="text-yellow-400">
                                    <StarIcon />
                                </Icon>
                                <Icon className="text-yellow-400">
                                    <StarIcon />
                                </Icon>
                                <Icon className="text-yellow-400">
                                    <StarIcon />
                                </Icon>
                                <Icon className="text-yellow-400">
                                    <StarIcon />
                                </Icon>
                            </Wrapper>
                            <p className="text-base md:text-[17px] lg:text-lg font-bold">
                                4.93
                            </p>
                        </FlexRow>
                        <FlexCol className="gap-2">
                            <Image
                            width={200}
                            height={100}
                            src="/Fotky/Gallery/Fotka-10.webp"
                            alt="Vymalovaná fasáda domu tyryksovou barvou, slouží jako banner na nejremeslnici.cz"
                            loading="lazy"
                            decoding="async"
                            draggable={false}
                            className="mt-2 md:mt-3 lg:mt-4 rounded-md"
                            />
                        </FlexCol>
                        <Link
                        href="https://www.nejremeslnici.cz/profil/185380-josef-krejcirik-malirstvi-makrepa"
                        target="_blank"
                        className="block mt-2 md:mt-2.5 lg:mt-3 p-3 md:p-4 lg:p-4.5 bg-[#007fb3] text-white text-center rounded-md">
                            Ukázat 42 referencí
                        </Link>
                    </Wrapper>
                    </Fragment>
                )
            }
        </Fragment>
    );
};

export default MainFixedBanner;