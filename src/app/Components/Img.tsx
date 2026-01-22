import {
    Fragment,
    Suspense
} from "react";
import Image from "next/image";
import clsx from "clsx";

type ImageType = {
    className?: string;
    width: number;
    height: number;
    src: string;
    alt: string;
    loading: any;
};

const Img = ({ ...props }: ImageType) => {
    const {
        className,
        width,
        height,
        src,
        alt,
        loading
    } = props;
    <Fragment>
        <Image
        width={width}
        height={height}
        src={src}
        alt={alt}
        loading={!loading ? "lazy" : loading}
        draggable={false}
        className={clsx(className)}
        />
    </Fragment>
};

export default Img;