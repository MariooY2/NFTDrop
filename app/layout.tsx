import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
      <body className="bg-gray-900">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
