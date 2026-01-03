import {
    Fragment
} from "react";
import {
    Metadata
} from "next";

import Content from "./Content";

export const metadata: Metadata = {
    title: "Malířské práce Ostrava - Interiéry a komerční prostory | Malířství Makrepa",
  description:
    "Malířské práce v Ostravě a okolí. Malování bytů, domů, kanceláří a provozoven. Precizní provedení, čistá práce a férové ceny.",
  keywords: [
    "malířské práce Ostrava",
    "malování interiérů Ostrava",
    "malování kanceláří Ostrava",
    "malíř Ostrava",
    "malířství Makrepa"
  ],
  openGraph: {
    title: "Malířské práce Ostrava | Malířství Makrepa",
    description:
      "Kompletní malířské práce v Ostravě. Byty, domy i firmy. Rychlé termíny a profesionální přístup.",
    url: "https://malirstvi-ostrava.cz/sluzby",
    siteName: "Malířství Makrepa",
    images: [
      {
        url: "/Fotky/Gallery/Fotka-22.webp",
        width: 1200,
        height: 630,
        alt: "Malířské práce Ostrava - Malířství Makrepa"
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