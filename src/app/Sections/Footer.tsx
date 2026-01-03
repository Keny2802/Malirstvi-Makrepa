"use client";

import {
    Fragment
} from "react";
import Link from "next/link";

import Wrapper from "../Components/Wrapper";
import Logo from "../Components/Logo";
import FlexCol from "../Components/FlexCol";
import FlexRow from "../Components/FlexRow";
import setLinkWithoutHash from "../Functions/setLinkWithoutHash";
import ContactInfo from "../Components/ContactInfo";

const DYNAMIC_YEAR = new Date().getFullYear();

const Footer = () => {
    return (
        <Fragment>
            <Wrapper
            className="border-t border-gray-200 bg-white shadow-m"
            id="footer">
                <Wrapper className="px-5 py-8 md:px-8 md:py-12 lg:px-10 lg:py-14">
                    <Logo />
                    <FlexRow className="justify-evenly">
                        <FlexCol>
                            <h3 className="text-xl md:text-[22px] lg:text-2xl font-semibold">
                                Nabídka
                            </h3>
                            <FlexCol>
                                <ul className="header-list">
                                    <li className="relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-0.75 after:w-full after:bg-[#1d4ed8] after:scale-[0_1] after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-[1_1] header-item">
                                        <Link
                                        href="#domu"
                                        onClick={(e) => {
                                            setLinkWithoutHash(e, "domu");
                                        }}
                                        className="text-[#313131] text-base md:text-[17px] lg:text-lg font-medium transition-colors duration-300 ease-in-out hover:text-[#1d4ed8]"
                                        >
                                            Domů
                                        </Link>
                                    </li>
                                    {
                                        [
                                            {
                                                link: "O nás",
                                                href: "/o-nas"
                                            },
                                            {
                                                link: "Služby",
                                                href: "/sluzby"
                                            },
                                            {
                                                link: "Galerie",
                                                href: "/galerie"
                                            },
                                            {
                                                link: "Reference",
                                                href: "/reference"
                                            },
                                            {
                                                link: "Ceník",
                                                href: "/cenik"
                                            },
                                            {
                                                link: "Kontakt",
                                                href: "/kontakt"
                                            }
                                        ].map((headerItem, headerItemIndex) => (
                                            <Fragment key={headerItemIndex}>
                                                <li className="relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-0.75 after:w-full after:bg-[#1d4ed8] after:scale-[0_1] after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-[1_1] header-item">
                                                    <Link
                                                    href={headerItem.href}
                                                    className="text-[#313131] text-base md:text-[17px] lg:text-lg font-medium transition-colors duration-300 ease-in-out hover:text-[#1d4ed8]">
                                                        {headerItem.link}
                                                    </Link>
                                                </li>
                                            </Fragment>
                                        ))
                                    }
                                </ul>
                            </FlexCol>
                        </FlexCol>
                        <ContactInfo />
                    </FlexRow>
                </Wrapper>
                <FlexCol className="p-4 md:p-6 lg:p-8 mt-4 md:mt-6 lg:mt-8 justify-center items-center gap-2 text-center font-medium">
                    <p className="text-[15px] md:text-base lg:text-lg">
                        Malířství Makrepa Josef Krejčiřík, {DYNAMIC_YEAR}, Všechna Práva vyhrazena.
                    </p>
                    <Wrapper className="flex items-center gap-2">
                        <p className="text-[15px] md:text-base lg:text-lg">
                            Web vytvořil
                        </p>
                        <Link
                        href="https://vojtaoliva.cz"
                        target="_blank"
                        className="transition-colors duration-300 ease-in-out hover:text-[#1d4ed8]">
                            Vojta Oliva,
                        </Link>
                        <Link
                        href="mailto:info@vojtaoliva.cz"
                        target="_blank"
                        className="transition-colors duration-300 ease-in-out hover:text-[#1d4ed8]">
                            info@vojtaoliva.cz
                        </Link>
                    </Wrapper>
                </FlexCol>
            </Wrapper>
        </Fragment>
    );
};

export default Footer;