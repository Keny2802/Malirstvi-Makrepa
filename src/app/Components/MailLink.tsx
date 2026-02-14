import {
    Fragment,
    ReactNode
} from "react";
import Link from "next/link";
import clsx from "clsx";

interface mailLinkType {
    className?: string;
    children?: ReactNode;
};

const MailLink = ({ ...props }: mailLinkType) => {
    const {
        className,
        children
    } = props;

    return (
        <Fragment>
            <Link
                // href="mailto:info@malirstvi-ostrava.cz"
                href="mailto:joskre@centrum.cz"
                className={clsx(`${className || ""} text-base flex items-center gap-1.5 md:gap-2 lg:gap-2.5 transition-colors duration-300 ease-in-out hover:text-[#1d4ed8]`)}>
                {children}
                {/* info@malirstvi-ostrava.cz */}
                joskre@centrum.cz
            </Link>
        </Fragment>
    );
};

export default MailLink;