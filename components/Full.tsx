"use client"
// pages/index.tsx
import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

// Define TypeScript interfaces
interface NFT {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
  owner: string;
}

interface Stats {
  totalNFTs: number;
  totalOwners: number;
  floorPrice: string;
  totalVolume: string;
}

export default function Full() {
  const [featuredNFTs, setFeaturedNFTs] = useState<NFT[]>([]);
  const [stats, setStats] = useState<Stats>({
    totalNFTs: 0,
    totalOwners: 0,
    floorPrice: "0",
    totalVolume: "0",
  });
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  // Mock data - in a real app, this would come from an API
  useEffect(() => {
    // Simulate API fetch delay
    setTimeout(() => {
      setFeaturedNFTs([
        {
          id: 1,
          name: "Cosmic Voyager #001",
          description: "A journey through the digital cosmos",
          image: "/api/placeholder/400/400",
          price: "0.25 ETH",
          owner: "0x7a23...45f9",
        },
        {
          id: 2,
          name: "Nebula Dreamer #042",
          description: "Dreams woven into digital nebulae",
          image: "/api/placeholder/400/400",
          price: "0.31 ETH",
          owner: "0x3b71...92e4",
        },
        {
          id: 3,
          name: "Star Gazer #117",
          description: "Eternal witness to the digital stars",
          image: "/api/placeholder/400/400",
          price: "0.28 ETH",
          owner: "0x9c43...67b2",
        },
        {
          id: 4,
          name: "Cosmic Entity #256",
          description: "Born from the void between pixels",
          image: "/api/placeholder/400/400",
          price: "0.35 ETH",
          owner: "0x2f19...38a7",
        },
      ]);

      setStats({
        totalNFTs: 10000,
        totalOwners: 3750,
        floorPrice: "0.22 ETH",
        totalVolume: "1,452 ETH",
      });

      setIsLoading(false);
    }, 1000);
  }, []);

  // Countdown to mint date
  useEffect(() => {
    const mintDate = new Date("2025-04-15T16:00:00Z").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = mintDate - now;

      setCountdown({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title>
          Cosmic Voyagers NFT | Digital Collectibles from Another Dimension
        </title>
        <meta
          name="description"
          content="Discover and collect unique digital art from the Cosmic Voyagers NFT collection"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <nav className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-xl font-bold text-purple-400">
                  Cosmic Voyagers
                </span>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    href="/"
                    className="px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900"
                  >
                    Home
                  </Link>
                  <Link
                    href="/collection"
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Collection
                  </Link>
                  <Link
                    href="/mint"
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Mint
                  </Link>
                  <Link
                    href="/roadmap"
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Roadmap
                  </Link>
                  <Link
                    href="/faq"
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    FAQ
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
                Connect Wallet
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-purple-900/30 to-gray-900">
          <div className="absolute inset-0 bg-[url('/api/placeholder/1800/800')] bg-cover opacity-30 mix-blend-overlay"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
              Cosmic Voyagers NFT
            </span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300 mb-8">
            A collection of 10,000 unique digital explorers journeying through
            the blockchain universe
          </p>

          {/* Countdown Timer */}
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto mb-8">
            <h2 className="text-xl font-bold mb-4">Public Mint Begins In:</h2>
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-gray-900 rounded-lg p-3">
                <div className="text-3xl font-bold text-purple-400">
                  {countdown.days}
                </div>
                <div className="text-gray-400 text-sm">Days</div>
              </div>
              <div className="bg-gray-900 rounded-lg p-3">
                <div className="text-3xl font-bold text-purple-400">
                  {countdown.hours}
                </div>
                <div className="text-gray-400 text-sm">Hours</div>
              </div>
              <div className="bg-gray-900 rounded-lg p-3">
                <div className="text-3xl font-bold text-purple-400">
                  {countdown.minutes}
                </div>
                <div className="text-gray-400 text-sm">Minutes</div>
              </div>
              <div className="bg-gray-900 rounded-lg p-3">
                <div className="text-3xl font-bold text-purple-400">
                  {countdown.seconds}
                </div>
                <div className="text-gray-400 text-sm">Seconds</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/mint"
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors"
            >
              Join Whitelist
            </Link>
            <Link
              href="/collection"
              className="bg-transparent border border-purple-500 text-purple-400 hover:bg-purple-900/30 font-bold py-3 px-8 rounded-lg text-lg transition-colors"
            >
              View Collection
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
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

      {/* Featured NFTs Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured <span className="text-purple-400">Voyagers</span>
          </h2>

          {isLoading ? (
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredNFTs.map((nft) => (
                <div
                  key={nft.id}
                  className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-purple-500/20 transition-shadow"
                >
                  <div className="relative h-64 w-full">
                    <Image
                      src={nft.image}
                      alt={nft.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold mb-2">{nft.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">
                      {nft.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-sm text-gray-500">Price</div>
                        <div className="font-bold text-purple-400">
                          {nft.price}
                        </div>
                      </div>
                      <Link
                        href={`/nft/${nft.id}`}
                        className="text-sm text-purple-400 hover:text-purple-300 underline"
                      >
                        View Details →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-12 text-center">
            <Link
              href="/collection"
              className="inline-block bg-gray-800 text-purple-400 hover:bg-gray-700 font-bold py-3 px-8 rounded-lg text-lg transition-colors"
            >
              View Full Collection
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                About <span className="text-purple-400">Cosmic Voyagers</span>
              </h2>
              <p className="text-gray-300 mb-6">
                Cosmic Voyagers is a collection of 10,000 unique NFTs living on
                the Ethereum blockchain. Each Voyager is meticulously crafted
                with over 200 possible traits, ensuring that every piece in your
                collection is truly one-of-a-kind.
              </p>
              <p className="text-gray-300 mb-6">
                As a Cosmic Voyager holder, you'll gain exclusive access to our
                Voyager Club, future drops, interactive experiences, and a voice
                in our DAO that helps guide the project's future.
              </p>
              <div className="flex gap-4">
                <Link
                  href="/about"
                  className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-lg transition-colors"
                >
                  Learn More
                </Link>
                <Link
                  href="/roadmap"
                  className="bg-transparent border border-purple-500 text-purple-400 hover:bg-purple-900/30 font-bold py-2 px-6 rounded-lg transition-colors"
                >
                  View Roadmap
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gray-700 rounded-xl overflow-hidden relative">
                <Image
                  src="/api/placeholder/600/500"
                  alt="Cosmic Voyagers Collection Preview"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -top-5 -left-5 w-24 h-24 bg-purple-600 rounded-xl flex items-center justify-center rotate-12">
                <span className="text-xl font-bold">10K</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Meet the <span className="text-purple-400">Team</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Alex Stargazer",
                role: "Founder & Artist",
                image: "/api/placeholder/300/300",
              },
              {
                name: "Zoe Quantum",
                role: "Lead Developer",
                image: "/api/placeholder/300/300",
              },
              {
                name: "Max Nebula",
                role: "Community Manager",
                image: "/api/placeholder/300/300",
              },
              {
                name: "Ella Cosmos",
                role: "Marketing Director",
                image: "/api/placeholder/300/300",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl overflow-hidden text-center hover:transform hover:scale-105 transition-transform"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-purple-400">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Join Our <span className="text-purple-400">Community</span>
          </h2>
          <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
            Be part of our growing community of cosmic explorers. Join the
            conversation, get exclusive updates, and participate in special
            events.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: "Discord", color: "bg-indigo-600 hover:bg-indigo-700" },
              { name: "Twitter", color: "bg-blue-500 hover:bg-blue-600" },
              { name: "Instagram", color: "bg-pink-600 hover:bg-pink-700" },
              { name: "OpenSea", color: "bg-blue-600 hover:bg-blue-700" },
            ].map((platform, index) => (
              <a
                href="#"
                key={index}
                className={`${platform.color} text-white font-bold py-3 px-6 rounded-lg transition-colors`}
              >
                {platform.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-purple-400 mb-4">
                Cosmic Voyagers
              </h3>
              <p className="text-gray-400">
                A unique collection of 10,000 digital explorers on the Ethereum
                blockchain.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/" className="hover:text-purple-400">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/collection" className="hover:text-purple-400">
                    Collection
                  </Link>
                </li>
                <li>
                  <Link href="/mint" className="hover:text-purple-400">
                    Mint
                  </Link>
                </li>
                <li>
                  <Link href="/roadmap" className="hover:text-purple-400">
                    Roadmap
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Community</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-purple-400">
                    Discord
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-400">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-400">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-400">
                    OpenSea
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Subscribe</h4>
              <p className="text-gray-400 mb-2">Get the latest updates</p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-800 text-white px-4 py-2 rounded-lg flex-grow"
                />
                <button
                  type="submit"
                  className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg"
                >
                  →
                </button>
              </form>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
            <p>© 2025 Cosmic Voyagers. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
