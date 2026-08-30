import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sumadija-ketering-srbija.kruger.chatgpt.site"),
  title: "Šumadija Ketering | Ketering širom Srbije",
  description: "Domaći ketering za svadbe, rođendane, firme, veselja i dostojanstvene ispraćaje — dostava širom Srbije.",
  icons: { icon: "/sumadija-ketering-logo.png" },
  openGraph: {
    title: "Šumadija Ketering | Domaći ukusi za celu Srbiju",
    description: "Tradicionalni ketering za svadbe, rođendane, firme, veselja i druge događaje širom Srbije.",
    type: "website",
    locale: "sr_RS",
    images: [{ url: "/og.png", width: 1672, height: 941, alt: "Šumadija Ketering — domaći ukusi za celu Srbiju" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Šumadija Ketering | Domaći ukusi za celu Srbiju",
    description: "Tradicionalni ketering za sve vrste događaja širom Srbije.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="sr"><body>{children}</body></html>;
}
