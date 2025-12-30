import {
    Fragment
} from "react";
import {
    DevicePhoneMobileIcon,
    ClockIcon,
    EnvelopeOpenIcon
} from "@heroicons/react/24/solid";
import Link from "next/link";

import Wrapper from "./Wrapper";

const ContactHeader = () => {
    return (
        <Fragment>
            <Wrapper
                className="hidden md:block p-2 md:p-2.25 lg:p-2.5 bg-white shadow-md border-b border-gray-200 contact-header"
                id="contact-header">
                <Wrapper className="flex justify-between items-center gap-1.5 md:gap-2 lg:gap-3">
                    <Link
                        href="tel:+420608751721"
                        className="text-base flex items-center gap-1.5 md:gap-2 lg:gap-2.5 transition-colors duration-300 ease-in-out hover:text-[#1d4ed8]">
                        <DevicePhoneMobileIcon className="w-6 h-6 md:w-6.5 md:h-6.5 lg:w-7 lg:h-7" />
                        +420 608 751 721
                    </Link>
                    <Link
                        href="mailto:info@malirstvi-ostrava.cz"
                        className="text-base flex items-center gap-1.5 md:gap-2 lg:gap-2.5 transition-colors duration-300 ease-in-out hover:text-[#1d4ed8]">
                        <EnvelopeOpenIcon className="w-6 h-6 md:w-6.5 md:h-6.5 lg:w-7 lg:h-7" />
                        info@malirstvi-ostrava.cz
                    </Link>
                    <Wrapper className="flex items-center gap-1.5 md:gap-2 lg:gap-2.5">
                        <ClockIcon className="w-6 h-6 md:w-6.5 md:h-6.5 lg:w-7 lg:h-7" />
                        <p className="text-base">
                            Po-Pá: 08:00 - 20:00
                        </p>
                    </Wrapper>
                </Wrapper>
            </Wrapper>
        </Fragment>
        // text-sm md:text-[15px] lg:text-base
    );
};

export default ContactHeader;