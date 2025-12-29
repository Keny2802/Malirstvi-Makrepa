"use client";

import {
    Fragment
} from "react";
import Image from "next/image";
import Link from "next/link";

import Wrapper from "../Components/Wrapper";
import setLinkWithoutHash from "../Functions/setLinkWithoutHash";

const Cta = () => {
    return (
        <Fragment>
            <Wrapper className="relative">
                <Image
                height={500}
                width={500}
                src="/Fotky/Cta/Cta.jpg"
                alt="Potřebujete vymalovat"
                loading="lazy"
                decoding="async"
                draggable={false}
                className="w-full h-full md:max-h-125 object-cover"
                />
                <Wrapper className="p-2 md:p-3 lg:p-4 absolute inset-0 flex justify-center items-center flex-col gap-2.5 md:gap-3 lg:gap-4 text-white">
                    <h2 className="text-[28px] md:text-4xl lg:text-5xl font-extrabold">
                        Potřebujete vymalovat?
                    </h2>
                    <p className="text-base md:text-[17px] lg:text-lg text-center max-w-3xl">
                        Vymalujeme vám byt, dům či komerční prostor. Napiště nebo zavolejte nám a zjistětepřesnou cenu.
                    </p>
                    <Wrapper className="mt-2 md:mt-3 lg:mt-4 flex justify-center items-center flex-col md:flex-row gap-2 md:gap-3 lg:gap-4 w-full">
                        <Link
                        href="#kalkulace"
                        className="p-4 md:p-5 lg:p-6 bg-white text-black text-center w-full md:w-75 rounded-md"
                        onClick={(e) => {
                            setLinkWithoutHash(e, "kalkulace");
                        }}>
                            Nezávazná kalkulace
                        </Link>
                        <Link
                        href="#kontakt"
                        className="p-4 md:p-5 lg:p-6 bg-[#1d4ed8] text-wite text-center w-full md:w-75 rounded-md"
                        onClick={(e) => {
                            setLinkWithoutHash(e, "kontakt");
                        }}>
                            Kontaktujte nás
                        </Link>
                    </Wrapper>
                </Wrapper>
            </Wrapper>
        </Fragment>
    );
};

export default Cta;