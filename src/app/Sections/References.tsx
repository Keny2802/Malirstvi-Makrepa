import {
    Fragment
} from "react";
import Image from "next/image";

import Wrapper from "../Components/Wrapper";
import PageLabel from "../Components/PageLabel";
import FlexCol from "../Components/FlexCol";
import Heading from "../Components/Heading";
import SubHeading from "../Components/Subheading";
import FlexRow from "../Components/FlexRow";
import FixedCta from "../Components/FixedCta";

const References = () => {
    return (
        <Fragment>
            <Wrapper
            className="px-5 py-8 md:px-8 md:py-12 lg:px-10 lg:py-14 bg-white shadow-md section"
            id="reference">
                <PageLabel>
                    Reference
                </PageLabel>
                <FlexCol className="justify-center items-center text-center">
                    <Heading>
                        {/* Reference našich klientů mluví za nás */}
                        Co o nás říkají zákazníci
                    </Heading>
                    <SubHeading>
                        {/* Přečtěte si co nás říkají naši klienti. */}
                        Skutečné zkušenosti a hodnocení našich klientů z různých projektů.
                    </SubHeading>
                </FlexCol>
                <FlexRow className="justify-center items-center flex-wrap">
                    {
                        [
                            {
                                heading: "ZŠ Ostrava  Výškovice",
                                desc: "Firmu pana Krejčiříka jsme si objednali pro renovaci školních tabulí a dveří. Vše bylo provedeno spolehlivě, v domluveném termínu, ve výborné kvalitě a za dostupnou cenu. Mohu doporučit.",
                                image: "/Fotky/Gallery/Fotka-18.webp"
                            },
                            {
                                heading: "Yolo Coffee",
                                desc: "Rád bych poděkoval za exkluzivní služby. Vymalování kavárny proběhlo i přes krátký termín hladce. Malba je kvalitní a precizní, přesně podle vzorníku, který jsme si vybrali.",
                                image: "/Fotky/Gallery/Fotka-1.webp"
                            },
                            {
                                heading: "Barbora Moravcová",
                                desc: "Mám krásnou, čistě bílou kuchyň. Díky pánům Krejčiříkům je stará kuchyně proměněna na prostornou a sluncem zalitou místnost. Velmi vstřícní, ochotní a šikovní. Těším se na další spolupráci.",
                                image: "/Fotky/Gallery/Fotka-7.webp"
                            },
                            {
                                heading: "Jana Glogarová",
                                desc: "Velmi spokojena s vymalováním obývacího pokoje, který byl ve špatném stavu. Nyní pokoj jen září. Skvělá spolupráce s příjemným a ochotným přístupem malířů.",
                                image: "/Fotky/Gallery/Fotka-3.webp"
                            }
                        ].map((cardItem, cardItemIndex) => {
                            return (
                                <Fragment key={cardItemIndex}>
                                    <FlexCol className="justify-center items-center">
                                        <Image
                                        width={250}
                                        height={250}
                                        src={cardItem.image}
                                        alt={`${cardItem.heading}`}
                                        className="min-w-80 min-h-80 max-w-100 max-h-100 md:w-62.5 md:max-w-75 md:h-62.5 md:max-h-75 object-cover rounded-2xl"
                                        />
                                        <FlexCol className="max-w-75">
                                            <h3 className="text-lg md:text-xl lg:text-[22px] text-center font-bold">
                                                {cardItem.heading}
                                            </h3>
                                            <p className="text-sm md:text-[15px] lg:text-base text-center max-w-3xl">
                                                {cardItem.desc}
                                            </p>
                                        </FlexCol>
                                    </FlexCol>
                                </Fragment>
                            );
                        })
                    }
                </FlexRow>
            </Wrapper>
            <FixedCta />
        </Fragment>
    );
};

export default References;