"use client";

import {
    useState,
    useEffect,
    Fragment
} from "react";
import {
    GalleryItems
} from "../galerie/GalleryItems";
import Image from "next/image";

import Wrapper from "../Components/Wrapper";
import SectionAnimationWrapper from "../Components/SectionAnimationWrapper";
import PageLabel from "../Components/PageLabel";
import Heading from "../Components/Heading";
import SubHeading from "../Components/Subheading";
import FlexCol from "../Components/FlexCol";
import Flex from "../Components/Flex";
import CarouselOverlayWrapper from "../Components/CarouselOverlayWrapper";

const Gallery = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    useEffect(() => {
        const body = document.body;
        
        if (activeIndex !== null) {
            body.style.overflow = "hidden";
        } else {
            body.style.overflow = "";
        };
    }, [activeIndex]);

    return (
        <Fragment>
            <Wrapper className="px-5 py-8 md:px-8 md:py-12 lg:px-10 lg:py-14 bg-white shadow-md section">
                <SectionAnimationWrapper>
                    <PageLabel>
                        Galerie
                    </PageLabel>
                    <FlexCol className="justify-center items-center text-center">
                        <Heading>
                            Inspirace pro vaše stěny
                        </Heading>
                        <SubHeading>
                            Inspirujte se našimi realizacemi a objevte možnosti, jak oživit svůj domov.
                        </SubHeading>
                    </FlexCol>
                    <Flex className="mt-4 md:mt-6 lg:mt-8 justify-center flex-wrap">
                        {
                            GalleryItems.map((item, index) => {
                                return (
                                    <Fragment key={index}>
                                        <Image
                                        width={165}
                                        height={150}
                                        src={item.image}
                                        alt={`Malířské a natěračské práce | Malířství Makrepa Josef Krejčiřík ukázka práce ${index + 1}. Fotka`}
                                        loading="lazy"
                                        decoding="async"
                                        draggable={false}
                                        onClick={(e) => {
                                            setActiveIndex(index);
                                        }}
                                        className="w-41.25 h-37.5 object-cover cursor-pointer"
                                        />
                                    </Fragment>
                                );
                            })
                        }
                    </Flex>
                </SectionAnimationWrapper>
            </Wrapper>
            {activeIndex !== null && (
                <CarouselOverlayWrapper
                items={GalleryItems}
                startIndex={activeIndex}
                onClose={() => {
                    setActiveIndex(null);
                }}
                />
            )}
        </Fragment>
    );
};

export default Gallery;