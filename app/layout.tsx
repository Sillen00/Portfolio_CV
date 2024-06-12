import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import AbsoluteLinks from "./components/AbsoluteLinks";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

const inter = Roboto({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  variable: "--roboto",
});

export const metadata: Metadata = {
  title: "Portfolio - Simon Bengtsson - Fullstack Developer - Gothenburg",
  description: "Simon Bengtsson portfolio and CV page built with Next.js to showcase my work and skills as a fullstack developer.",
  creator: "Simon Bengtsson",
  applicationName: "Portfolio",
  keywords: "portfolio, cv, fullstack, developer, gothenburg, simon bengtsson",
  generator: "Next.js",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Portfolio",
    title: "Portfolio - Simon Bengtsson - Fullstack Developer - Gothenburg",
    description: "Simon Bengtsson portfolio and CV page built with Next.js to showcase my work and skills as a fullstack developer.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <AbsoluteLinks />
        <Footer />
      </body>
    </html>
  );
}
