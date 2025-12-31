import {
    Fragment
} from "react";

import Wrapper from "../Components/Wrapper";

const About = () => {
    return (
        <Fragment>
            <Wrapper className="px-5 py-8 md:px-8 md:py-12 lg:px-10 lg:py-14 bg-white shadow-md section">
                <Wrapper className="flex justify-center items-center flex-col gap-1.5 md:gap-2 lg:gap-2.5">
                    <h2 className="text-3xl md:text-[42px] lg:text-5xl font-extrabold"></h2>
                    <p className="text-base md:text-[17px] lg:text-lg text-center max-w-3xl"></p>
                </Wrapper>
            </Wrapper>
        </Fragment>
    );
};

export default About;