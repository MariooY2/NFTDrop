"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import NFTCard from "../shared/NFTCard";
import { NFT } from "../../types/NFT";
import Loader from "../ui/Loader";

export default function FeaturedNFTs() {
  const [featuredNFTs, setFeaturedNFTs] = useState<NFT[]>([]); // Fixed: Changed from NFT to NFT[]
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setFeaturedNFTs([
        {
          id: 1,
          name: "Cosmic Voyager #42",
          description: "A journey through the digital cosmos",
          image: "/images/1.png",
        },
        {
          id: 2,
          name: "Nebula Dreamer #87",
          description: "Dreams woven into digital nebulae",
          image: "/images/42.png",
        },
        {
          id: 3,
          name: "Star Gazer #13",
          description: "Eternal witness to the digital stars",
          image: "/images/60.png",
        },
        {
          id: 4,
          name: "Cosmic Entity #56",
          description: "Born from the void between pixels",
          image: "/images/56.png",
        },
        {
          id: 5,
          name: "Astral Navigator #19",
          description: "Finding paths through digital constellations",
          image: "/images/30.png",
        },
        {
          id: 6,
          name: "Quantum Explorer #77",
          description: "Traversing the quantum fabric of the metaverse",
          image: "/images/25.png",
        },
        {
          id: 7,
          name: "Galaxy Weaver #35",
          description: "Crafting digital galaxies with code",
          image: "/images/18.png",
        },
        {
          id: 8,
          name: "Void Wanderer #91",
          description: "Drifting through the digital void",
          image: "/images/33.png",
        },
      ]);
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="w-full py-12 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-purple-400 mb-8">
          <span className="text-blak">Featured</span> Voyagers
        </h2>

        {isLoading ? (
          <div className="flex justify-center my-12">
            <Loader />
          </div>
        ) : (
          <div className="relative overflow-hidden w-full">
            <div className="animate-scroll flex space-x-4 py-4 w-max">
              {/* Duplicate the NFTs for seamless loop */}
              {[...featuredNFTs, ...featuredNFTs].map((nft, index) => (
                <div key={`${index}`} className="w-64 flex-shrink-0">
                  <NFTCard nft={nft} animated={true}/>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-8 flex justify-center">
          <Link
            href="/mint"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full transition duration-300"
          >
            Mint Now
          </Link>
        </div>
      </div>
    </div>
  );
}
