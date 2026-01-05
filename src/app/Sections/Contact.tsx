import {
    Fragment
} from "react";
import {
    ArrowTurnDownRightIcon
} from "@heroicons/react/24/solid";

import Wrapper from "../Components/Wrapper";
import PageLabel from "../Components/PageLabel";
import FlexCol from "../Components/FlexCol";
import Heading from "../Components/Heading";
import SubHeading from "../Components/Subheading";
import FlexRow from "../Components/FlexRow";
import Flex from "../Components/Flex";
import Icon from "../Components/Icon";
import ContactInfo from "../Components/ContactInfo";
import MainFixedBanner from "../Components/MainFixedBanner";
import FixedCta from "../Components/FixedCta";

const Contact = () => {
    return (
        <Fragment>
            <Wrapper
            className="px-5 py-8 md:px-8 md:py-12 lg:px-10 lg:py-14 bg-white shadow-md section"
            id="kontakt">
                <PageLabel>
                    Kontakt
                </PageLabel>
                {/* <PageLabel pageLabelText="Kontakt" /> */}
                <FlexCol className="justify-center items-center text-center">
                    <Heading>
                        {/* Jsme tu pro vás */}
                        Máte otázky? Napište nám!
                    </Heading>
                    <SubHeading>
                        {/* Napište nám nebo zavolejte. Rádi zodpovíme vaše dotazy a domluvíme detaily zakázky. */}
                        Rychlá a spolehlivá komunikace pro vaše malířské projekty.
                    </SubHeading>
                </FlexCol>
                <FlexRow className="items-center">
                    <form className="p-4 md:p-5 lg:p-6 bg-[#1d4ed8] rounded-3xl w-full md:max-w-250">
                        <FlexCol className="justify-center items-center text-center">
                            <h3 className="text-2xl md:text-[28px] lg:text-[32px] font-semibold text-white">
                                Pošlete nám poptávku
                            </h3>
                            <p className="text-base md:text-[17px] lg:text-lg text-white">
                                Ozveme se co nejdříve a domluvíme další postup.
                            </p>
                        </FlexCol>
                        <FlexRow>
                            <FlexCol className="w-full">
                                <FlexCol className="w-full form-group">
                                    <label
                                    htmlFor="full-name"
                                    className="text-white cursor-pointer">
                                        Vaše jméno
                                    </label>
                                    <input
                                    required
                                    type="text"
                                    name="full-name"
                                    placeholder="Josef Novák"
                                    spellCheck={false}
                                    autoComplete="full-name"
                                    aria-label="Jméno"
                                    aria-required={true}
                                    aria-invalid={true}
                                    className="p-4 md:p-5 lg:p-6 bg-white text-black w-full rounded-md focus:outline-none"
                                    id="full-name"
                                    />
                                </FlexCol>
                                <FlexCol className="w-full form-group">
                                    <label
                                    htmlFor="email"
                                    className="text-white cursor-pointer">
                                        Váš email
                                    </label>
                                    <input
                                    required
                                    type="email"
                                    name="email"
                                    placeholder="josef@novak.cz"
                                    spellCheck={false}
                                    autoComplete="email"
                                    aria-label="Email"
                                    aria-required={true}
                                    aria-invalid={true}
                                    className="p-4 md:p-5 lg:p-6 bg-white text-black w-full rounded-md focus:outline-none"
                                    id="email"
                                    />
                                </FlexCol>
                                <FlexCol className="w-full form-group">
                                    <label
                                    htmlFor="tel"
                                    className="text-white cursor-pointer">
                                        Vaše telefonní číslo
                                    </label>
                                    <input
                                    required
                                    type="tel"
                                    name="tel"
                                    // XXX XXX XXX
                                    placeholder="+420 601 123 456"
                                    spellCheck={false}
                                    autoComplete="tel"
                                    aria-label="Telefonní číslo"
                                    aria-required={true}
                                    aria-invalid={true}
                                    className="p-4 md:p-5 lg:p-6 bg-white text-black w-full rounded-md focus:outline-none"
                                    id="tel"
                                    />
                                </FlexCol>
                                <FlexCol className="w-full form-group">
                                    <label
                                    htmlFor="message"
                                    className="text-white cursor-pointer">
                                        Vaše zpráva
                                    </label>
                                    <textarea
                                    name="message"
                                    spellCheck={false}
                                    placeholder="Zpráva co mi chcete sdělit."
                                    aria-label="Zpráva"
                                    aria-required={true}
                                    aria-invalid={true}
                                    className="p-4 md:p-5 lg:p-6 bg-white text-black rounded-md focus:outline-none resize-none w-full min-h-50 h-full"
                                    id="message"></textarea>
                                </FlexCol>
                            </FlexCol>
                        </FlexRow>
                        <button className="mt-4 md:mt-6 lg:mt-8 p-3 md:p-4 lg:p-4.5 bg-white text-black text-center w-full rounded-2xl cursor-pointer">
                            <Flex className="justify-center gap-2 md:gap-2.5 lg:gap-3">
                                Zaslat zprávu
                                <Icon className="cursor-pointer">
                                    <ArrowTurnDownRightIcon />
                                </Icon>
                            </Flex>
                        </button>
                    </form>
                    <ContactInfo />
                </FlexRow>
            </Wrapper>
            <MainFixedBanner />
            <FixedCta />
        </Fragment>
    );
};

export default Contact;