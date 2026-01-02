import {
    Fragment
} from "react";
import Link from "next/link";
import clsx from "clsx";

interface pathLinkType {
    rootHref: string;
    rootLink: string;
    folderHref?: string;
    folderLink?: string;
    siteHref?: string;
    siteLink?: string;
    className?: string | "";
};

const PathLink = ({ ...props }: pathLinkType) => {
    const {
        rootHref,
        rootLink,
        folderHref,
        folderLink,
        siteHref,
        siteLink,
        className
    } = props;

    return (
        <Fragment>
            <ul className={clsx(`${className} flex items-center gap-2 md:gap-2.5 lg:gap-3 path-links-list`)}>
                <li className="relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-0.75 after:w-full after:bg-[#1d4ed8] after:scale-[0_1] after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-[1_1] path-item">
                    <Link
                    href={rootHref}
                    className="text-[#313131] text-base md:text-[17px] lg:text-lg transition-colors duration-300 ease-in-out hover:text-[#1d4ed8] path-link">
                        {rootLink}
                    </Link>
                </li>
                {
                    folderHref && folderLink && (
                        <Fragment>
                            <span>
                                /
                            </span>
                            <li className="relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-0.75 after:w-full after:bg-[#1d4ed8] after:scale-[0_1] after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-[1_1] path-item">
                                <Link
                                href={folderHref}
                                className="text-[#313131] text-base md:text-[17px] lg:text-lg transition-colors duration-300 ease-in-out hover:text-[#1d4ed8] path-link">
                                    {folderLink}
                                </Link>
                            </li>
                        </Fragment>
                    )
                }
                {
                siteHref && siteLink && (
                    <Fragment>
                        <span>
                            /
                        </span>
                        <li className="relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-0.75 after:w-full after:bg-[#1d4ed8] after:scale-[0_1] after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-[1_1] path-item">
                            <Link
                            href={siteHref}
                            className="text-[#313131] text-base md:text-[17px] lg:text-lg transition-colors duration-300 ease-in-out hover:text-[#1d4ed8] path-link">
                                {siteLink}
                            </Link>
                        </li>
                    </Fragment>
                )
                }
            </ul>
        </Fragment>
    );
};

export default PathLink;