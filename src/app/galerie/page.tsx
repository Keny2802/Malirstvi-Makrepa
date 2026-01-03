import {
    Fragment
} from "react";
import {
    Metadata
} from "next";

import Content from "./Content";

export const metadata: Metadata = {
    title: "Galerie - Malířství Makrepa | Malířské práce Ostrava",
  description:
    "Galerie dokončených malířských prací Malířství Makrepa. Prohlédněte si malování bytů, domů a firemních prostor v Ostravě a okolí - kvalita a precizní provedení.",
  keywords: [
    "galerie malířství Makrepa",
    "malířské práce Ostrava galerie",
    "malování bytů Ostrava",
    "malování domů Ostrava",
    "malování interiérů"
  ],
  openGraph: {
    title: "Galerie - Malířství Makrepa | Malířské práce Ostrava",
    description:
      "Prohlédněte si galerii dokončených malířských prací Malířství Makrepa. Kvalitní a precizní malování bytů, domů a firemních prostor v Ostravě a okolí.",
    url: "https://malirstvi-ostrava.cz/galerie",
    siteName: "Malířství Makrepa",
    images: [
      {
        url: "/Fotky/Gallery/Fotka-22.webp",
        width: 1200,
        height: 630,
        alt: "Malířství Makrepa - galerie malířských prací Ostrava"
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