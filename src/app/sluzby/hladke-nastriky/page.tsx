import {
    Fragment
} from "react";
import {
    Metadata
} from "next";

import Content from "./Content";

export const metadata: Metadata = {
    title: "Hladké nástřiky - Malířství Makrepa | Ostrava",
  description:
    "Profesionální hladké nástřiky stěn a stropů v Ostravě a okolí. Malířství Makrepa nabízí precizní provedení, čistou práci a dlouhodobou kvalitu povrchu.",
  keywords: [
    "hladké nástřiky Ostrava",
    "malířství Makrepa",
    "malířské práce Ostrava",
    "malování interiérů Ostrava",
    "nástřiky stěn a stropů Ostrava"
  ],
  openGraph: {
    title: "Hladké nástřiky - Malířství Makrepa | Ostrava",
    description:
      "Malířství Makrepa provádí profesionální hladké nástřiky stěn a stropů v Ostravě a okolí. Precizní práce, čistý a rovný povrch.",
    url: "https://malirstvi-ostrava.cz/sluzby/hladke-nastriky",
    siteName: "Malířství Makrepa",
    images: [
      {
        url: "/Fotky/Gallery/Fotka-22.webp",
        width: 1200,
        height: 630,
        alt: "Hladké nástřiky Ostrava - Malířství Makrepa"
      }
    ],
    locale: "cs_CZ",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

const Page = () => {
    return (
        <Fragment>
            <Content />
        </Fragment>
    );
};

export default Page;