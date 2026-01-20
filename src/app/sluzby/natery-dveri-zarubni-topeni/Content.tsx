"use client";

import {
    useState,
    useEffect,
    Fragment
} from "react";
import {
    usePathname
} from "next/navigation";
import {
    GalleryItems
} from "./GalleryItems";
import Image from "next/image";

import ContactHeader from "@/app/Components/ContactHeader";
import Header from "@/app/Components/Header";
import PathLink from "@/app/Components/PathLink";
import Wrapper from "@/app/Components/Wrapper";
import PageLabel from "@/app/Components/PageLabel";
import FlexCol from "@/app/Components/FlexCol";
import Flex from "@/app/Components/Flex";
import CarouselOverlayWrapper from "@/app/Components/CarouselOverlayWrapper";
import Heading from "@/app/Components/Heading";
import Subheading from "@/app/Components/Subheading";
import Cta from "@/app/Sections/Cta";
import Contact from "@/app/Sections/Contact";
import Footer from "@/app/Sections/Footer";

const Content = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const pathName = usePathname();
    
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
            <ContactHeader />
            <Header />
            <PathLink
            rootHref="/"
            rootLink="Domov"
            folderHref="/sluzby"
            folderLink="Služby"
            siteHref={pathName}
            siteLink="Nátěry dveří, zárubní topení"
            />
            <Wrapper className="px-5 py-8 md:px-8 md:py-12 lg:px-10 lg:py-14 bg-white shadow-md">
                <PageLabel>
                    Nátěry dveří, zárubní topení
                </PageLabel>
                <FlexCol className="justify-center items-center text-center">
                     <Heading>
                        Nátěry dveří, zárubní topení
                        {/* Profesionální nátěry dveří, zárubní a topení */}
                        {/* Nové obnovené nátěry */}
                    </Heading>
                    <Subheading>
                        {/* Zde se podívejte realizované práce nátěrů dveří a zárubního topení. */}
                        Obnovte vzhled svého interiéru s hladkými a odolnými nátěry, které vydrží a dodají prostoru elegantní vzhled.
                    </Subheading>
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
            </Wrapper>
            <Cta />
            <Contact />
            <Footer />
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

export default Content;