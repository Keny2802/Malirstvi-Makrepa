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
import PhoneLink from "./PhoneLink";
import MailLink from "./MailLink";
import OpeningHours from "./OpeningHours";
import Icon from "./Icon";

const ContactHeader = () => {
    return (
        <Fragment>
            <Wrapper
                className="hidden md:block p-2 md:p-2.25 lg:p-2.5 bg-white shadow-md border-b border-gray-200 contact-header"
                id="contact-header">
                <Wrapper className="flex justify-between items-center gap-1.5 md:gap-2 lg:gap-3">
                    <PhoneLink>
                        <Icon>
                            <DevicePhoneMobileIcon />
                        </Icon>
                    </PhoneLink>
                    <MailLink>
                        <Icon>
                            <EnvelopeOpenIcon />
                        </Icon>
                    </MailLink>
                    <OpeningHours>
                        <Icon>
                            <ClockIcon />
                        </Icon>
                    </OpeningHours>
                </Wrapper>
            </Wrapper>
        </Fragment>
        // text-sm md:text-[15px] lg:text-base
    );
};

export default ContactHeader;