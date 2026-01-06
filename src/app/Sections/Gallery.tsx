import {
    Fragment
} from "react";
import Image from "next/image";

import "yet-another-react-lightbox/styles.css";

import Wrapper from "../Components/Wrapper";
import PageLabel from "../Components/PageLabel";
import Heading from "../Components/Heading";
import SubHeading from "../Components/Subheading";
import FlexCol from "../Components/FlexCol";
import FlexRow from "../Components/FlexRow";
import Flex from "../Components/Flex";

const galleryItems = [
    {
        heading: "Vymalovaná restaurace",
        desc: "Elegantní a čisté malby restaurace pro příjemnou atmosféru.",
        type: "Restaurace",
        image: "/Fotky/Gallery/Fotka-1.webp"
    },
    {
        heading: "Vymalovaný obývací pokoj",
        desc: "Pohodlný a svěží interiér díky preciznímu malování.",
        type: "Byt",
        image: "/Fotky/Gallery/Fotka-2.webp"
    },
    {
        heading: "Obývací pokoj pro domácí mazlíčky",
        desc: "Praktické a krásné malby, které vydrží i při domácích mazlíčcích.",
        type: "Dům",
        image: "/Fotky/Gallery/Fotka-3.webp"
    },
    {
        heading: "Vymalované jídelní studio",
        desc: "Jídelní prostor s čistými stěnami a moderním designem.",
        type: "Prostor",
        image: "/Fotky/Gallery/Fotka-4.webp"
    },
    {
        heading: "Útulný obývací pokoj",
        desc: "Teplé a příjemné tóny pro dokonalou atmosféru domova.",
        type: "Byt",
        image: "/Fotky/Gallery/Fotka-5.webp"
    },
    {
        heading: "Prostory plastické chirurgie",
        desc: "Moderní a sterilní vzhled s hladkými nástřiky stěn.",
        type: "Prostor",
        image: "/Fotky/Gallery/Fotka-6.webp"
    },
    {
        heading: "Vymalovaná kuchyně",
        desc: "Barevné a praktické řešení stěn v kuchyni.",
        type: "Kuchyně",
        image: "/Fotky/Gallery/Fotka-7.webp"
    },
    {
        heading: "Vymalovaná jídelna",
        desc: "Příjemné tóny pro pohodové stolování a rodinnou pohodu.",
        type: "Jídelna",
        image: "/Fotky/Gallery/Fotka-8.webp"
    },
    {
        heading: "Dětský pokoj",
        desc: "Veselé barvy a bezpečné malby pro děti.",
        type: "Pokoj",
        image: "/Fotky/Gallery/Fotka-9.webp"
    },
    {
        heading: "Jídelna v prostorném domě",
        desc: "Elegantní malby pro moderní jídelní prostor.",
        type: "Jídelna",
        image: "/Fotky/Gallery/Fotka-10.webp"
    },
    {
        heading: "Vymalovaná zeď s obrázkem žirafy",
        desc: "Kreativní malba na zeď, která zaujme děti i dospělé.",
        type: "Prostor",
        image: "/Fotky/Gallery/Fotka-11.webp"
    },
    {
        heading: "Školní učebna",
        desc: "Funkční a inspirativní prostředí pro školáky.",
        type: "Prostor",
        image: "/Fotky/Gallery/Fotka-12.webp"
    },
    {
        heading: "Malebná místnost",
        desc: "Příjemné barvy pro útulný a harmonický interiér.",
        type: "Dům",
        image: "/Fotky/Gallery/Fotka-13.webp"
    },
    {
        heading: "Fasáda domu",
        desc: "Krásná a odolná fasáda domu v moderních tónech.",
        type: "Dům",
        image: "/Fotky/Gallery/Fotka-14.webp"
    },
    {
        heading: "Španělská technologie Gotele",
        desc: "Hladké a elegantní stěny s moderní španělskou technologií.",
        type: "Technologie Gotele",
        image: "/Fotky/Gallery/Fotka-15.webp"
    },
    {
        heading: "Španělská technologie Gotele",
        desc: "Dokonalá struktura stěn pro dlouhotrvající vzhled.",
        type: "Technologie Gotele",
        image: "/Fotky/Gallery/Fotka-16.webp"
    },
    {
        heading: "Prostor mateřské školky",
        desc: "Veselé a bezpečné malby pro děti v školce.",
        type: "Prostor",
        image: "/Fotky/Gallery/Fotka-17.webp"
    },
    {
        heading: "Prostor mateřské školky",
        desc: "Živé barvy pro hravé a inspirativní prostředí.",
        type: "Prostor",
        image: "/Fotky/Gallery/Fotka-18.webp"
    },
    {
        heading: "Fasáda domu",
        desc: "Odolná a krásná fasáda v živých barvách.",
        type: "Dům",
        image: "/Fotky/Gallery/Fotka-19.webp"
    },
    {
        heading: "Zubní ordinace",
        desc: "Moderní a čistý vzhled stěn pro profesionální prostředí.",
        type: "Prostor",
        image: "/Fotky/Gallery/Fotka-20.webp"
    },
    {
        heading: "Lékárna",
        desc: "Hygienické a světlé malby vhodné pro veřejné prostory.",
        type: "Prostor",
        image: "/Fotky/Gallery/Fotka-21.webp"
    },
    {
        // heading: "Pokoj vymalovaný hnědou",
        desc: "Teplé a uklidňující tóny pro pohodlný interiér.",
        type: "Pokoj",
        image: "/Fotky/Gallery/Fotka-22.webp"
    },
    {
        // heading: "Pokoj vymalovaný fialovou",
        desc: "Elegantní a stylové barevné řešení pro pokoj.",
        type: "Pokoj",
        image: "/Fotky/Gallery/Fotka-23.webp"
    }
];

const Gallery = () => {
    return (
        <Fragment>
            <Wrapper className="px-5 py-8 md:px-8 md:py-12 lg:px-10 lg:py-14 bg-white shadow-md section">
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
                {/* md:flex-row flex-wrap */}
                <FlexCol className="mt-4 md:mt-5 lg:mt-6 justify-center items-center gap-4 md:gap-5 lg:gap-6">
                    <FlexRow className="flex-wrap">
                        {
                            galleryItems.map((cardItem, cardItemIndex) => {
                                return (
                                    <Fragment key={cardItemIndex}>
                                        <Wrapper className="relative group overflow-hidden rounded-2xl cursor-pointer min-w-80 min-h-80 max-w-100 max-h-100 md:w-62.5 md:max-w-75 md:h-62.5 md:max-h-75">
                                            <Image
                                            width={250}
                                            height={250}
                                            src={cardItem.image}
                                            alt={`${cardItem.heading}`}
                                            className="min-w-80 min-h-80 max-w-100 max-h-100 md:w-62.5 md:max-w-75 md:h-62.5 md:max-h-75 object-cover"
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
        </Fragment>
    );
};

export default Gallery;