import {
    Fragment,
    ReactNode
} from "react";
import clsx from "clsx";

import Wrapper from "./Wrapper";

type pageLabelProps = {
    className?: string;
    children?: ReactNode | null;
};

const PageLabel = ({ ...props }: pageLabelProps) => {
    const {
        className,
        children
    } = props;

    return (
        <Fragment>
            <Wrapper>
                <p className={clsx(`${className || ""} mb-2 md:mb-2.5 lg:mb-3 text-[#313131] text-base md:text-lg lg:text-xl uppercase font-bold page-label-text`)}>
                    {children}
                </p>
            </Wrapper>
        </Fragment>
    );
};

export default PageLabel;