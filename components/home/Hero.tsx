import Link from "next/link";
import CountdownTimer from "./CountdownTimer";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center max-h-[55rem]">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-purple-900/30 to-gray-900"></div>

      <div className="relative w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
            Cosmic Voyagers NFT
          </span>
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto text-gray-300 mb-8">
          A collection of 10,000 unique digital explorers journeying through the
          blockchain universe
        </p>

        <CountdownTimer targetDate="2025-04-15T16:00:00Z" />

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <Link
            href="/mint"
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors"
          >
            Join Whitelist
          </Link>
        </div>
      </div>
    </section>
  );
}
