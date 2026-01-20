"use client"

import {
    Fragment,
    ReactNode
} from "react";
import {
    motion
} from "framer-motion";
import clsx from "clsx";

type props = {
    className?: string;
    children: ReactNode;
};

const SectionAnimationWrapper = ({ ...props }: props) => {
    const {
        className,
        children
    } = props;

    return (
        <Fragment>
            <motion.div
            initial={{
                opacity: 0,
                y: 40,
            }}
            whileInView={{
                opacity: 1,
                y: 0
            }}
            transition={{
                duration: 1,
                ease: "easeInOut"
            }}
            viewport={{
                once: false
            }}
            className={clsx("section-animation-wrapper", className)}>
                {children}
            </motion.div>
        </Fragment>
    );
};

export default SectionAnimationWrapper;