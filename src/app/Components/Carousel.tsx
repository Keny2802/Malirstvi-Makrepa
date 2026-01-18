"use client";

import {
    useState,
    useEffect,
    Fragment
} from "react";
import {
    ChevronLeftIcon,
    ChevronRightIcon
} from "@heroicons/react/24/solid";
import Image from "next/image";

import Wrapper from "./Wrapper";
import FlexCol from "../Components/FlexCol";
import FlexRow from "../Components/FlexRow";
import Icon from "../Components/Icon";

type CarouselItem = {
    image: string;
    heading?: string;
    desc?: string;
};

type CarouselType = {
    carouselSet: CarouselItem[];
};

const Carousel = ({ ...props }: CarouselType) => {
    const {
        carouselSet
    } = props;

    const [currentPhoto, setCurrentPhoto] = useState<number>(0);
    const [isMobile, setMobile] = useState<boolean>(false);
    
    useEffect(() => {
        const handleKeyDown = (evt: KeyboardEvent) => {
            if (evt.key === "ArrowRight") {
                nextSlide();
            };

            if (evt.key === "ArrowLeft") {
                prevSlide();
            };
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    useEffect(() => {
        const checkScreen = () => {
            setMobile(window.innerWidth < 768);
        };

        checkScreen();
        window.addEventListener("resize", checkScreen);

        return () => {
            window.removeEventListener("resize", checkScreen);
        };
    }, []);

    const nextSlide = () => {
        setCurrentPhoto(prev => (prev + 1) % carouselSet.length);
    };

    const prevSlide = () => {
        setCurrentPhoto(prev => prev === 0 ? carouselSet.length - 1 : prev - 1);
    };

    return (
        <Fragment>
            <FlexRow className="relative justify-center items-center">
                <button
                onClick={prevSlide}
                className="absolute left-0 translate-y-1/2 z-10 p-2 md:p-3 lg:p-4 bg-black/50 text-white rounded-full">
                    <Icon className="cursor-pointer">
                        <ChevronLeftIcon />
                    </Icon>
                </button>
                <button
                onClick={(nextSlide)}
                className="absolute right-0 translate-y-1/2 z-10 p-2 md:p-3 lg:p-4 bg-black/50 text-white rounded-full">
                    <Icon className="cursor-pointer">
                        <ChevronRightIcon />
                    </Icon>
                </button>
            </FlexRow>
            <Wrapper className="overflow-hidden w-full md:w-150 h-max mx-auto">
                <Wrapper
                className="flex transition-transform duration ease-in-out"
                style={{
                    transform: isMobile ?
                    `translateX(-${currentPhoto * 100}%)`
                    :
                    `translateX(-${currentPhoto * 600}px)`
                }}>
                    {
                        carouselSet.map((cardItem, index) => {
                            return (
                                <Fragment
                                key={index}>
                                    <Wrapper className="w-full md:w-150 shrink-0 p-2 md:p-3 lg:p-4">
                                        <Wrapper className="relative group overflow-hidden rounded-2xl w-full cursor-pointer">
                                            <Image
                                            width={600}
                                            height={600}
                                            src={cardItem.image}
                                            alt={cardItem.heading || `Ukázka malířské a natěračské práce ${index + 1}. fotka ukázky | Malířství Makrepa Josef Krejčiřík`}
                                            loading="lazy"
                                            decoding="async"
                                            draggable={false}
                                            className="w-full object-cover"
                                            />
                                            <FlexCol
                                            className="justify-center items-center opacity-100 md:opacity-0 p-2 md:p-3 lg:p-4 absolute inset-0 bg-black/50 text-white md:transition-opacity md:duration-300 md:ease-in-out md:group-hover:opacity-100">
                                                <h3 className="text-lg md:text-xl lg:text-[22px] text-center font-bold">
                                                    {cardItem.heading}
                                                </h3>
                                                <p className="text-sm md:text-[15px] lg:text-base text-center max-w-3xl">
                                                    {cardItem.desc}
                                                </p>
                                            </FlexCol>
                                        </Wrapper>
                                    </Wrapper>
                                </Fragment>
                            );
                        })
                    }
                </Wrapper>
            </Wrapper>
        </Fragment>
    );
};

export default Carousel;