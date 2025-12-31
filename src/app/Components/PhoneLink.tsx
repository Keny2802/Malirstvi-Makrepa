import {
    Fragment,
    ReactNode
} from "react";
import Link from "next/link";
import clsx from "clsx";

interface phoneLinkType {
    className?: string;
    children?: ReactNode;
    yes?: boolean;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

const PhoneLink = ({ ...props }: phoneLinkType) => {
    const {
        className,
        children,
        yes = true,
        onClick
    } = props;

    return (
        <Fragment>
            <Link
                href="tel:+420608751721"
                className={clsx(`${className || ""} text-base flex items-center gap-1.5 md:gap-2 lg:gap-2.5 transition-colors duration-300 ease-in-out ${String(className).includes("text-white") ? "" : "hover:text-[#1d4ed8]"}`)}
                onClick={onClick}>
                {children}
                {
                yes && (
                    <Fragment>
                        +420 608 751 721
                    </Fragment>
                )
                }
            </Link>
        </Fragment>
    );
};

export default PhoneLink;