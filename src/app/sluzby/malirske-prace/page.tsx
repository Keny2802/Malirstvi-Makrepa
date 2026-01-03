import {
    Fragment
} from "react";
import {
    Metadata
} from "next";

import Content from "./Content";

export const metadata: Metadata = {
    title: "Malířské práce - Byty, domy a kanceláře | Malířství Makrepa",
  description:
    "Profesionální malířské práce v Ostravě a okolí. Kompletní malování bytů, domů a kanceláří s důrazem na kvalitu, čistou práci a spokojenost zákazníků.",
  keywords: [
    "malířské práce Ostrava",
    "malování bytů Ostrava",
    "malování domů Ostrava",
    "malování kanceláří Ostrava",
    "malířství Makrepa",
    "malování interiérů"
  ],
  openGraph: {
    title: "Malířské práce - Byty, domy a kanceláře | Malířství Makrepa",
    description:
      "Malířství Makrepa nabízí profesionální malířské práce v Ostravě a okolí - byty, domy, kanceláře. Precizní a čisté provedení.",
    url: "https://malirstvi-ostrava.cz/sluzby/malirske-prace",
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