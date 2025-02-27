"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState<number>(0);

  const navItems = [
    { name: "Home", href: "/", id: 0 },
    { name: "Mint", href: "/mint", id: 1 },
    { name: "Roadmap", href: "/roadmap", id: 2 },
    { name: "FAQ", href: "/faq", id: 3 },
  ];

  return (
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
                {navItems.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      active === item.id
                        ? "text-white bg-gray-900"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    }`}
                    onClick={() => setActive(item.id)}
                  >
                    {item.name}
                  </Link>
                ))}
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
  );
}
