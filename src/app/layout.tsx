import type {
  Metadata
} from "next";
import "./globals.css";

import Loading from "./Components/Loading";

export const metadata: Metadata = {
  title: "Malířské práce - Profesionální malování bytů a domů | Malířství Makrepa",
  // description: "Profesionální malířské práce - malování bytů, domů i komerčních prostor. Precizní provedení, čistá práce, férové ceny. Působíme v Ostravě a 50 km okolí",
  description: "Malířské práce v Ostravě a okolí. Malování bytů, domů i firemních prostor. Čistá a precizní práce, férové ceny. Malířství Makrepa.",
  icons: {
    icon: [
      {
        url: "/Fotky/Logo/Favicon.ico",
        type: "image/vnd.microsoft.icon"
      }
    ]
  },
  keywords: [
    "malířské práce Ostrava",
    "malíř Ostrava",
    "malování bytů Ostrava",
    "malování domů Ostrava",
    "malování interiérů",
    "výmalba bytu Ostrava",
    "malířství Makrepa"
  ],
  openGraph: {
    title: "Malířské práce Ostrava | Malířství Makrepa",
    description:
      "Profesionální malířské práce v Ostravě. Malování bytů, domů i komerčních prostor. Nezávazná cenová nabídka zdarma.",
    url: "https://malirstvi-ostrava.cz.cz",
    siteName: "Malířství Makrepa",
    images: [
      {
        url: "/Fotky/Gallery/Fotka-22.webp",
        width: 1000,
        height: 1000,
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body>
        <Loading />
        {children}
      </body>
    </html>
  );
}
