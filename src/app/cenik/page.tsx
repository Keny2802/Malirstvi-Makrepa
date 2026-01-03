import {
    Fragment
} from "react";
import {
    Metadata
} from "next";

import Content from "./Content";

export const metadata: Metadata = {
    title: "Ceník - Malířství Makrepa | Malířské práce Ostrava",
  description:
    "Ceník služeb Malířství Makrepa. Přehledné ceny malířských prací v Ostravě a okolí - malování bytů, domů a firemních prostor. Férové ceny a precizní práce.",
  keywords: [
    "ceník malířské práce Ostrava",
    "ceny malování bytů Ostrava",
    "ceny malování domů Ostrava",
    "malířství Makrepa",
    "malíř Ostrava"
  ],
  openGraph: {
    title: "Ceník - Malířství Makrepa | Malířské práce Ostrava",
    description:
      "Přehled cen malířských prací v Ostravě a okolí. Malířství Makrepa nabízí férové ceny a kvalitní služby pro byty, domy i firmy.",
    url: "https://malirstvi-ostrava.cz/cenik",
    siteName: "Malířství Makrepa",
    images: [
      {
        url: "/Fotky/Gallery/Fotka-22.webp",
        width: 1200,
        height: 630,
        alt: "Malířství Makrepa - ceník malířských prací Ostrava"
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