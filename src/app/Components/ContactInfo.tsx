import {
    Fragment
} from "react";
import {
    DevicePhoneMobileIcon,
    EnvelopeOpenIcon,
    MapPinIcon
} from "@heroicons/react/24/solid";

import Wrapper from "./Wrapper";
import MapLink from "./MapLink";
import MailLink from "./MailLink";
import PhoneLink from "./PhoneLink";
import Ico from "./Ico";
import Icon from "./Icon";

const ContactInfo = () => {
    return (
        <Fragment>
            <Wrapper>
                <Wrapper className="flex flex-col gap-2 md:gap-3 lg:gap-4">
                    <h3 className="text-2xl md:text-[28px] lg:text-[32px] font-semibold">
                        Kontaktujte nás
                    </h3>
                    <p className="text-[15px] md:text-base lg:text-lg font-medium">
                        Malířství Makrepa, Josef Krejčiřík
                    </p>
                </Wrapper>
                <ul className="mt-4 md:mt-6 lg:mt-8 flex flex-col gap-2 md:gap-3 lg:gap-4">
                    <li className="relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-0.75 after:w-full after:bg-[#1d4ed8] after:scale-[0_1] after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-[1_1] header-item">
                        <MapLink>
                            <Icon>
                                <MapPinIcon className="cursor-pointer" />
                            </Icon>
                        </MapLink>
                    </li>
                    <li className="relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-0.75 after:w-full after:bg-[#1d4ed8] after:scale-[0_1] after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-[1_1] header-item">
                        <MailLink>
                            <Icon className="cursor-pointer">
                                <EnvelopeOpenIcon />
                            </Icon>
                        </MailLink>
                    </li>
                    <li className="relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-0.75 after:w-full after:bg-[#1d4ed8] after:scale-[0_1] after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-[1_1] header-item">
                        <PhoneLink>
                            <Icon className="cursor-pointer">
                                <DevicePhoneMobileIcon />
                            </Icon>
                        </PhoneLink>
                    </li>
                    <Ico />
                </ul>
            </Wrapper>
        </Fragment>
    );
};

export default ContactInfo;