"use client";

import {
    useState,
    useEffect,
    Fragment,
    Activity
} from "react";
import {
    usePathname
} from "next/navigation";
import {
    DevicePhoneMobileIcon
} from "@heroicons/react/24/solid";
import clsx from "clsx";
import Link from "next/link";

import Wrapper from "./Wrapper";
import Logo from "./Logo";
import setLinkWithoutHash from "../Functions/setLinkWithoutHash";

interface componentProps {
    className?: string;
    isMobileMenuClicked: boolean;
    setMobileMenuClicked: (bool: boolean) => void;
};

const MobileMenu = ({ ...props }: componentProps) => {
    const [isActiveLink, setActiveLink] = useState<string>("");
    const dynamicYear = new Date().getFullYear();
    const pathName = usePathname();
    
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

    const {
        className,
        isMobileMenuClicked,
        setMobileMenuClicked,
    } = props;

    return (
        <Fragment>
            <Activity mode={isMobileMenuClicked ? "visible" : "hidden"}>
                <Fragment>
                    <Wrapper
                    className="fixed lg:hidden inset-0 z-50 bg-black/40"
                    onClick={(e) => {
                        setMobileMenuClicked(false);
                    }}></Wrapper>
                </Fragment>
            </Activity>
            <Wrapper className={clsx(`
            ${className || ""}
            ${isMobileMenuClicked ? "translate-x-0 lg:-translate-x-full" : "-translate-x-full"}
            p-4 fixed top-0 left-0 z-50 h-screen flex flex-col justify-between gap-2 md:gap-3 lg:gap-4 bg-white max-w-75 transition-transform duration-500 ease-linear
            `)}>
                <Wrapper className="flex flex-col gap-4">
                    <Wrapper className="flex justify-between items-center gap-2">
                        <Logo/>
                    </Wrapper>
                    <ul className="flex flex-col gap-3 text-[#313131] mobile-header-list">
                        <li className="relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-0.75 after:w-full after:bg-[#1d4ed8] after:scale-[0_1] after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-[1_1] header-item">
                            {
                                pathName === "/" ? (
                                    <Fragment>
                                        <Link
                                        href="#uvod"
                                        onClick={(e) => {
                                            setLinkWithoutHash(e, "uvod");
                                        }}
                                        className="text-[#313131] text-base md:text-[17px] lg:text-lg font-medium transition-colors duration-300 ease-in-out hover:text-[#1d4ed8]"
                                        >
                                            Úvod
                                        </Link>
                                    </Fragment>
                                ) : (
                                    <Fragment>
                                        <Link
                                        href="/#uvod"
                                        className="text-[#313131] text-base md:text-[17px] lg:text-lg font-medium transition-colors duration-300 ease-in-out hover:text-[#1d4ed8]"
                                        >
                                            Úvod
                                        </Link>
                                    </Fragment>
                                )
                            }
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
                                        className="text-[#313131] text-base md:text-[17px] lg:text-lg font-semibold transition-colors duration-300 ease-in-out hover:text-[#1d4ed8]">
                                            {headerItem.link}
                                        </Link>
                                    </li>
                                </Fragment>
                            ))
                        }
                    </ul>
                    <Link
                    href="tel:+420608751721"
                    className="p-2 md:p-3 lg:p-4 flex justify-between items-center gap-2 md:gap-3 lg:gap-4 bg-[#1d4ed8] text-white font-semibold rounded-md">
                        <DevicePhoneMobileIcon className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                        +420 608 751 721
                    </Link>
                </Wrapper>
                <p className="text-black text-center">
                    &copy;
                    {" "}
                    {dynamicYear}
                    {" "}
                    Malířství Makrepa.
                    Všechna práva vyhrazena.
                </p>
            </Wrapper>
        </Fragment>
    );
};

export default MobileMenu;