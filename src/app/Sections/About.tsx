import {
    Fragment
} from "react";
import {
    DevicePhoneMobileIcon
} from "@heroicons/react/24/solid";
import Image from "next/image";

import Wrapper from "../Components/Wrapper";
import PageLabel from "../Components/PageLabel";
import Heading from "../Components/Heading";
import SubHeading from "../Components/Subheading";
import FlexCol from "../Components/FlexCol";
import FlexRow from "../Components/FlexRow";
import PhoneLink from "../Components/PhoneLink";
import Icon from "../Components/Icon";
import FixedCta from "../Components/FixedCta";

const About = () => {
    return (
        <Fragment>
            <Wrapper className="px-5 py-8 md:px-8 md:py-12 lg:px-10 lg:py-14 bg-white shadow-md section">
                <PageLabel>
                    O nás
                </PageLabel>
                <FlexCol className="justify-center items-center text-center">
                     <Heading>
                        Přečtěte si a dozvíte se o nás mnohem více
                    </Heading>
                    <SubHeading>
                        Vědět více informací o malíři pokojů se vždy vyplatí.
                    </SubHeading>
                </FlexCol>
                <FlexRow>
                    <FlexCol>
                        {
                            [
                                "Už řadu let poskytujeme svým zákazníkům spolehlivou práci v oboru malování pokojů, interiérů, nátěrů, dekorativních, plastických nástřiků, v moderní renovaci povrchů bytových, umakartových jader bez bourání.",
                                "Naší předností je dostatek zkušeností a praxe, proto na veškeré práce poskytujeme prodlouženou záruku 3 roky. Svou práci bereme zodpovědně a řídíme se tím, že nejdůležitější v naší práci jste Vy - spokojení zákazníci.",
                                "Při práci používáme moderní kvalitní barvy a materiály a využíváme nové technologie."
                            ].map((textBlock, textBlockIndex) => {
                                return (
                                    <Fragment key={textBlockIndex}>
                                        <p className="text-base md:text-[17px] lg:text-lg max-w-3xl">
                                            {textBlock}
                                        </p>
                                    </Fragment>
                                );
                            })
                        }
                        <PhoneLink
                        className="p-3 md:p-4 lg:p-4.5 bg-[#1d4ed8] text-white text-center w-full rounded-md "
                        yes={false}>
                            <Icon>
                                <DevicePhoneMobileIcon />
                            </Icon>
                            Nezávazná konzultace
                        </PhoneLink>
                    </FlexCol>
                    <Wrapper>
                        <Image
                        width={800}
                        height={800}
                        src="/Fotky/About/Fotka-1.webp"
                        alt="Přečtě si a dozvíte se o nás mnohem více"
                        loading="lazy"
                        decoding="async"
                        draggable={false}
                        className="rounded-2xl"
                        />
                    </Wrapper>
                </FlexRow>
            </Wrapper>
            <FixedCta />
        </Fragment>
    );
};

export default About;