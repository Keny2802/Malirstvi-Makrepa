import {
    Fragment
} from "react";
import {
    Metadata
} from "next";

import Content from "./Content";

export const metadata: Metadata = {
    title: "Nátěry dveří, zárubní a topení - Malířství Makrepa | Ostrava",
  description:
    "Profesionální nátěry dveří, zárubní a topení v Ostravě a okolí. Malířství Makrepa nabízí precizní a čisté provedení, kvalitní barvy a dlouhodobou odolnost.",
  keywords: [
    "nátěry dveří Ostrava",
    "nátěry zárubní Ostrava",
    "nátěry topení Ostrava",
    "malířství Makrepa",
    "malířské práce Ostrava",
    "renovace dveří a zárubní"
  ],
  openGraph: {
    title: "Nátěry dveří, zárubní a topení - Malířství Makrepa | Ostrava",
    description:
      "Malířství Makrepa provádí profesionální nátěry dveří, zárubní a topení v Ostravě a okolí. Precizní provedení, kvalitní barvy a dlouhodobá odolnost.",
    url: "https://malirstvi-ostrava.cz/sluzby/natery-dveri-zarubni-topeni",
    siteName: "Malířství Makrepa",
    images: [
      {
        url: "/Fotky/Gallery/Fotka-22.webp",
        width: 1200,
        height: 630,
        alt: "Nátěry dveří, zárubní a topení Ostrava - Malířství Makrepa"
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