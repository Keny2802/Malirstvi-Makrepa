import {
    Fragment
} from "react";
import {
    Metadata
} from "next";

import Content from "./Content";

export const metadata: Metadata = {
    title: "Nástřiky umakartu a stěn - Malířství Makrepa | Ostrava",
  description:
    "Profesionální nástřiky umakartu a stěn v Ostravě a okolí. Malířství Makrepa nabízí precizní provedení, kvalitní materiály a čistou práci pro byty, domy a firmy.",
  keywords: [
    "nástřiky umakartu Ostrava",
    "nástřiky stěn Ostrava",
    "malířství Makrepa",
    "malířské práce Ostrava",
    "malování interiérů Ostrava"
  ],
  openGraph: {
    title: "Nástřiky umakartu a stěn - Malířství Makrepa | Ostrava",
    description:
      "Malířství Makrepa provádí profesionální nástřiky umakartu a stěn v Ostravě a okolí. Precizní a čisté provedení, kvalitní materiály.",
    url: "https://malirstvi-ostrava.cz/sluzby/nastriky-umakartu-a-sten",
    siteName: "Malířství Makrepa",
    images: [
      {
        url: "/Fotky/Gallery/Fotka-22.webp",
        width: 1200,
        height: 630,
        alt: "Nástřiky umakartu a stěn Ostrava - Malířství Makrepa"
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