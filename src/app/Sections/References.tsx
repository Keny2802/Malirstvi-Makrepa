import {
    Fragment
} from "react";

import Wrapper from "../Components/Wrapper";
import PageLabel from "../Components/PageLabel";
import FlexCol from "../Components/FlexCol";
import Heading from "../Components/Heading";
import SubHeading from "../Components/Subheading";
import FlexRow from "../Components/FlexRow";
import Img from "../Components/Img";
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
                        Reference našich klientů mluví za nás
                    </Heading>
                    <SubHeading>
                        Přečtěte si co nás říkají naši klienti.
                    </SubHeading>
                </FlexCol>
                <FlexRow className="flex-wrap">
                    {
                        [
                            {
                                heading: "ZŠ, Ostrava - Výškovice",
                                desc: "Firmu pana Krejčiříka jsme si na školu objednali za účelem renovace školních tabulí a dveří. S jeho prací jsme byli velmi spokojeni, vše bylo spolehlivě provedeno v domluveném termínu, ve výborné kvalitě a v dostupné ceně. Mohu doporučit..",
                                image: "/Fotky/Gallery/Fotka-18.webp"
                            },
                            {
                                heading: "Yolo coffee",
                                desc: "Dobrý den. Rád bych poděkoval za exkluzivní služby. Jednalo se o vymalování kavárny v docela šibeničním termínu. Bylo mi vyhověno na plné čáře. Dostali jsme vzorník, kde jsme si vybrali barvy a pár dní na to se začalo malovat. Malba je luxusní, kvalitní, zkrátka bez chyb. Preciznost opravdu zaručena.",
                                image: "/Fotky/Gallery/Fotka-1.webp"
                            },
                            {
                                heading: "Barbora Moravcová",
                                desc: "Mám krásnou čistě bílou kuchyňku. Jako nová. Díky Pánům Krejčiříkům je ze staré kuchyně po babičče vzdušná, prostorná a sluncem zalitá kuchyně. Jsou vstřícní, laskaví, ochotní, pracovití a hlavně šikovní. Těším se na další spolupráci..",
                                image: "/Fotky/Gallery/Fotka-7.webp"
                            },
                            // {
                            //     heading: "Dětské pokoje",
                            //     desc: "Vymalované dětské pokoje.",
                            //     image: "/Fotky/Gallery/Fotka-9.webp"
                            // },
                            // {
                            //     heading: "Fasáda domu",
                            //     desc: "Vymalovaná fasáda domu.",
                            //     image: "/Fotky/Gallery/Fotka-14.webp"
                            // },
                            {
                                heading: "Jana Glogarová",
                                desc: "Jsem velice spokojena s vymalováním obývacího pokoje, který byl ve velmi špatném stavu. Nyní obývací pokoj jen září :-) . V příštím roce se budu těšit na další spolupráci s velmi příjemným a ochotným přístupem malířů této firmy. :-)",
                                image: "/Fotky/Gallery/Fotka-3.webp"
                            },
                            // {
                            //     heading: "Zubní ordinace",
                            //     desc: "Vymalovaná zubní ordinace.",
                            //     image: "/Fotky/Gallery/Fotka-20.webp"
                            // },
                            // {
                            //     heading: "Lékarna",
                            //     desc: "Vymalovaná lékarna.",
                            //     image: "/Fotky/Gallery/Fotka-21.webp"
                            // },
                        ].map((cardItem, cardItemIndex) => {
                            return (
                                <Fragment key={cardItemIndex}>
                                    <Wrapper className="relative group overflow-hidden rounded-2xl cursor-pointer min-w-80 min-h-80 max-w-100 max-h-100 md:w-62.5 md:max-w-75 md:h-62.5 md:max-h-75">
                                        <Img
                                        width={250}
                                        height={250}
                                        src={cardItem.image}
                                        alt={`${cardItem.heading}`}
                                        effect={true}
                                        className="min-w-80 min-h-80 max-w-100 max-h-100 md:w-62.5 md:max-w-75 md:h-62.5 md:max-h-75"
                                        />
                                        <FlexCol className="opacity-100 md:opacity-0 p-2 md:p-3 lg:p-4 absolute inset-0 justify-center items-center bg-black/50 text-white md:transition-opacity md:duration-300 md:ease-in-out md:group-hover:opacity-100">
                                            <h3 className="text-lg md:text-xl lg:text-[22px] text-center font-bold">
                                                Autor: {cardItem.heading}
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
            </Wrapper>
            <FixedCta />
        </Fragment>
    );
};

export default References;