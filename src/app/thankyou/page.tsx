import {
    Fragment
} from "react";
import Link from "next/link";

import Wrapper from "../Components/Wrapper";
import Logo from "../Components/Logo";
import Heading from "../Components/Heading";
import Subheading from "../Components/Subheading";

const ThankYou = () => {
    return (
        <Fragment>
            <Wrapper className="px-5 py-8 md:px-8 md:py-12 lg:px-10 lg:py-14 z-1100 fixed inset-0 flex justify-center items-center flex-col gap-2.5 md:gap-3 lg:gap-3.5 w-full h-screen bg-white shadow-md">
                <Logo />
                <Heading>
                    Mockrát děkujeme za odeslání formuláře
                </Heading>
                <Subheading>
                    Vážíme si, že jste formulář odeslal, ozveme se Vám co nejdříve.
                </Subheading>
                <Link
                href="/"
                className="p-3 md:p-4 lg:p-4.5 bg-[#1d4ed8] text-white text-center w-full md:w-75 rounded-md">
                    Vrátit se zpět domů
                </Link>
            </Wrapper>
        </Fragment>
    );
};

export default ThankYou;