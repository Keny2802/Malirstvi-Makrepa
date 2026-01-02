"use client";

import {
    useState,
    Fragment
} from "react";
import Image from "next/image";
import clsx from "clsx";

import Wrapper from "../Components/Wrapper";
import PageLabel from "../Components/PageLabel";
import Heading from "../Components/Heading";
import SubHeading from "../Components/Subheading";
import FlexCol from "../Components/FlexCol";
import FlexRow from "../Components/FlexRow";
import FixedCta from "../Components/FixedCta";

const galleryItems = [
    {
        heading: "Vymalovaná zeď restaurace na hnědo",
        desc: "Podívejte se na vymalovanou zeď restaurace na hnědo.",
        type: "Restaurace",
        image: "/Fotky/Gallery/Fotka-1.webp"
    },
    {
        heading: "Vymalovaná zeď bytu",
        desc: "Podívejte se na vymalovanou zeď na žluto, jednoho malebného bytu.",
        type: "Byt",
        image: "/Fotky/Gallery/Fotka-2.webp"
    },
    {
        heading: "Vymalovaný obývací pokoj",
        desc: "Podívejte se na krásně vymalovaný obývací pokoj.",
        type: "Dům",
        image: "/Fotky/Gallery/Fotka-3.webp"
    },
    {
        heading: "Vymalováno na bílo",
        desc: "Podívejte se na vymalovaný prostor na bílo.",
        type: "Prostor",
        image: "/Fotky/Gallery/Fotka-4.webp"
    },
    {
        heading: "Vymalováný obývací pokoj na žluto",
        desc: "Podívejte se na vymalovaná obývací pokoj, vymalovaný na žluto.",
        type: "Byt",
        image: "/Fotky/Gallery/Fotka-5.webp"
    },
    {
        heading: "Vymalované zdi u výtahu",
        desc: "Podívejte se na vymalované zdi chodby u výtahu.",
        type: "Prostor",
        image: "/Fotky/Gallery/Fotka-6.webp"
    },
    {
        heading: "Vymalovaná kuchyně",
        desc: "Podívejte se na vymalovanou kuchyňskou zeď na zeleno.",
        type: "Kuchyně",
        image: "/Fotky/Gallery/Fotka-7.webp"
    },
    {
        heading: "Vymalovaná jídelní místnost",
        desc: "Podívejte se na vymalovanou jídelní místnost.",
        type: "Jídelna",
        image: "/Fotky/Gallery/Fotka-8.webp"
    },
    {
        heading: "Vymalovaný dětský pokojíčky",
        desc: "Podívejte se na set vymalovaných dětských pokojů.",
        type: "Pokoj",
        image: "/Fotky/Gallery/Fotka-9.webp"
    },
    {
        heading: "Vymalovaná jídelna v prostorném domě.",
        desc: "Podívejte se na vymalovanou jídelnu v prostorném domě.",
        type: "Jídelna",
        image: "/Fotky/Gallery/Fotka-10.webp"
    },
    {
        heading: "Vymalovaná zeď obrázkem žirafy.",
        desc: "Podívejte se na vymalovanou zeď na žluto s obrázkem žirafy.",
        type: "Prostor",
        image: "/Fotky/Gallery/Fotka-11.webp"
    },
    {
        heading: "Školní učebna",
        desc: "Podívejte se na vymalovanou školní učebnu na oranžovo.",
        type: "Prostor",
        image: "/Fotky/Gallery/Fotka-12.webp"
    },
    {
        heading: "Vymalovaná malebná místnost",
        desc: "Podívejte se na vymalovanou malebnou místnost.",
        type: "Dům",
        image: "/Fotky/Gallery/Fotka-13.webp"
    },
    {
        heading: "Vymalovaná fasáda domu",
        desc: "Podívejte se na vymalovanou fasádu domu tyrkysovou barvou.",
        type: "Dům",
        image: "/Fotky/Gallery/Fotka-14.webp"
    },
    {
        type: "Prostor",
        image: "/Fotky/Gallery/Fotka-15.webp"
    },
    {
        type: "Prostor",
        image: "/Fotky/Gallery/Fotka-16.webp"
    },
    {
        heading: "Vymalovaný prostor",
        desc: "Podívejte se na vymalovaný prostor žlutou barvou.",
        type: "Prostor",
        image: "/Fotky/Gallery/Fotka-17.webp"
    },
    {
        heading: "Vymalovaný prostor",
        desc: "Podívejte se na vymalovaný prostor žlutou barvou.",
        type: "Prostor",
        image: "/Fotky/Gallery/Fotka-18.webp"
    },
    {
        heading: "Vymalovaná fasáda domu",
        desc: "Podívejte se na vymalovanou fasádu domu žlutou barvou.",
        type: "Dům",
        image: "/Fotky/Gallery/Fotka-19.webp"
    },
    {
        heading: "Vymalovaná zubní ordinace",
        desc: "Podívejte se na vymalovanou zubní ordinaci tmavší modrou barvou.",
        type: "Prostor",
        image: "/Fotky/Gallery/Fotka-20.webp"
    },
    {
        heading: "Vymalovaná lékarna",
        desc: "Podívejte se vymalovanou lékarnu.",
        type: "Prostor",
        image: "/Fotky/Gallery/Fotka-21.webp"
    },
    {
        heading: "Pokoj vymalovaný na hnědo",
        desc: "Podívejte se vymalovaný pokoj hnědou barvou.",
        type: "Pokoj",
        image: "/Fotky/Gallery/Fotka-22.webp"
    },
    {
        heading: "Vymalovaný pokoj na fialovo",
        desc: "Podívejte se na vymalovaný pokoj fialovou barvou.",
        type: "Pokoj",
        image: "/Fotky/Gallery/Fotka-23.webp"
    }
];

const galleryTypes = [
    "Vše",
    "Restaurace",
    "Byt",
    "Dům",
    "Prostor",
    "Kuchyně",
    "Jídelna",
    "Pokoj"
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
                <PageLabel>
                    Galerie
                </PageLabel>
                <FlexCol className="justify-center items-center text-center">
                    <Heading>
                        Naše práce mluví naprosto za vše
                    </Heading>
                    <SubHeading>
                        Podívejte se na galerii naší dosavadní práce.
                    </SubHeading>
                </FlexCol>
                {/* md:flex-row flex-wrap */}
                <FlexCol className="mt-4 md:mt-5 lg:mt-6 justify-center items-center gap-4 md:gap-5 lg:gap-6">
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
                    <FlexRow className="flex-wrap">
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
                                            <FlexCol className="justify-center items-center opacity-100 md:opacity-0 p-2 md:p-3 lg:p-4 absolute inset-0 bg-black/50 text-white md:transition-opacity md:duration-300 md:ease-in-out md:group-hover:opacity-100">
                                                <h3 className="text-lg md:text-xl lg:text-[22px] text-center font-bold">
                                                    {cardItem.heading}
                                                </h3>
                                                <p className="text-sm md:text-[15px] lg:text-base text-center max-w-3xl">
                                                    {cardItem.desc}
                                                </p>
                                            </FlexCol>
                                        </Wrapper>
                                    </Fragment>
                                );
                            })
                        }
                    </FlexRow>
                </FlexCol>
            </Wrapper>
            <FixedCta />
        </Fragment>
    );
};

export default Gallery;