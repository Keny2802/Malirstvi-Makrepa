import {
    Fragment
} from "react";
import {
    DevicePhoneMobileIcon,
    EnvelopeIcon,
    ClockIcon
} from "@heroicons/react/24/solid";
import Link from "next/link";
import Image from "next/image";

import Wrapper from "./Wrapper";

const ContactHeader = () => {
    return (
        <Fragment>
            <Wrapper
                className="hidden md:block p-2 md:p-2.5 lg:p-3 bg-white shadow-md border-b border-gray-200 contact-header"
                id="contact-header">
                <Wrapper className="flex justify-between items-center gap-2 md:gap-4 lg:gap-6">
                    <Link
                        href="tel:+420608751721"
                        className="flex items-center gap-2 md:gap-2.5 lg:gap-3 transition-colors duration-300 ease-in-out hover:text-[#1d4ed8]">
                        <DevicePhoneMobileIcon className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                        +420 608 751 721
                    </Link>
                    <Link
                        href="mailto:info@malirstvi-ostrava.cz"
                        className="flex items-center gap-2 md:gap-2.5 lg:gap-3 transition-colors duration-300 ease-in-out hover:text-[#1d4ed8]">
                        <EnvelopeIcon className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                        info@malirstvi-ostrava.cz
                    </Link>
                    <Wrapper className="flex items-center gap-2 md:gap-2.5 lg:gap-3">
                        <ClockIcon className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                        <p className="text-sm md:text-[15px] lg:text-base">
                            Po-Pá: 08:00 - 20:00
                        </p>
                    </Wrapper>
                </Wrapper>
            </Wrapper>
        </Fragment>
    );
};

export default ContactHeader;