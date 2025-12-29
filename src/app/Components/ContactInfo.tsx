import {
    Fragment
} from "react";
import {
    DevicePhoneMobileIcon,
    EnvelopeOpenIcon,
    MapPinIcon
} from "@heroicons/react/24/solid";
import Link from "next/link";

import Wrapper from "./Wrapper";

const ContactInfo = () => {
    return (
        <Fragment>
            <Wrapper>
                <Wrapper className="flex flex-col gap-2 md:gap-3 lg:gap-4">
                    <h3 className="text-xl md:text-[22px] lg:text-2xl font-semibold">
                        Kontaktujte nás
                    </h3>
                    <p className="text-[15px] md:text-base lg:text-lg font-medium">
                        Malířství Makrepa, Josef Krejčiřík
                    </p>
                </Wrapper>
                <ul className="mt-4 md:mt-6 lg:mt-8 flex flex-col gap-2 md:gap-3 lg:gap-4">
                    <li className="relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-0.75 after:w-full after:bg-[#1d4ed8] after:scale-[0_1] after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-[1_1] header-item">
                        <Link
                        href="https://mapy.com/cs/zakladni?source=addr&id=8848329&x=18.2424998&y=49.8012848&z=17"
                        rel="noopener noreffer"
                        target="_blank"
                        className="flex items-center gap-2 transition-colors duration-300 ease-in-out hover:text-[#1d4ed8]">
                            <MapPinIcon className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 cursor-pointer transition-colors duration-300 ease-in-out hover:text-[#1d4ed8]" />
                            Jugoslávská 2816/37, 700 30 Ostrava - Zábřeh, Česko
                        </Link>
                    </li>
                    <li className="relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-0.75 after:w-full after:bg-[#1d4ed8] after:scale-[0_1] after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-[1_1] header-item">
                        <Link
                        href="mailto:info@malirstvi-ostrava.cz"
                        className="flex items-center gap-2 transition-colors duration-300 ease-in-out hover:text-[#1d4ed8]">
                            <EnvelopeOpenIcon className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 cursor-pointer transition-colors duration-300 ease-in-out hover:text-[#1d4ed8]" />
                            info@malirstvi-ostrava.cz
                        </Link>
                    </li>
                    <li className="relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-0.75 after:w-full after:bg-[#1d4ed8] after:scale-[0_1] after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-[1_1] header-item">
                        <Link
                        href="tel:+420608751721"
                        className="flex items-center gap-2 transition-colors duration-300 ease-in-out hover:text-[#1d4ed8]">
                            <DevicePhoneMobileIcon className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 cursor-pointer transition-colors duration-300 ease-in-out hover:text-[#1d4ed8]" />
                            +420 608 751 721
                        </Link>
                    </li>
                    <Wrapper className="flex items-center gap-2 font-medium">
                        <p className="text-[15px] md:text-base lg:textlg">
                            IČO
                        </p>
                        <p className="text-[15px] md:text-base lg:textlg">
                            47 68 60 06
                        </p>
                    </Wrapper>
                </ul>
            </Wrapper>
        </Fragment>
    );
};

export default ContactInfo;