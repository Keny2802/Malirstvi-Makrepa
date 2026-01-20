"use client";

import {
    useState,
    Fragment
} from "react";
import {
    useRouter
} from "next/navigation";
import {
    ArrowTurnDownRightIcon
} from "@heroicons/react/24/solid";
import {
    useForm
} from "react-hook-form";
import {
    zodResolver
} from "@hookform/resolvers/zod";
import {
    ContactFormSchema,
    contactFormProps
} from "../lib/validation";

import Wrapper from "../Components/Wrapper";
import SectionAnimationWrapper from "../Components/SectionAnimationWrapper";
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
    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: {
            errors,
            isSubmitting
        },
        reset
    } = useForm<contactFormProps>({
        resolver: zodResolver(ContactFormSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            emailSubject: "",
            emailMessage: ""
        }
    });

    const handleContactForm = async (contactFormData: contactFormProps) => {
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(contactFormData)
            });

            if (!res.ok) {
                const errorData = await res.json();
                console.error("Chyba při odesílání formuláře:", errorData);
                return;
            }

            router.push("/dekujeme");
            console.log("Formulář odeslán!");
            reset();
        } catch (error) {
            console.error("Chyba při odesílání:", error);
        }
    };
    
    return (
        <Fragment>
            <Wrapper
            className="px-5 py-8 md:px-8 md:py-12 lg:px-10 lg:py-14 bg-white shadow-md section"
            id="kontakt">
                <SectionAnimationWrapper>
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
                        <form
                        onSubmit={handleSubmit(handleContactForm)}
                        className="p-4 md:p-5 lg:p-6 bg-[#1d4ed8] rounded-3xl w-full md:max-w-250">
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
                                        htmlFor="name"
                                        className="text-white cursor-pointer">
                                            Vaše jméno
                                        </label>
                                        <input
                                        {...register("name")}
                                        type="text"
                                        name="name"
                                        placeholder="Josef Novák"
                                        spellCheck={false}
                                        autoComplete="full-name"
                                        aria-label="Jméno"
                                        aria-required={true}
                                        aria-invalid={errors.name ? true : false}
                                        className="p-4 md:p-5 lg:p-6 bg-white text-black w-full rounded-md focus:outline-none"
                                        id="name"
                                        />
                                        {
                                            errors.name && (
                                                <Fragment>
                                                    <p className="text-sm text-red-400">
                                                        {errors.name.message}
                                                    </p>
                                                </Fragment>
                                            )
                                        }
                                    </FlexCol>
                                    <FlexCol className="w-full form-group">
                                        <label
                                        htmlFor="email"
                                        className="text-white cursor-pointer">
                                            Váš email
                                        </label>
                                        <input
                                        {...register("email")}
                                        type="email"
                                        name="email"
                                        placeholder="josef@novak.cz"
                                        spellCheck={false}
                                        autoComplete="email"
                                        aria-label="Email"
                                        aria-required={true}
                                        aria-invalid={errors.email ? true : false}
                                        className="p-4 md:p-5 lg:p-6 bg-white text-black w-full rounded-md focus:outline-none"
                                        id="email"
                                        />
                                        {/* {
                                            errors.email && (
                                                <Fragment>
                                                    <p className="text-sm text-red-400">
                                                        {errors.email.message}
                                                    </p>
                                                </Fragment>
                                            )
                                        } */}
                                    </FlexCol>
                                    <FlexCol className="w-full form-group">
                                        <label
                                        htmlFor="tel"
                                        className="text-white cursor-pointer">
                                            Vaše telefonní číslo
                                        </label>
                                        <input
                                        {...register("phone")}
                                        type="tel"
                                        name="phone"
                                        // XXX XXX XXX
                                        placeholder="+420 601 123 456"
                                        spellCheck={false}
                                        autoComplete="phone"
                                        aria-label="Telefonní číslo"
                                        aria-required={true}
                                        aria-invalid={errors.phone ? true : false}
                                        className="p-4 md:p-5 lg:p-6 bg-white text-black w-full rounded-md focus:outline-none"
                                        id="phone"
                                        />
                                    </FlexCol>
                                    <FlexCol className="w-full form-group">
                                        <label
                                        htmlFor="subject"
                                        className="text-white cursor-pointer">
                                            Předmět Vaší zprávy
                                        </label>
                                        <input
                                        {...register("emailSubject")}
                                        type="text"
                                        autoComplete="off"
                                        spellCheck={false}
                                        aria-required={true}
                                        aria-invalid={errors.emailSubject ? true : false}
                                        placeholder="Předmět Vaší zprávy"
                                        className="p-4 md:p-5 lg:p-6 bg-white text-black w-full rounded-md focus:outline-none"
                                        id="subject"
                                        />
                                        {/* {
                                            errors.emailSubject && (
                                                <Fragment>
                                                    <p className="text-sm text-red-400">
                                                        {errors.emailSubject.message}
                                                    </p>
                                                </Fragment>
                                            )
                                        } */}
                                    </FlexCol>
                                    <FlexCol className="w-full form-group">
                                        <label
                                        htmlFor="emailMessage"
                                        className="text-white cursor-pointer">
                                            Vaše zpráva
                                        </label>
                                        <textarea
                                        {...register("emailMessage")}
                                        name="emailMessage"
                                        spellCheck={false}
                                        placeholder="Zpráva co mi chcete sdělit."
                                        aria-label="Zpráva"
                                        aria-required={true}
                                        aria-invalid={errors.emailMessage ? true : false}
                                        className="p-4 md:p-5 lg:p-6 bg-white text-black rounded-md focus:outline-none resize-none w-full min-h-50 h-full"
                                        id="emailMessage"></textarea>
                                        {
                                            errors.emailMessage && (
                                                <Fragment>
                                                    <p className="text-sm text-red-400">
                                                        {errors.emailMessage.message}
                                                    </p>
                                                </Fragment>
                                            )
                                        }
                                    </FlexCol>
                                </FlexCol>
                            </FlexRow>
                            <button 
                            type="submit"
                            disabled={isSubmitting}
                            className="mt-4 md:mt-6 lg:mt-8 p-3 md:p-4 lg:p-4.5 bg-white text-black text-center w-full rounded-2xl cursor-pointer">
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
                </SectionAnimationWrapper>
            </Wrapper>
            <MainFixedBanner />
            <FixedCta />
        </Fragment>
    );
};

export default Contact;