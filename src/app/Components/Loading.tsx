"use client";

import {
    useState,
    useEffect,
    Fragment
} from "react";

import Wrapper from "./Wrapper";
import Logo from "./Logo";
import Heading from "./Heading";
import Subheading from "./Subheading";

const Loading = () => {
    const [isLoading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const loadingTimeout = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => {
            clearTimeout(loadingTimeout);
        };
    }, []);

    return (
        <Fragment>
            {
                isLoading && (
                    <Wrapper className="z-1000 fixed inset-0 flex justify-center items-center flex-col gap-2.5 md:gap-3 lg:gap-4 w-full h-screen bg-white shadow-md">
                        <Logo />
                        <Heading>
                            Vítejte v Malířství Makrepa Josefa Krejčiříka
                        </Heading>
                        <Subheading>
                            Nechcte si vymalovat ještě dnes.
                        </Subheading>
                        <Wrapper className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 border-4 border-[#1d4ed8] border-t-transparent rounded-full animate-spin"></Wrapper>
                    </Wrapper>
                )
            }
        </Fragment>
    );
};

export default Loading;