import {
    Fragment
} from "react";
import {
    Metadata
} from "next";

import Content from "./Content";

export const metadata: Metadata = {
    title: "Španělská technologie - Gotele | Malířství Makrepa Ostrava",
  description:
    "Profesionální aplikace španělské technologie - Gotele v Ostravě a okolí. Malířství Makrepa nabízí precizní provedení stěn, moderní vzhled a čistou práci.",
  keywords: [
    "španělská technologie gotele Ostrava",
    "gotele Ostrava",
    "malířství Makrepa",
    "malířské práce Ostrava",
    "aplikace gotele Ostrava",
    "moderní stěny Ostrava"
  ],
  openGraph: {
    title: "Španělská technologie - Gotele | Malířství Makrepa Ostrava",
    description:
      "Malířství Makrepa provádí profesionální aplikace španělské technologie - Gotele v Ostravě a okolí. Precizní stěny a čisté provedení.",
    url: "https://malirstvi-ostrava.cz/sluzby/spanelska-technologie-gotele",
    siteName: "Malířství Makrepa",
    images: [
      {
        url: "/Fotky/Gallery/Fotka-22.webp",
        width: 1200,
        height: 630,
        alt: "Španělská technologie Gotele Ostrava - Malířství Makrepa"
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