import {
    Fragment,
    ReactNode
} from "react";
import Link from "next/link";
import clsx from "clsx";

interface mapLinkType {
    className?: string;
    children?: ReactNode;
};

const MapLink = ({ ...props }: mapLinkType) => {
    const {
        className,
        children
    } = props;

    return (
        <Fragment>
            <Link
            href="https://mapy.com/cs/zakladni?source=addr&id=8848329&x=18.2424998&y=49.8012848&z=17"
            rel="noopener noreffer"
            target="_blank"
            className={clsx(`${className || ""} text-base flex items-center gap-1.5 md:gap-2 lg:gap-2.5 transition-colors duration-300 ease-in-out hover:text-[#1d4ed8]`)}>
                {children}
                Jugoslávská 2816/37, 700 30 Ostrava - Zábřeh, Česko
            </Link>
        </Fragment>
    );
};

export default MapLink;