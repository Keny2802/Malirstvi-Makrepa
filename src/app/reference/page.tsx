import {
    Fragment
} from "react";
import {
    Metadata
} from "next";

import Content from "./Content";

export const metadata: Metadata = {
    title: "Reference - Malířství Makrepa | Malířské práce Ostrava",
  description:
    "Reference zákazníků Malířství Makrepa - spokojené klienty v Ostravě a okolí. Podívejte se na hodnocení a zkušenosti s malováním bytů, domů a firemních prostor.",
  keywords: [
    "reference Malířství Makrepa",
    "hodnocení malíř Ostrava",
    "spokojení zákazníci Ostrava",
    "malování bytů Ostrava reference",
    "malování domů Ostrava"
  ],
  openGraph: {
    title: "Reference - Malířství Makrepa | Malířské práce Ostrava",
    description:
      "Podívejte se na reference zákazníků Malířství Makrepa. Spokojení klienti v Ostravě a okolí, kvalitní a precizní malířské práce.",
    url: "https://malirstvi-ostrava.cz/reference",
    siteName: "Malířství Makrepa",
    images: [
      {
        url: "/Fotky/Gallery/Fotka-22.webp",
        width: 1200,
        height: 630,
        alt: "Malířství Makrepa - reference malířských prací Ostrava"
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