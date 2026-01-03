import {
    Fragment
} from "react";
import {
    Metadata
} from "next";

import Content from "./Content";

export const metadata: Metadata = {
    title: "Dekorativní malby - Malířství Makrepa | Ostrava",
  description:
    "Dekorativní malby pro byty, domy a kanceláře v Ostravě a okolí. Malířství Makrepa nabízí precizní provedení, originální design a čistou práci.",
  keywords: [
    "dekorativní malby Ostrava",
    "malířství Makrepa",
    "malování interiérů Ostrava",
    "dekorativní stěny Ostrava",
    "originální malby Ostrava",
    "malířské práce Ostrava"
  ],
  openGraph: {
    title: "Dekorativní malby - Malířství Makrepa | Ostrava",
    description: "Malířství Makrepa provádí dekorativní malby v Ostravě a okolí - precizní práce, originální design a čisté provedení stěn.",
    url: "https://malirstvi-ostrava.cz/sluzby/dekorativni-malby",
    siteName: "Malířství Makrepa",
    images: [
      {
        url: "/Fotky/Gallery/Fotka-22.webp",
        width: 1200,
        height: 630,
        alt: "Dekorativní malby Ostrava - Malířství Makrepa"
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