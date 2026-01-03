"use client";

import {
    useState,
    Fragment
} from "react";
import {
    usePathname
} from "next/navigation";
import clsx from "clsx";

import ContactHeader from "@/app/Components/ContactHeader";
import Header from "@/app/Components/Header";
import PathLink from "@/app/Components/PathLink";
import Wrapper from "@/app/Components/Wrapper";
import PageLabel from "@/app/Components/PageLabel";
import FlexCol from "@/app/Components/FlexCol";
import FlexRow from "@/app/Components/FlexRow";
import Img from "@/app/Components/Img";
import Heading from "@/app/Components/Heading";
import Subheading from "@/app/Components/Subheading";
import Cta from "@/app/Sections/Cta";
import Contact from "@/app/Sections/Contact";
import Footer from "@/app/Sections/Footer";

const galleryItems = [
    {
        heading: "Vymalovaný pokoj v teplé tmavě modré barvě.",
        type: "Pokoj",
        image: "/Fotky/Services/malirske-prace/Fotka-1.webp"
    },
    {
        heading: "Vymalovaný pokoj v elegantní zelené barvě.",
        type: "Pokoj",
        image: "/Fotky/Services/malirske-prace/Fotka-2.webp"
    },
    {
        heading: "Vymalovaný útulný obývací pokoj.",
        type: "Obývací pokoj",
        image: "/Fotky/Services/malirske-prace/Fotka-3.webp"
    },
    {
        heading: "Čistě a poctvivě vymalovaná chodba v bytovém domě.",
        type: "Chodba",
        image: "/Fotky/Services/malirske-prace/Fotka-4.webp"
    },
    {
        heading: "Moderně vymalovaný obývací pokoj červeně natřenou barvou.",
        type: "Obývací pokoj",
        image: "/Fotky/Services/malirske-prace/Fotka-5.webp"
    },
    {
        heading: "Vymalovaná Mateřská školka",
        type: "Prostor",
        image: "/Fotky/Services/malirske-prace/Fotka-6.webp"
    },
    {
        heading: "Obyvací pokoj natřeno červenou barvou.",
        type: "Obývací pokoj",
        image: "/Fotky/Services/malirske-prace/Fotka-7.webp"
    },
    {
        heading: "Útulný obývací pokoj vymalovaný růžovou barvou.",
        type: "Obývací pokoj",
        image: "/Fotky/Services/malirske-prace/Fotka-8.webp"
    },
    {
        heading: "Chodba vymalovaná s malířskou poctivostí.",
        type: "Chodba",
        image: "/Fotky/Services/malirske-prace/Fotka-9.webp"
    },
    {
        heading: "Vymalovaný obývací pokoj uprostřed toho hezký krb.",
        type: "Obývací pokoj",
        image: "/Fotky/Services/malirske-prace/Fotka-10.webp"
    },
];

const galleryTypes = [
    "Vše",
    "Pokoj",
    "Obývací pokoj",
    "Chodba",
    "Prostor"
] as const;

type galleryType = typeof galleryTypes[number];

const Page = () => {
    const pathName = usePathname();
    const [activeGalleryTab, setActiveGalleryTab] = useState<galleryType>(galleryTypes[0]);
    const filteredGallery = activeGalleryTab === "Vše"
    ? galleryItems
    : galleryItems.filter(
        (galleryItem) => galleryItem.type === activeGalleryTab
    );

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
            siteLink="Malířské práce"
            />
            <Wrapper className="px-5 py-8 md:px-8 md:py-12 lg:px-10 lg:py-14 bg-white shadow-md">
                <PageLabel>
                    Malířské práce
                </PageLabel>
                <FlexCol className="justify-center items-center text-center">
                     <Heading>
                        Kvalitní malířské práce
                    </Heading>
                    <Subheading>
                        Podívejte se na naše již realizované kvalitní a zodpovědné malířské práce.
                    </Subheading>
                </FlexCol>
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
                                            <Img
                                            width={250}
                                            height={250}
                                            src={cardItem.image}
                                            alt={cardItem.heading}
                                            effect={true}
                                            className="min-w-80 min-h-80 max-w-100 max-h-100 md:w-62.5 md:max-w-75 md:h-62.5 md:max-h-75 rounded-2xl object-cover"
                                            />
                                            <FlexCol className="justify-center items-center opacity-100 md:opacity-0 p-2 md:p-3 lg:p-4 absolute inset-0 bg-black/50 text-white md:transition-opacity md:duration-300 md:ease-in-out md:group-hover:opacity-100">
                                                <h3 className="text-lg md:text-xl lg:text-[22px] text-center font-bold">
                                                    {cardItem.heading}
                                                </h3>
                                            </FlexCol>
                                        </Wrapper>
                                    </Fragment>
                                );
                            })
                        }
                    </FlexRow>
                </FlexCol>
            </Wrapper>
            <Cta />
            <Contact />
            <Footer />
        </Fragment>
    );
};

export default Page;