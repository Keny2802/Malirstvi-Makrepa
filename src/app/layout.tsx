import type {
  Metadata
} from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Malířství Makrepa | Josef Krejčiřík",
  description: "Profesionální malířské práce bez starostí",
  icons: {
    icon: [
      {
        url: "/Fotky/Logo/Favicon.ico",
        type: "image/vnd.microsoft.icon"
      }
    ]
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
        {children}
      </body>
    </html>
  );
}
