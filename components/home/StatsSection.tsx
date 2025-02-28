"use client";
import { useState, useEffect } from "react";

interface StatsData {
  totalNFTs: number;
  totalMinted: number;
  MintPrice: string;
}

export default function StatsSection() {


  const [animatedStats, setAnimatedStats] = useState<StatsData>({
    totalNFTs: 0,
    totalMinted: 0,
    MintPrice: "0",
  });

  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      const finalStats = {
        totalNFTs: 11000,
        totalMinted: 0,
        MintPrice: "0.22 ETH",
        floorPrice: "0.45 ETH",
      };

      // Animation logic
      const duration = 2000; // 2 seconds animation
      const steps = 50; // number of steps in the animation
      const interval = duration / steps;

      let step = 0;

      const timer = setInterval(() => {
        step++;
        const progress = step / steps;

        setAnimatedStats({
          totalNFTs: Math.round(progress * finalStats.totalNFTs),
          totalMinted: Math.round(progress * finalStats.totalMinted),
          MintPrice: finalStats.MintPrice,
        });

        if (step >= steps) {
          clearInterval(timer);
        }
      }, interval);

      return () => clearInterval(timer);
    }, 1000);
  }, []);

  return (
    <section className="py-12 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-gray-900 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-purple-400">
              {animatedStats.totalNFTs.toLocaleString()}
            </div>
            <div className="text-gray-300">Total NFTs</div>
          </div>
          <div className="bg-gray-900 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-purple-400">
              {animatedStats.totalMinted.toLocaleString()}
            </div>
            <div className="text-gray-300">Total Minted</div>
          </div>
          <div className="bg-gray-900 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-purple-400">
              {animatedStats.MintPrice}
            </div>
            <div className="text-gray-300">Mint Price</div>
          </div>
        </div>
      </div>
    </section>
  );
}
