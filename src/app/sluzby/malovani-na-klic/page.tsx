import {
    Fragment
} from "react";
import {
    Metadata
} from "next";

import Content from "./Content";

export const metadata: Metadata = {
    title: "Malování na klíč - Byty, domy a kanceláře | Malířství Makrepa",
  description:
    "Malování na klíč v Ostravě a okolí - kompletní výmalba bytů, domů a kanceláří bez starostí. Malířství Makrepa nabízí precizní, čistou práci a férové ceny.",
  keywords: [
    "malování na klíč Ostrava",
    "výmalba bytů Ostrava",
    "malování domů Ostrava",
    "malování kanceláří Ostrava",
    "malířství Makrepa",
    "malování interiérů Ostrava"
  ],
  openGraph: {
    title: "Malování na klíč - Byty, domy a kanceláře | Malířství Makrepa",
    description:
      "Malířství Makrepa nabízí malování na klíč - kompletní výmalba bytů, domů a kanceláří v Ostravě a okolí. Precizní provedení a čistá práce.",
    url: "https://malirstvi-ostrava.cz/sluzby/malovani-na-klic",
    siteName: "Malířství Makrepa",
    images: [
      {
        url: "/Fotky/Gallery/Fotka-22.webp",
        width: 1200,
        height: 630,
        alt: "Malování na klíč Ostrava - Malířství Makrepa"
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