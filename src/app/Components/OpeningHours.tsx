import {
    Fragment,
    ReactNode
} from "react";
import clsx from "clsx";

import Wrapper from "./Wrapper";

interface openingHoursType {
    className?: string;
    children?: ReactNode;
};

const OpeningHours = ({ ...props }: openingHoursType) => {
    const {
        className,
        children
    } = props;

    return (
        <Fragment>
            <Wrapper className={clsx(`${className || ""} flex items-center gap-1.5 md:gap-2 lg:gap-2.5`)}>
                {children}
                <p className="text-base">
                    Po-Pá: 08:00 - 20:00
                </p>
            </Wrapper>
        </Fragment>
    );
};

export default OpeningHours;