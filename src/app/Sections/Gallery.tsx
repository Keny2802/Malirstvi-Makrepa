"use client";

import {
    useState,
    Fragment
} from "react";
import Image from "next/image";
import clsx from "clsx";

import Wrapper from "../Components/Wrapper";

const galleryItems = [
    {
        heading: "Vymalovaná zeď restaurace na hnědo",
        desc: "Podívejte se na vymalovanou zeď restaurace na hnědo.",
        type: "Restaurace",
        image: "/Fotky/Gallery/Fotka-1.jpg"
    },
    {
        heading: "Vymalovaná zeď bytu",
        desc: "Podívejte se na vymalovanou zeď na žluto, jednoho malebného bytu.",
        type: "Byt",
        image: "/Fotky/Gallery/Fotka-2.jpg"
    },
    {
        heading: "Vymalovaný obývací pokoj",
        desc: "Podívejte se na krásně vymalovaný obývací pokoj.",
        type: "Dům",
        image: "/Fotky/Gallery/Fotka-3.jpg"
    },
    {
        heading: "Vymalováno na bílo",
        desc: "Podívejte se na vymalovaný prostor na bílo.",
        type: "Prostor",
        image: "/Fotky/Gallery/Fotka-4.jpg"
    },
    {
        heading: "Vymalováný obývací pokoj na žluto",
        desc: "Podívejte se na vymalovaná obývací pokoj, vymalovaný na žluto.",
        type: "Byt",
        image: "/Fotky/Gallery/Fotka-5.jpg"
    },
    {
        heading: "Vymalované zdi u výtahu",
        desc: "Podívejte se na vymalované zdi chodby u výtahu.",
        type: "Prostor",
        image: "/Fotky/Gallery/Fotka-6.jpg"
    },
    {
        heading: "Vymalovaná kuchyně",
        desc: "Podívejte se na vymalovanou kuchyňskou zeď na zeleno.",
        type: "Kuchyně",
        image: "/Fotky/Gallery/Fotka-7.jpg"
    },
    {
        heading: "Vymalovaná jídelní místnost",
        desc: "Podívejte se na vymalovanou jídelní místnost.",
        type: "Jídelna",
        image: "/Fotky/Gallery/Fotka-8.jpg"
    }
];

const galleryTypes = [
    "Vše",
    "Restaurace",
    "Byt",
    "Dům",
    "Prostor",
    "Kuchyně",
    "Jídelna"
] as const;

type galleryType = typeof galleryTypes[number];

const Gallery = () => {
    const [activeGalleryTab, setActiveGalleryTab] = useState<galleryType>(galleryTypes[0]);
    const filteredGallery = activeGalleryTab === "Vše"
    ? galleryItems
    : galleryItems.filter(
        (galleryItem) => galleryItem.type === activeGalleryTab
    );

    return (
        <Fragment>
            <Wrapper className="px-5 py-8 md:px-8 md:py-12 lg:px-10 lg:py-14 bg-white shadow-md section">
                <Wrapper className="flex justify-center items-center flex-col gap-1.5 md:gap-2 lg:gap-2.5 text-center">
                    <h2 className="text-3xl md:text-[42px] lg:text-5xl font-extrabold">
                        Naše práce mluví naprosto za vše
                    </h2>
                    <p className="text-base md:text-[17px] lg:text-lg text-center max-w-3xl">
                        Podívejte se na galerii naší dosavadní práce.
                    </p>
                </Wrapper>
                {/* md:flex-row flex-wrap */}
                <Wrapper className="mt-4 md:mt-5 lg:mt-6 flex justify-center items-center flex-col gap-4 md:gap-5 lg:gap-6">
                    <Wrapper className="flex justify-center items-center flex-wrap gap-4 md:gap-5 lg:gap-6">
                        {
                            galleryTypes.map((galleryType, galleryTypeIndex) => {
                                return (
                                    <Fragment key={galleryTypeIndex}>
                                        <button
                                        className={clsx(`${activeGalleryTab === galleryType ? "border border-[#1d4ed8] bg-[#1d4ed8] text-white" : "border border-gray-200 bg-white text-black hover:bg-[#1d4ed8] hover:text-white"} p-2 md:p-2.5 lg:p-3 rounded-md cursor-pointer transition-colors duration-300 ease-in-out`)}
                                        onClick={(e) => {
                                            setActiveGalleryTab(galleryType);
                                        }}>
                                            {galleryType}
                                        </button>
                                    </Fragment>
                                );
                            })
                        }
                    </Wrapper>
                    <Wrapper className="flex justify-center items-center flex-wrap flex-col md:flex-row gap-4 md:gap-5 lg:gap-6">
                        {
                            filteredGallery.map((cardItem, cardItemIndex) => {
                                return (
                                    <Fragment key={cardItemIndex}>
                                        <Wrapper className="relative group overflow-hidden rounded-2xl cursor-pointer min-w-80 min-h-80 max-w-100 max-h-100 md:w-62.5 md:max-w-75 md:h-62.5 md:max-h-75">
                                            <Image
                                            width={250}
                                            height={250}
                                            src={cardItem.image}
                                            alt={`Fotka - ${cardItem.heading}`}
                                            loading="lazy"
                                            decoding="async"
                                            draggable={false}
                                            className="min-w-80 min-h-80 max-w-100 max-h-100 md:w-62.5 md:max-w-75 md:h-62.5 md:max-h-75 rounded-2xl object-cover"
                                            />
                                            <Wrapper className="opacity-100 md:opacity-0 p-2 md:p-3 lg:p-4 absolute inset-0 flex justify-center items-center flex-col gap-2.5 md:gap-3 lg:gap-4 bg-black/50 text-white md:transition-opacity md:duration-300 md:ease-in-out md:group-hover:opacity-100">
                                                <h3 className="text-lg md:text-xl lg:text-[22px] text-center font-bold">
                                                    {cardItem.heading}
                                                </h3>
                                                <p className="text-sm md:text-[15px] lg:text-base text-center max-w-3xl">
                                                    {cardItem.desc}
                                                </p>
                                            </Wrapper>
                                        </Wrapper>
                                    </Fragment>
                                );
                            })
                        }
                    </Wrapper>
                </Wrapper>
            </Wrapper>
        </Fragment>
    );
};

export default Gallery;