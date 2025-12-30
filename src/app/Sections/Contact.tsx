import {
    Fragment
} from "react";
import {
    ArrowTurnDownRightIcon
} from "@heroicons/react/24/solid";

import Wrapper from "../Components/Wrapper";
// import PageLabel from "../components/pageLabel";
import Icon from "../Components/Icon";
import ContactInfo from "../Components/ContactInfo";

const Contact = () => {
    return (
        <Fragment>
            <Wrapper
            className="px-5 py-8 md:px-8 md:py-12 lg:px-10 lg:py-14 bg-white shadow-md section"
            id="kontakt">
                {/* <PageLabel pageLabelText="Kontakt" /> */}
                <Wrapper className="flex justify-center items-center flex-col gap-2 md:gap-2.5 lg:gap-3">
                    <h2 className="text-4xl md:text-[42px] lg:text-5xl font-extrabold text-center max-w-7xl">
                        Jsme tu pro vás
                    </h2>
                    <p className="text-base md:text-[17px] lg:text-lg font-medium md:max-w-3xl">
                        Napište nám nebo zavolejte. Rádi zodpovíme vaše dotazy a domluvíme detaily zakázky.
                    </p>
                </Wrapper>
                <Wrapper className="mt-4 md:mt-6 lg:mt-8 flex justify-evenly md:items-center flex-col md:flex-row gap-6 md:gap-8 lg:gap-10">
                    <form className="p-4 md:p-5 lg:p-6 bg-[#1d4ed8] rounded-3xl w-full md:max-w-250">
                        <Wrapper className="flex justify-center items-center flex-col gap-2 md:gap-2.5 lg:gap-3 text-center">
                            <h3 className="text-2xl md:text-[28px] lg:text-[32px] font-semibold text-white">
                                Pošlete nám poptávku
                            </h3>
                            <p className="text-base md:text-[17px] lg:text-lg text-white">
                                Ozveme se co nejdříve a domluvíme další postup.
                            </p>
                        </Wrapper>
                        <Wrapper className="mt-4 md:mt-6 lg:mt-8 flex justify-center flex-col md:flex-row gap-4 md:gap-6 lg:gap-8 text-black">
                            <Wrapper className="flex flex-col gap-2 md:gap-2.5 lg:gap-3 w-full">
                                <Wrapper className="flex flex-col gap-2 md:gap-2.5 lg:gap-3 w-full form-group">
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
                                </Wrapper>
                                <Wrapper className="flex flex-col gap-2 md:gap-2.5 lg:gap-3 w-full form-group">
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
                                </Wrapper>
                                <Wrapper className="flex flex-col gap-2 md:gap-2.5 lg:gap-3 w-full form-group">
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
                                </Wrapper>
                            </Wrapper>
                            <Wrapper className="flex flex-col gap-2 md:gap-2.5 lg:gap-3 w-full form-group">
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
                                className="p-4 md:p-5 lg:p-6 bg-white text-black rounded-md focus:outline-none resize-none w-full max-w-120 min-h-50 h-full"
                                id="message"></textarea>
                            </Wrapper>
                        </Wrapper>
                        <button className="mt-4 md:mt-6 lg:mt-8 p-2 md:p-3 lg:p-4 flex justify-center items-center gap-2 md:gap-2.5 lg:gap-3 bg-white text-black text-center w-full rounded-2xl cursor-pointer">
                            Zaslat zprávu
                            <Icon className="cursor-pointer">
                                <ArrowTurnDownRightIcon />
                            </Icon>
                        </button>
                    </form>
                    <ContactInfo />
                </Wrapper>
            </Wrapper>
        </Fragment>
    );
};

export default Contact;