import {
    Fragment,
    ReactNode
} from "react";
import Link from "next/link";
import clsx from "clsx";

import Wrapper from "./Wrapper";

interface icoType {
    className?: string;
    children?: ReactNode;
};

const Ico = ({ ...props }: icoType) => {
    const {
        className,
        children
    } = props;

    return (
        <Fragment>
            <Wrapper className={clsx(`${className || ""} flex items-center gap-2 font-medium`)}>
                {children}
                <p className="text-[15px] md:text-base lg:textlg">
                    IČO
                </p>
                <p className="text-[15px] md:text-base lg:textlg">
                    47 68 60 06
                </p>
            </Wrapper>
        </Fragment>
    );
};

export default Ico;