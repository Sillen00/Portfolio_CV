import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./Footer";
import NavBar from "./NavBar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
    url: "https://simonbengtsson.com", // Fix URL
    siteName: "Portfolio",
    title: "Portfolio - Simon Bengtsson - Fullstack Developer - Gothenburg",
    description: "Simon Bengtsson portfolio and CV page built with Next.js to showcase my work and skills as a fullstack developer.",
    images: [
      {
        url: "https://simonbengtsson.com/images/og-image.png", // Fix OpenGraph image
        alt: "Simon Bengtsson",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
