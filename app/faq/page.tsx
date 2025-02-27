"use client";
import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  HelpCircle,
  X,
  MessageCircle,
} from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  category: "general" | "whitelist" | "minting" | "utility";
}

const FAQPage: React.FC = () => {
  // State to track which FAQ items are expanded
  const [expandedItems, setExpandedItems] = useState<number[]>([]);
  // State to track active category filter
  const [activeCategory, setActiveCategory] = useState<string>("all");

  // Toggle FAQ item expansion
  const toggleItem = (index: number) => {
    if (expandedItems.includes(index)) {
      setExpandedItems(expandedItems.filter((item) => item !== index));
    } else {
      setExpandedItems([...expandedItems, index]);
    }
  };

  // Filter FAQs by category
  const filterByCategory = (category: string) => {
    setActiveCategory(category);
  };

  // FAQ data
  const faqItems: FAQItem[] = [
    {
      question: "What is Cosmic Voyagers NFT?",
      answer:
        "Cosmic Voyagers is a collection of 10,000 unique digital collectibles living on the Ethereum blockchain. Each Voyager grants you access to our metaverse exploration game and exclusive community benefits.",
      category: "general",
    },
    {
      question: "When is the mint date?",
      answer:
        "The whitelist mint begins on June 15, 2025 at 12:00 UTC, and the public sale starts on June 20, 2025 at 12:00 UTC.",
      category: "minting",
    },
    {
      question: "How much does it cost to mint?",
      answer:
        "Whitelist price is 0.06 ETH per NFT, and public sale price is 0.08 ETH per NFT.",
      category: "minting",
    },
    {
      question: "How many can I mint?",
      answer:
        "Whitelist members can mint up to 5 NFTs. During public sale, each wallet can mint up to 3 NFTs.",
      category: "minting",
    },
    {
      question: "How do I get on the whitelist?",
      answer:
        "To join the whitelist, you need to be active in our Discord community, participate in our Twitter events, or contribute to our community initiatives. Whitelist applications close on June 10, 2025.",
      category: "whitelist",
    },
    {
      question: "Will there be a presale?",
      answer:
        "Yes, we will have a whitelist presale for community members who have been active supporters of the project.",
      category: "whitelist",
    },
    {
      question: "What blockchain will Cosmic Voyagers be on?",
      answer:
        "Cosmic Voyagers will be minted on the Ethereum blockchain as ERC-721 tokens.",
      category: "general",
    },
    {
      question: "What are the benefits of holding a Cosmic Voyager?",
      answer:
        "Holding a Cosmic Voyager grants you access to our play-to-earn metaverse game, exclusive Discord channels, voting rights on project development, future airdrops, and eligibility for future collection releases.",
      category: "utility",
    },
    {
      question: "Will there be a secondary market?",
      answer:
        "Yes, after the mint, Cosmic Voyagers will be available on OpenSea and other major NFT marketplaces.",
      category: "general",
    },
    {
      question: "Is there a roadmap?",
      answer:
        "Yes, our roadmap includes community building, the NFT launch, metaverse game development, and future expansions. You can view the detailed roadmap on our website.",
      category: "general",
    },
    {
      question: "How can I verify the authenticity of Cosmic Voyagers?",
      answer:
        "The official contract address will be published on our website and Discord before the mint. Always verify you're minting from the official contract address.",
      category: "minting",
    },
    {
      question: "What happens if the mint doesn't sell out?",
      answer:
        "Any unsold NFTs will be reserved for future community giveaways, collaborations, and ecosystem development.",
      category: "minting",
    },
    {
      question: "Will there be rarity traits?",
      answer:
        "Yes, each Cosmic Voyager has various attributes with different rarity levels. The rarity chart will be published after the mint is complete.",
      category: "general",
    },
    {
      question: "How can I contact the team?",
      answer:
        "You can reach us through our Discord server, Twitter DMs, or by email at team@cosmicvoyagers.io.",
      category: "general",
    },
  ];

  // Filter FAQ items based on active category
  const filteredFAQs =
    activeCategory === "all"
      ? faqItems
      : faqItems.filter((item) => item.category === activeCategory);

  return (
    <>
      <div className="min-h-screen  text-white">
        {/* Hero Section */}
        <header className="relative py-20">
          <div className="absolute inset-0 z-0 opacity-20">
            <img
              src="https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
              alt="Space background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-indigo-200 mb-8">
                Everything you need to know about Cosmic Voyagers NFT
              </p>
              <div className="flex flex-wrap justify-center gap-3 mb-12">
                <button
                  onClick={() => filterByCategory("all")}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === "all"
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  All Questions
                </button>
                <button
                  onClick={() => filterByCategory("general")}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === "general"
                      ? "via-purple-900/30 text-white"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  General
                </button>
                <button
                  onClick={() => filterByCategory("whitelist")}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === "whitelist"
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  Whitelist
                </button>
                <button
                  onClick={() => filterByCategory("minting")}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === "minting"
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  Minting
                </button>
                <button
                  onClick={() => filterByCategory("utility")}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === "utility"
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  Utility
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* FAQ Section */}
        <section className="py-12 pb-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              {filteredFAQs.length > 0 ? (
                <div className="space-y-4">
                  {filteredFAQs.map((faq, index) => (
                    <div
                      key={index}
                      className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl overflow-hidden"
                    >
                      <button
                        onClick={() => toggleItem(index)}
                        className="w-full px-6 py-4 text-left flex justify-between items-center"
                      >
                        <div className="flex items-center">
                          <HelpCircle className="w-5 h-5 text-indigo-400 mr-3 flex-shrink-0" />
                          <span className="text-lg font-medium">
                            {faq.question}
                          </span>
                        </div>
                        {expandedItems.includes(index) ? (
                          <ChevronUp className="w-5 h-5 text-indigo-400" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-indigo-400" />
                        )}
                      </button>
                      {expandedItems.includes(index) && (
                        <div className="px-6 pb-4 pt-0">
                          <div className="pl-8 text-gray-300 border-l border-indigo-700">
                            {faq.answer}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-xl text-gray-400">
                    No FAQs found in this category.
                  </p>
                </div>
              )}

              {/* Still have questions */}
              <div className="mt-16 bg-indigo-900 bg-opacity-50 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">
                  Still have questions?
                </h3>
                <p className="text-indigo-200 mb-6">
                  Can&apos;t find the answer you&apos;re looking for? Please
                  reach out to our community support team.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://discord.gg/cosmicvoyagers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-indigo-700 hover:bg-indigo-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Join Discord
                  </a>
                  <a
                    href="https://twitter.com/cosmicvoyagers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5" />
                    Follow on Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FAQPage;
