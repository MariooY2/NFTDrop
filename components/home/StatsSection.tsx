"use client";
import { useState, useEffect } from "react";

interface StatsData {
  totalNFTs: number;
  totalOwners: number;
  floorPrice: string;
  totalVolume: string;
}

export default function StatsSection() {
  const [stats, setStats] = useState<StatsData>({
    totalNFTs: 0,
    totalOwners: 0,
    floorPrice: "0",
    totalVolume: "0",
  });

  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      setStats({
        totalNFTs: 10000,
        totalOwners: 3750,
        floorPrice: "0.22 ETH",
        totalVolume: "1,452 ETH",
      });
    }, 1000);
  }, []);

  return (
    <section className="py-12 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-gray-900 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-purple-400">
              {stats.totalNFTs.toLocaleString()}
            </div>
            <div className="text-gray-300">Total NFTs</div>
          </div>
          <div className="bg-gray-900 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-purple-400">
              {stats.totalOwners.toLocaleString()}
            </div>
            <div className="text-gray-300">Unique Owners</div>
          </div>
          <div className="bg-gray-900 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-purple-400">
              {stats.floorPrice}
            </div>
            <div className="text-gray-300">Floor Price</div>
          </div>
          <div className="bg-gray-900 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-purple-400">
              {stats.totalVolume}
            </div>
            <div className="text-gray-300">Total Volume</div>
          </div>
        </div>
      </div>
    </section>
  );
}
