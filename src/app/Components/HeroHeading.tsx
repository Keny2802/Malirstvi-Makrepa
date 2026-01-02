import {
    Fragment,
    ReactNode
} from "react";
import clsx from "clsx";

interface HeroHeadingType {
    className?: string;
    children?: ReactNode;
};

const HeroHeading = ({ ...props }: HeroHeadingType) => {
    const {
        className,
        children
    } = props;
    return (
        <Fragment>
            <h1 className={clsx(`${className || ""} text-4xl md:text-[56px] lg:text-8xl font-black md:max-w-7xl`)}>
                {children}
            </h1>
        </Fragment>
    );
};

export default HeroHeading;