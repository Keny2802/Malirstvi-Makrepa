import {
    Fragment
} from "react";
import Image from "next/image";
import clsx from "clsx";

import Wrapper from "./Wrapper";

interface ImgType {
    className?: string;
    width: number;
    height: number;
    src: string;
    alt: string;
    effect: boolean;
};

const Img = ({ ...props }: ImgType) => {
    const {
        className,
        width,
        height,
        src,
        alt,
        effect
    } = props;

    return (
        <Fragment>
            <Wrapper className={clsx("overflow-hidden rounded-md")}>
                <Image
                width={width}
                height={height}
                src={src}
                alt={alt}
                loading="lazy"
                decoding="async"
                draggable={false}
                className={clsx(
                effect ? "w-full h-full object-cover cursor-pointer transition-transform duration-300 ease-in-out group-hover:scale-110" : null,
                className)}
                />
            </Wrapper>
        </Fragment>
    );
};

export default Img;