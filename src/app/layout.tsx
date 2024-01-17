import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CarpTravel",
  description:
    "UNCOVER CARPATHIANS SECRETS Unforgettable trips to the most beautiful parts of the Carpathians. Hoverla, Yaremche, Zakarpattia, Vorokhta, Synevyr Lake, Bukovel. ",
  openGraph: {
    title: "CarpTravel",
    description:
      "Unforgettable trips to the most beautiful parts of the Carpathians. Hoverla, Yaremche, Zakarpattia, Vorokhta, Synevyr Lake, Bukovel.",
    url: "https://nextjs-carp-travel-nine.vercel.app/",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
