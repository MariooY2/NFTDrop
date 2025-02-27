"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import NFTCard from "../shared/NFTCard";
import { NFT } from "../../types/NFT";
import Loader from "../ui/Loader";
export default function FeaturedNFTs() {
  const [featuredNFTs, setFeaturedNFTs] = useState<NFT[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setFeaturedNFTs([
        {
          id: 1,
          name: "Cosmic Voyager #?",
          description: "A journey through the digital cosmos",
          image: "/images/1.png",
        },
        {
          id: 2,
          name: "Nebula Dreamer #?",
          description: "Dreams woven into digital nebulae",
          image: "/images/42.png",
        },
        {
          id: 3,
          name: "Star Gazer #?",
          description: "Eternal witness to the digital stars",
          image: "/images/60.png",
        },
        {
          id: 4,
          name: "Cosmic Entity #?",
          description: "Born from the void between pixels",
          image: "/images/56.png",
        },
      ]);
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured <span className="text-purple-400">Voyagers</span>
        </h2>

        {isLoading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredNFTs.map((nft) => (
              <NFTCard key={nft.id} nft={nft} />
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <Link
            href="/mint"
            className="inline-block bg-gray-800 text-purple-400 hover:bg-gray-700 font-bold py-3 px-8 rounded-lg text-lg transition-colors"
          >
            Mint Now
          </Link>
        </div>
      </div>
    </section>
  );
}
