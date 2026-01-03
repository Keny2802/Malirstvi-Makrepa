import {
    Fragment
} from "react";
import {
    Metadata
} from "next";

import Content from "./Content";

export const metadata: Metadata = {
    title: "O nás - Malířství Makrepa | Profesionální malíři v Ostravě",
  description:
    "Malířství Makrepa - profesionální malíři v Ostravě s dlouholetou praxí. Specializujeme se na malování bytů, domů a firemních prostor s důrazem na kvalitu, čistou práci a spokojenost zákazníků.",
  keywords: [
    "o nás Malířství Makrepa",
    "profesionální malíři Ostrava",
    "malířská firma Ostrava",
    "malování interiérů",
    "malířství Makrepa"
  ],
  openGraph: {
    title: "O nás - Malířství Makrepa | Profesionální malíři v Ostravě",
    description:
      "Malířství Makrepa - dlouholetá zkušenost a precizní práce. Postaráme se o malování bytů, domů i firemních prostor v Ostravě a okolí.",
    url: "https://malirstvi-ostrava.cz/o-nas",
    siteName: "Malířství Makrepa",
    images: [
      {
        url: "/Fotky/Gallery/Fotka-22.webp",
        width: 1200,
        height: 630,
        alt: "Malířství Makrepa - profesionální malíři Ostrava"
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