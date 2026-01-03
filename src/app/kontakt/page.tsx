import {
    Fragment
} from "react";
import {
    Metadata
} from "next";

import Content from "./Content";

export const metadata: Metadata = {
    title: "Kontakt - Malířství Makrepa | Malířské práce Ostrava",
  description:
    "Kontaktujte Malířství Makrepa v Ostravě a okolí. Objednejte malířské práce pro byt, dům či firmu. Rychlá komunikace a profesionální služby.",
  keywords: [
    "kontakt Malířství Makrepa",
    "malíř Ostrava kontakt",
    "malířské práce Ostrava",
    "objednat malování Ostrava",
    "malování interiérů Ostrava"
  ],
  openGraph: {
    title: "Kontakt - Malířství Makrepa | Malířské práce Ostrava",
    description:
      "Kontaktujte Malířství Makrepa v Ostravě. Objednejte malířské práce pro byty, domy nebo firmy a domluvte si termín.",
    url: "https://malirstvi-ostrava.cz/kontakt",
    siteName: "Malířství Makrepa",
    images: [
      {
        url: "/Fotky/Gallery/Fotka-22.webp",
        width: 1200,
        height: 630,
        alt: "Malířství Makrepa - kontakt Ostrava"
      }
    ],
    locale: "cs_CZ",
    type: "website"
  },
  robots: { index: true, follow: true }
};

const Page = () => {
    return (
        <Fragment>
            <Content />
        </Fragment>
    );
};

export default Page;