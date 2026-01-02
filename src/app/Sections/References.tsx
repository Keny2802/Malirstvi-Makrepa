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
                                heading: "ZŠ - Mezi Stromy",
                                desc: "Malování školních prostor.",
                                image: "/Fotky/Gallery/Fotka-18.webp"
                            },
                            {
                                heading: "Yolo coffee",
                                desc: "Vymalování prostor",
                                image: "/Fotky/Gallery/Fotka-1.webp"
                            },
                            {
                                heading: "Kuchyně domu",
                                desc: "Vymalovaná kuchyně domu.",
                                image: "/Fotky/Gallery/Fotka-7.webp"
                            },
                            {
                                heading: "Dětské pokoje",
                                desc: "Vymalované dětské pokoje.",
                                image: "/Fotky/Gallery/Fotka-9.webp"
                            },
                            {
                                heading: "Fasáda domu",
                                desc: "Vymalovaná fasáda domu.",
                                image: "/Fotky/Gallery/Fotka-14.webp"
                            },
                            {
                                heading: "Obývací pokoj",
                                desc: "Vymalovaný obývací pokoj.",
                                image: "/Fotky/Gallery/Fotka-3.webp"
                            },
                            {
                                heading: "Zubní ordinace",
                                desc: "Vymalovaná zubní ordinace.",
                                image: "/Fotky/Gallery/Fotka-20.webp"
                            },
                            {
                                heading: "Lékarna",
                                desc: "Vymalovaná lékarna.",
                                image: "/Fotky/Gallery/Fotka-21.webp"
                            },
                        ].map((cardItem, cardItemIndex) => {
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
                                        <FlexCol className="opacity-100 md:opacity-0 p-2 md:p-3 lg:p-4 absolute inset-0 justify-center items-center bg-black/50 text-white md:transition-opacity md:duration-300 md:ease-in-out md:group-hover:opacity-100">
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
            </Wrapper>
            <FixedCta />
        </Fragment>
    );
};

export default References;