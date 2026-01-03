import {
    Fragment
} from "react";
import Link from "next/link";

import Wrapper from "./Components/Wrapper";
import Logo from "./Components/Logo";
import Heading from "./Components/Heading";
import Subheading from "./Components/Subheading";

const NotFound = () => {
    return (
        <Fragment>
            <Wrapper className="z-1100 fixed inset-0 flex justify-center items-center flex-col gap-2.5 md:gap-3 lg:gap-3.5 w-full h-screen bg-white shadow-md">
                <Logo />
                <Heading>
                    404 Jejda tady nic nenajdete.
                </Heading>
                <Subheading>
                    Nenalezená stránka, doporučujeme se vrátit na domovskou stránku.
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

export default NotFound;