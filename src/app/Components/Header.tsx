"use client";

import {
    useState,
    useEffect,
    useLayoutEffect,
    Fragment
} from "react";
import {
    DevicePhoneMobileIcon,
    Bars3Icon,
    MinusIcon
} from "@heroicons/react/24/solid";
import clsx from "clsx";
import Link from "next/link";

import Wrapper from "./Wrapper";
import Logo from "./Logo";
import setLinkWithoutHash from "../Functions/setLinkWithoutHash";
import MobileMenu from "./MobileMenu";

const Header = () => {
    const [isHeaderScrolled, setHeaderScrolled] = useState<boolean>(false);
    const [isMobileMenuClicked, setMobileMenuClicked] = useState<boolean>(false);
    const [isActiveLink, setActiveLink] = useState<string>("");

    useEffect(() => {
        const sections = document.querySelectorAll(".section");

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const target = entry.target;
                const targetID = target.id;

                if (entry.isIntersecting) {
                    setActiveLink(targetID);
                };
            });
        }, {
            threshold: 0.5
        });

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                observer.unobserve(section);
            });
        };
    }, []);

    useLayoutEffect(() => {
        const setHeaderToScrolled = () => {
            if (window.scrollY > 0) {
                setHeaderScrolled(true);
            } else {
                setHeaderScrolled(false);
            };
        };

        window.addEventListener("scroll", setHeaderToScrolled);

        return () => {
            window.removeEventListener("scroll", setHeaderToScrolled);
        };
    }, []);

    return (
        <Fragment>
            <Wrapper
            className={clsx(`p-2.5 md:p-3 lg:p-3.5 ${isHeaderScrolled && "fixed top-0 left-0"} bg-white shadow-md border-b border-gray-200 w-full z-40 transition-all duration-500 ease-in-out header`)}
            id="header">
                <Wrapper className="flex justify-between items-center gap-3 md:gap-4 lg:gap-5">
                    <Logo />
                    <ul className="hidden lg:flex justify-center items-center gap-4 md:gap-5 lg:gap-6 header-list">
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
                                    link: "Služby",
                                    href: "/sluzby"
                                },
                                {
                                    link: "Realizace",
                                    href: "/realizace"
                                },
                                {
                                    link: "Recenze",
                                    href: "/recenze"
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
                    <Link
                    href="tel:+420608751721"
                    className="p-1.5 md:p-2.5 lg:p-3 hidden lg:flex justify-between items-center gap-1.5 md:gap-2 lg:gap-2.5 bg-[#1d4ed8] text-white text-base md:text-[17px] lg:text-lg font-medium rounded-md">
                        <DevicePhoneMobileIcon className="w-6 h-6 md:w-6.5 md:h-6.5 lg:w-7 lg:h-7" />
                        +420 608 751 721
                    </Link>
                    {
                        isMobileMenuClicked ? (
                            <Fragment>
                                <MinusIcon
                                className="lg:hidden w-6 h-6 md:w-6.5 md:h-6.5 lg:w-7 lg:h-7 cursor-pointer"
                                onClick={(e) => {
                                    setMobileMenuClicked(false);
                                }}
                                />
                            </Fragment>
                        ) : (
                            <Fragment>
                                <Bars3Icon
                                className="lg:hidden w-6 h-6 md:w-6.5 md:h-6.5 lg:w-7 lg:h-7 cursor-pointer"
                                onClick={(e) => {
                                    setMobileMenuClicked(true);
                                }}
                                />
                            </Fragment>
                        )
                    }
                </Wrapper>
            </Wrapper>
            <MobileMenu
            isMobileMenuClicked={isMobileMenuClicked}
            setMobileMenuClicked={setMobileMenuClicked}
            />
        </Fragment>
    );
};

export default Header;