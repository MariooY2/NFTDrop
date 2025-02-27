import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Providers } from "./Providers";
import "@rainbow-me/rainbowkit/styles.css";

export const metadata: Metadata = {
  title: "Cosmic Voyagers NFT",
  description:
    "Discover and collect unique digital art from the Cosmic Voyagers NFT collection",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body className="bg-gray-900">
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
