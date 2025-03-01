// components/home/Hero.jsx - Fixed for hydration issues
"use client";
import Link from "next/link";
import CountdownTimer from "./CountdownTimer";
import { motion } from "framer-motion";


export default function HeroSection() {


  // Don't render animated stars until client-side
  return (
    <section className="relative h-screen flex items-center justify-center max-h-[55rem] overflow-hidden">
      {/* Static gradient background for server-side rendering */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-purple-900/30 to-gray-900"></div>


      <div className="relative w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <motion.h1
          className="mb-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block text-4xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 leading-tight pb-5">
            Cosmic Voyagers NFT
          </span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl max-w-2xl mx-auto text-gray-300 mb-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          A collection of 10,000 unique digital explorers journeying through the
          blockchain universe
        </motion.p>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <CountdownTimer targetDate="2025-04-15T16:00:00Z" />
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4 mt-8"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/mint"
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors inline-block"
            >
              Join Whitelist
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
