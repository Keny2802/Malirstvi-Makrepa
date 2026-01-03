"use client";

import {
    useEffect,
    useState,
    Fragment
} from "react";
import {
    ChevronDoubleUpIcon,
    DevicePhoneMobileIcon
} from "@heroicons/react/24/solid";
import Link from "next/link";
import clsx from "clsx";

import FlexCol from "./FlexCol";
import setLinkWithoutHash from "../Functions/setLinkWithoutHash";
import PhoneLink from "./PhoneLink";
import Icon from "./Icon";

interface FixedCtaType {
    className?: string;
};

const FixedCta = ({ ...props }: FixedCtaType) => {
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
            <FlexCol className={clsx(`${className || ""} z-100 fixed right-5 bottom-6`)}>
                {
                    isWindowScrolled && (
                        <Fragment>
                            <button
                            className="p-2 md:p-3 lg:p-4 bg-[#1d4ed8] text-white rounded-full cursor-pointer focus:outline-none transition-colors ease-in-out duration-300 hover:bg-white hover:text-black hover:border hover:border-gray-200"
                            onClick={(e) => {
                                document.getElementById("domu")?.scrollIntoView({
                                    behavior: "smooth"
                                });
                            }}>
                                <Icon>
                                    <ChevronDoubleUpIcon />
                                </Icon>
                            </button>
                        </Fragment>
                    )
                }
                
                <PhoneLink
                className="p-2 md:p-3 lg:p-4 border border-gray-200 bg-white text-black rounded-full transition-colors duration-300 ease-in-out hover:bg-[#1d4ed8] hover:text-white"
                yes={false}>
                    <Icon>
                        <DevicePhoneMobileIcon />
                    </Icon>
                </PhoneLink>
            </FlexCol>
        </Fragment>
    );
};

export default FixedCta;