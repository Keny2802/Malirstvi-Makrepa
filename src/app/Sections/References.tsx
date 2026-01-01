import {
    Fragment
} from "react";
import Image from "next/image";

import Wrapper from "../Components/Wrapper";

const References = () => {
    return (
        <Fragment>
            <Wrapper
            className="px-5 py-8 md:px-8 md:py-12 lg:px-10 lg:py-14 border-t border-gray-200 bg-white shadow-md section"
            id="reference">
                <Wrapper className="flex justify-center items-center flex-col gap-1.5 md:gap-2 lg:gap-2.5 text-center">
                    <h2 className="text-3xl md:text-[42px] lg:text-5xl font-extrabold">
                        Reference našich klientů mluví za nás
                    </h2>
                    <p className="text-base md:text-[17px] lg:text-lg text-center max-w-3xl">
                        Přečtěte si co nás říkají naši klienti.
                    </p>
                </Wrapper>
                <Wrapper className="mt-4 md:mt-5 lg:mt-6 flex justify-center items-center flex-wrap flex-col md:flex-row gap-4 md:gap-5 lg:gap-6">
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
        </Fragment>
    );
};

export default References;